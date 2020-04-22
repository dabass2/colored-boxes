from color import Color
from point import Point

class Rectangle:
    def __init__(self, point, width, height, fill):
        self._point = Point()
        self._width = 10
        self._height = 10
        self._fill = Color()

    def setPoint(self, across, down):
        point = Point()
        point.setDown(down)
        point.setAcross(across)
    def getPointX(self):
        point = Point()
        return point.getAcross();
    def getPointY(self):
        point = Point()
        return point.getDown();

    def setWidth(self, width):
        self._width = width
    def getWidth(self):
        return self._width;

    def setHeight(self, height):
        self._height = height
    def getHeight(self):
        return self._height;

    def fill(self, r, g, b):
        fill = Color()
        fill.setRed(r)
        fill.setGreen(g)
        fill.setBlue(b)
        return "rgb({},{},{})".format(fill.getRed(), fill.getGreen(), fill.getBlue());

    def SVG(self, height, width, color, x, y):
        return '<rect x="{}" y="{}" width="{}" height="{}" style="fill:{}" />'.format(x, color, self._height, self._width, y);
