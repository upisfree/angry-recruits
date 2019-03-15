const BODY_DATA = {
  "generator_info": "Shape definitions generated with PhysicsEditor. Visit https://www.codeandweb.com/physicseditor",
  "recruit": {
    "type": "fromPhysicsEditor",
    "label": "recruit",
    "isStatic": false,
    "fixtures": [
      {
        "label": "outline",
        "density": 0.004, // масса тела — 100 кг
        "restitution": 0.25,
        "friction": 1,
        "frictionAir": 0.00001,
        "frictionStatic": 100,
        "isSensor": false,
        "vertices": [
          [ { "x":11, "y":125 }, { "x":18, "y":126 }, { "x":160, "y":80 }, { "x":158, "y":72 }, { "x":148, "y":50 }, { "x":122, "y":1 }, { "x":121, "y":1 }, { "x":7, "y":116 } ],
          [ { "x":164, "y":27 }, { "x":157, "y":14 }, { "x":153, "y":13 }, { "x":148, "y":50 }, { "x":153, "y":49 }, { "x":159, "y":43 } ],
          [ { "x":23, "y":134 }, { "x":26, "y":134 }, { "x":160, "y":80 }, { "x":18, "y":126 } ],
          [ { "x":144, "y":6 }, { "x":133, "y":2 }, { "x":122, "y":1 }, { "x":148, "y":50 }, { "x":153, "y":13 } ],
          [ { "x":-2, "y":89 }, { "x":5, "y":115 }, { "x":99, "y":7 }, { "x":62, "y":7 }, { "x":26, "y":23 }, { "x":14, "y":35 }, { "x":5, "y":49 }, { "x":-1, "y":68 } ],
          [ { "x":72, "y":159 }, { "x":96, "y":159 }, { "x":111, "y":155 }, { "x":160, "y":80 }, { "x":26, "y":134 }, { "x":40, "y":146 }, { "x":52, "y":153 } ],
          [ { "x":39, "y":14 }, { "x":26, "y":23 }, { "x":62, "y":7 } ],
          [ { "x":135, "y":142 }, { "x":146, "y":129 }, { "x":154, "y":114 }, { "x":158, "y":100 }, { "x":160, "y":80 }, { "x":111, "y":155 }, { "x":127, "y":147 } ],
          [ { "x":109, "y":3 }, { "x":99, "y":7 }, { "x":5, "y":115 }, { "x":7, "y":116 }, { "x":121, "y":1 } ]
        ]
      },
      {
        "label": "click",
        "mass": 0,
        "isSensor": false,
        "circle": {
          "x": 84.16636883494965,
          "y": 83.24955325242453,
          "radius": 70.69757330019453
        }
      }
    ]
  },
  "commissar-1": {
    "type": "fromPhysicsEditor",
    "isStatic": false,
    "fixtures": [
      {
        "label": "outline",
        "density": 0.0055, // масса тела — 203 кг
        "restitution": 0.25,
        "friction": 1,
        "frictionAir": 0.00001,
        "frictionStatic": 100,
        "vertices": [
          [ { "x":15, "y":142.5 }, { "x":34, "y":155.5 }, { "x":70, "y":6.5 }, { "x":60, "y":10.5 }, { "x":4.5, "y":79 }, { "x":1.5, "y":84 }, { "x":-0.5, "y":107 }, { "x":4.5, "y":127 } ],
          [ { "x":21.5, "y":38 }, { "x":9.5, "y":59 }, { "x":4.5, "y":79 }, { "x":60, "y":10.5 }, { "x":39, "y":22.5 } ],
          [ { "x":58, "y":213.5 }, { "x":73, "y":227.5 }, { "x":100, "y":238.5 }, { "x":166.5, "y":213 }, { "x":172.5, "y":204 }, { "x":155, "y":7.5 }, { "x":44.5, "y":157 }, { "x":48.5, "y":198 } ],
          [ { "x":177, "y":22.5 }, { "x":155, "y":7.5 }, { "x":180, "y":152.5 }, { "x":211.5, "y":122 }, { "x":213.5, "y":114 }, { "x":212.5, "y":85 }, { "x":206.5, "y":65 }, { "x":199.5, "y":49 } ],
          [ { "x":200.5, "y":140 }, { "x":211.5, "y":122 }, { "x":197, "y":140.5 } ],
          [ { "x":187.5, "y":149 }, { "x":197, "y":140.5 }, { "x":211.5, "y":122 }, { "x":180, "y":152.5 } ],
          [ { "x":138, "y":234.5 }, { "x":151, "y":227.5 }, { "x":166.5, "y":213 }, { "x":100, "y":238.5 }, { "x":124, "y":238.5 } ],
          [ { "x":86, "y":234.5 }, { "x":100, "y":238.5 }, { "x":73, "y":227.5 } ],
          [ { "x":44.5, "y":186 }, { "x":48.5, "y":198 }, { "x":44.5, "y":157 } ],
          [ { "x":177.5, "y":193 }, { "x":180.5, "y":181 }, { "x":180, "y":152.5 }, { "x":155, "y":7.5 }, { "x":172.5, "y":204 } ],
          [ { "x":127, "y":0.5 }, { "x":106, "y":-0.5 }, { "x":105, "y":-0.5 }, { "x":34, "y":155.5 }, { "x":36, "y":154.5 }, { "x":155, "y":7.5 }, { "x":149, "y":5.5 } ],
          [ { "x":70, "y":6.5 }, { "x":34, "y":155.5 }, { "x":105, "y":-0.5 } ],
          [ { "x":44.5, "y":157 }, { "x":155, "y":7.5 }, { "x":36, "y":154.5 } ]
        ]
      }
    ]
  }
};

export default BODY_DATA;