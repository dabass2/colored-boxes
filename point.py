class Point:
    def __init__(self):
        self._across = 0
        self._down = 0

    def setAcross(self, across):
        self._across = across
    def getAcross(self):
        return self._across;

    def setDown(self, down):
        self._down = down
    def getDown(self):
        return self._down;

if __name__ == "__main__":
    aPoint = Point()
    if aPoint.across() == 0 and aPoint.down() == 0:
        print("Constructor correct")
    else:
        print("Constructor incorrect")
