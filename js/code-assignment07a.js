let projects = [ {
  id:1,
  url:'http://arcg.is/2n5E9Jf',
  title: 'Story Map',
  desc: 'Book Assignment 1: Web Story map of RJ, Brasil',
  thumb: true,
  keywords: ['web story map','Brasil','arcgis']
},
{
  id:2,
  url:'https://www.arcgis.com/apps/View/index.html?appid=2bf37b93ad844036a65259b211133110',
  title: 'Map of Recent Significant Earthquakes',
  desc: 'An ArcGIS Online Web App showing worldwide earthquakes of high mangitude',
  thumb: false,
  keywords: ['USGS','earthquakes','arcgis online']
  }]

for (let i = 0; i < projects.length; i++) {
    createTitle(projects[i].title)
    createThumbnail(projects[i].thumb, projects[i].id)
  }
