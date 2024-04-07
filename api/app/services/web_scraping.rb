require "mechanize"

class WebScraping
  def check
    agent = Mechanize.new
    page = agent.get(ENV["SCRAPING_URL"])

    subject = nil

    page.search(".outer tr").each_with_index do |row, index|
      next if index < 1

      # 学科
      subject_node = row.at(".head")
      if subject_node.present?
        subject_name = subject_node.text.strip
        subject = Subject.find_or_create_by(name: subject_name)
        next
      end

      # 研究室
      columns = row.search("td")
      next if columns.empty?
      laboratory = Laboratory.find_or_create_by(
        name: columns[1].text.strip,
        capacity: columns[2].text.strip,
        registrants_str: columns[3].text.strip,
        subject: subject,
      )
      # 研究室が登録されている場合は、登録者数を更新する
      if laboratory.persisted?
        if laboratory.registrants_str != columns[3].text.strip
          laboratory.update(registrants_str: columns[3].text.strip)
          ActionCable.server.broadcast("check_count_channel_#{laboratory.id}", { registrants_str: columns[3].text.strip })
        end
      end
    end
  end
end
