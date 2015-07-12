require 'json'

file = File.read('ingredients.json')
apikey = "c19d5f8759a24c55bf6a31cf690722f8";
drink_search_url = "http://addb.absolutdrinks.com/drinks/withtype/"

data_hash = JSON.parse(file)
ingredient_type = data_hash["result"].map { |type| type["type"] }

ingredient_type.each do |ingredient|
  final_url = "curl " + drink_search_url + ingredient + "/?apikey=" + apikey
  `curl #{final_url} >> json/#{ingredient}.json`
end
