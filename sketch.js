function setup() {
    createCanvas(400, 400);
    stroke(255)
    strokeWeight(10)
    line(Constellations[0].first[0].x+13,Constellations[0].first[0].y+13,Constellations[0].first[1].x+13,Constellations[0].first[1].y+13);
    line(Constellations[0].first[1].x+13,Constellations[0].first[1].y+13,Constellations[0].first[2].x+13,Constellations[0].first[2].y+13);
  }