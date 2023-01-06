const createServer = require('./createServer');
const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');

describe('A HTTP Server', () => {
  describe('when GET /add', () => {
    it('should respond with a status code of 200 and the payload value is addition result of a and b correctly', async () => {
      // Arrange
      const a = 10;
      const b = 20;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/add/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(30);
      expect(spyAdd).toBeCalledWith(a, b);
    });
  });

  describe('when get /subtract', () => {
    it('should respond with a status code of 200 and the payload value is subtraction result of a and b correctly', async () => {
      // arrange
      const a = 20;
      const b = 10;
      const spySubtract = jest.spyOn(MathBasic, 'subtract');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/subtract/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(10);
      expect(spySubtract).toBeCalledWith(a, b);
    });
  });

  describe('when get /multiply', () => {
    it('should respond with a status code of 200 and the payload value is multiplied result of a and b correctly', async () => {
      // arrange
      const a = 10;
      const b = 2;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/multiply/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(20);
      expect(spyMultiply).toBeCalledWith(a, b);
    });
  });

  describe('when get /divide', () => {
    it('should respond with a status code of 200 and the payload value is divided result of a and b correctly', async () => {
      // arrange
      const a = 20;
      const b = 2;
      const spyDivide = jest.spyOn(MathBasic, 'divide');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/divide/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(10);
      expect(spyDivide).toBeCalledWith(a, b);
    });
  });

  describe('when get /rectangle/perimeter', () => {
    it('should respond with a status code of 200 and the payload value is based on rectangle perimeter formula', async () => {
      // arrange
      const figureCalculator = new FigureCalculator(MathBasic);
      const length = 10;
      const width = 5;
      const spyRectanglePerimeter = jest.spyOn(figureCalculator, 'calculateRectanglePerimeter');
      const server = createServer({ figureCalculator });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/perimeter/${length}/${width}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(30);
      expect(spyRectanglePerimeter).toBeCalledWith(length, width);
    });
  });

  describe('when get /rectangle/area', () => {
    it('should respond with a status code of 200 and the payload value is based on rectangle area formula', async () => {
      // arrange
      const figureCalculator = new FigureCalculator(MathBasic);
      const length = 10;
      const width = 5;
      const spyRectangleArea = jest.spyOn(figureCalculator, 'calculateRectangleArea');
      const server = createServer({ figureCalculator });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/area/${length}/${width}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(50);
      expect(spyRectangleArea).toBeCalledWith(length, width);
    });
  });

  describe('when get /triangle/perimeter', () => {
    it('should respond with a status code of 200 and the payload value is based on triangle perimeter formula', async () => {
      // arrange
      const figureCalculator = new FigureCalculator(MathBasic);
      const sideA = 10;
      const sideB = 20;
      const sideC = 30;
      const SpyTrianglePerimeter = jest.spyOn(figureCalculator, 'calculateTrianglePerimeter');
      const server = createServer({ figureCalculator });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/triangle/perimeter/${sideA}/${sideB}/${sideC}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(60);
      expect(SpyTrianglePerimeter).toBeCalledWith(sideA, sideB, sideC);
    });
  });

  describe('when get /triangle/area', () => {
    it('should respond with a status code of 200 and the payload value is based on triangle area formula', async () => {
      // arrange
      const figureCalculator = new FigureCalculator(MathBasic);
      const base = 10;
      const height = 15;
      const SpyTriangleArea = jest.spyOn(figureCalculator,'calculateTriangleArea');
      const server = createServer({ figureCalculator });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/triangle/area/${base}/${height}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(75);
      expect(SpyTriangleArea).toBeCalledWith(base, height);
    });
  });
});
