use line_pluging_calculator::{read_json, Calculator};

fn main() {
    calc();
}

fn calc() {
    let relation = read_json::get();
    let mut calculator = Calculator::new(relation);
    // println!("{:#?}", calculator.relation);
    calculator.run(1);
    println!("{:#?}", calculator.results);
    return ();
}
