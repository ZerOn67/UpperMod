const xander = extend(Planet, "xander", Planets.sun, 0, 0.4, {});
xander.accessible = true;  //visibility in planet list
xander.bloom = true;

xander.meshLoader = () => new SunMesh(
      
      this, 4,
      4, 0.3, 1.7, 1.2, 1, 1.1,
      Color.valueOf("F4F6F7"),
      Color.valueOf("F7F9F9"),
      Color.valueOf("F8F9F9"),
      Color.valueOf("FDFEFE")
   
   );

xander.orbitRadius = 25.3;
