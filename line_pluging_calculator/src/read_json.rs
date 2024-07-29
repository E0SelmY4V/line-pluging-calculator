use std::fs;
use std::collections::{HashMap, HashSet};

pub type Relation = HashMap<i16, HashMap<i16, HashSet<i16>>>;

pub fn get() -> Relation {
	let raw_json = fs::read_to_string("../relation.json").expect("阅读文件失败");
    let parsed: Vec<Vec<Vec<i16>>> = serde_json::from_str(&raw_json).unwrap();
	let mut relation: Relation = HashMap::new();
	for (me, family) in parsed.iter().enumerate() {
		let mut new_family = HashMap::new();
		for (him, set) in family.iter().enumerate() {
			let mut new_set = HashSet::new();
			let him: i16 = him.try_into().unwrap();
			for position in set {
				new_set.insert(*position);
			}
			new_family.insert(him, new_set);
		}
		let mut needless_hims = vec![];
		for (him, set) in new_family.iter() {
			if set.len() == 0 {
				needless_hims.push(*him);
			}
		}
		for needless_him in needless_hims {
			new_family.remove(&needless_him).unwrap();
		}
		relation.insert(me.try_into().unwrap(), new_family);
	}
    return relation;
}
