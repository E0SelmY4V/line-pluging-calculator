use line_pluging_calculator::read_json;


fn main() {
	let data = read_json::get();
	print!("{:#?}", data);
	return ();
}