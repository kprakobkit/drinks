require 'json'

files = Dir['./app/json/*.json']
tools = []

files.each do |file_name|

  file = File.read(file_name);

  drinks = JSON.parse(file)["result"]

  uniq_tools = drinks.map do |drink|
    drink["tools"]
  end.flatten.uniq

  tools.concat(uniq_tools);
end

File.open("./app/json/tools.json","w") do |f|
  f.write(tools.to_json)
end
