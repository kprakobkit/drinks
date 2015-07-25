require 'json'

TARGET_FILE = "./app/json/tools.json"
files = Dir['./app/json/*.json']
tools = []

File.delete(TARGET_FILE) if (File.exists?(TARGET_FILE))

files.each do |file_name|

  file = File.read(file_name);

  drinks = JSON.parse(file)["result"]

  uniq_tools = drinks.map do |drink|
    drink["tools"]
  end.flatten.uniq

  tools.concat(uniq_tools);
end

File.open(TARGET_FILE,"w") do |f|
  f.write(tools.uniq.compact.to_json)
end
