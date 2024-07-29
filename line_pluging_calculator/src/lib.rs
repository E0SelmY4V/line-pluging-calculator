use std::
    collections::{HashMap, HashSet}
;

use read_json::Relation;

pub mod read_json;

#[derive(Clone, Copy)]
struct Size {
    top: i16,
    bottom: i16,
}
pub struct Calculator {
    pub relation: Relation,
    max: i16,
    banned_position: HashMap<i16, HashSet<i16>>,
    position_now: HashMap<i16, i16>,
    size: Size,
    min_height: i16,
    pub results: Vec<HashMap<i16, i16>>,
}
impl Calculator {
    pub fn new(relation: Relation) -> Calculator {
        let max: i16 = relation.len().try_into().unwrap();
        let mut banned_position = HashMap::new();
        let mut position_now = HashMap::new();
        for line in 0..max {
            banned_position.insert(line + 1, HashSet::new());
        }
        position_now.insert(1, 0);
        Calculator {
            relation,
            max,
            banned_position,
            position_now,
            size: Size { bottom: 0, top: 0 },
            min_height: 10,
            results: vec![],
        }
    }
    pub fn run(&mut self, line_now: i16) {
        let height = self.size.top - self.size.bottom + 1;
        if height > self.min_height {
            return;
        }
        if line_now == self.max {
            if self.min_height > height {
                self.min_height = height;
                self.results.clear();
            }
            let result = self.position_now.clone();
            println!("{:#?}", result);
            self.results.push(result);
            println!("算出一种高度为 {} 的解法", height);
            return;
        }
        let line_do = line_now + 1;
        let old_banned_position = self.banned_position.clone();
        let old_size = self.size;
        let relation_mine = self.relation.get(&line_now).unwrap();
        for (line, banned) in relation_mine.iter() {
            let mut diffed_banned = HashSet::new();
            for ban_line in banned {
                diffed_banned.insert(ban_line + self.position_now.get(&line_now).unwrap());
            }
            self.banned_position
                .entry(*line)
                .and_modify(|set: &mut HashSet<i16>| set.extend(diffed_banned));
        }
        for i in self.size.top - self.max + 1..self.size.bottom {
            if self.banned_position.get(&line_do).unwrap().contains(&i) {
                continue;
            }
            self.size.bottom = i;
            self.position_now.insert(line_do, i);
            self.run(line_do);
            self.size.bottom = old_size.bottom;
        }
        for i in self.size.bottom..self.size.top {
            if self.banned_position.get(&line_do).unwrap().contains(&i) {
                continue;
            }
            self.position_now.insert(line_do, i);
            self.run(line_do);
        }
        for i in self.size.top..self.size.bottom + self.max {
            if self.banned_position.get(&line_do).unwrap().contains(&i) {
                continue;
            }
            self.size.top = i;
            self.position_now.insert(line_do, i);
            self.run(line_do);
            self.size.top = old_size.top;
        }
        self.banned_position = old_banned_position;
    }
}
