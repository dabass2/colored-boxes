class Color:
    def __init__(self):
        self._red = 255
        self._green = 0
        self._blue = 0

    def setRed(self, r):
        self._red = r
    def getRed(self):
        return self._red;

    def setGreen(self, g):
        self._green = g
    def getGreen(self):
        return self._green;

    def setBlue(self, b):
        self._blue = b
    def getBlue(self):
        return self._blue;

    def colorSVG(self):
        return "rgb({},{},{})".format(self._red,self._green,self._blue);

if __name__ == "__main__":
    aColor = Color()
    if aColor.red() == 255 and aColor.blue() == 0 and aColor.green() == 0:
        print("Constructor correct")
    else:
        print("Constructor incorrect")
