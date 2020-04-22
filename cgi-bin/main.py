#!/usr/bin/python3

from rectangle import Rectangle
import random

rectangleList = [Rectangle(0, random.randint(1,750), random.randint(1,750), 0) for i in range(1000)]

for i in range(len(rectangleList)):
    rectangleList[i].setPoint( random.randint(1,1000), random.randint(1,1000) )
    rectangleList[i].setHeight( random.randint(0,750) )
    rectangleList[i].setWidth( random.randint(0,750) )

print("Content-type: text/html\n\n")


print("<html><head></head><body>")
print('<svg width="1000" height="1000">')
for i in range(len(rectangleList)):
    print( rectangleList[i].SVG( rectangleList[i].getPointX(), rectangleList[i].getPointY(),
            rectangleList[i].getHeight(), rectangleList[i].getWidth(),
            rectangleList[i].fill( random.randint(0,255), random.randint(0,255), random.randint(0,255) ) ) )
print("</svg></body></html>")
