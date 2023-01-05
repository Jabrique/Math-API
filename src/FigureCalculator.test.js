const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');

describe('A Figure Calculator', () => {
  it('should contain calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, and calculateTriangleArea', () => {
    const figureCalculator = new FigureCalculator({});

    expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateRectangleArea');
    expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateTriangleArea');
    expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
  });
});

describe('A calculateRectanglePerimeter function', () => {
  it('should throw an error when not given 2 parameter', () => {
    const figureCalculator = new FigureCalculator({});

    expect(() => figureCalculator.calculateRectanglePerimeter(0)).toThrowError();
    expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3)).toThrowError();
    expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3, 4)).toThrowError();
  });

  it('should throw error when given non-number parameter', () => {
    const figureCalculator = new FigureCalculator({});

    expect(() => figureCalculator.calculateRectanglePerimeter('1', '2')).toThrowError();
    expect(() => figureCalculator.calculateRectanglePerimeter(true, {})).toThrowError();
    expect(() => figureCalculator.calculateRectanglePerimeter(null, false)).toThrowError();
  });

  it('Should return the correct value based on the perimeter of a square formula', () => {
    // arrange
    const length = 20;
    const width = 10;
    spyAdd = jest.spyOn(MathBasic, 'add');
    spyMultiply = jest.spyOn(MathBasic, 'multiply');
    const figureCalculator = new FigureCalculator(MathBasic);

    // Action
    const result = figureCalculator.calculateRectanglePerimeter(length, width);

    // Assert
    expect(spyAdd).toHaveBeenCalledWith(length, width);
    expect(spyMultiply).toHaveBeenCalledWith(2, 30);
    expect(result).toEqual(60);
  });
});

describe('A calculateRectangleArea Function', () => {
  it('should throw an error when not given 2 parameter', () => {
    const figureCalculator = new FigureCalculator({});

    expect(() => figureCalculator.calculateRectangleArea(1)).toThrowError();
    expect(() => figureCalculator.calculateRectangleArea(1, 2, 3)).toThrowError();
    expect(() => figureCalculator.calculateRectangleArea(1, 2, 3, 4)).toThrowError();
  });

  it('should throw an error when given non-number parameter', () => {
    const figureCalculator = new FigureCalculator({});

    expect(() => figureCalculator.calculateRectangleArea('1', '2')).toThrowError();
    expect(() => figureCalculator.calculateRectangleArea(true, {})).toThrowError();
    expect(() => figureCalculator.calculateRectangleArea(null, false)).toThrowError();
  });

  it('should return the correct value base on the area of a square formula', () => {
    // arrange
    const length = 20;
    const width = 10;
    const spyMultiply = jest.spyOn(MathBasic, 'multiply');
    const figureCalculator = new FigureCalculator(MathBasic);

    // Action
    const result = figureCalculator.calculateRectangleArea(length, width);

    // Assert
    expect(spyMultiply).toHaveBeenCalledWith(length, width);
    expect(result).toEqual(200);
  });
});

describe('A calculateTrianglePerimeter Function', () => {
  it('should throw an error when not given 3 parameter', () => {
    expect(() => MathBasic.calculateTrianglePerimeter(1));
    expect(() => MathBasic.calculateTrianglePerimeter(1, 2));
    expect(() => MathBasic.calculateTrianglePerimeter(1, 2, 3, 4));
  });

  it('should throw an error when given non-number parameter', () => {
    const figureCalculator = new FigureCalculator({});

    expect(() => figureCalculator.calculateTrianglePerimeter('1', '2', '3')).toThrowError();
    expect(() => figureCalculator.calculateTrianglePerimeter(true, {})).toThrowError();
    expect(() => figureCalculator.calculateTrianglePerimeter(null, false)).toThrowError();
  });

  it('should return the correct value base on perimeter of triangle formula', () => {
    // arrange
    const sideA = 10;
    const sideB = 20;
    const sideC = 20;
    const spyAdd = jest.spyOn(MathBasic, 'add');
    const figureCalculator = new FigureCalculator(MathBasic);

    // Action
    const result = figureCalculator.calculateTrianglePerimeter(sideA, sideB, sideC);

    // Assert
    expect(spyAdd).toHaveBeenCalledWith((sideA + sideB), sideC);
    expect(result).toEqual(50);
  });

  describe('A calculateTriangleArea Function', () => {
    it('should throw an error when not given 2 parameter', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTriangleArea(1)).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(1, 2, 3)).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(1, 2, 3, 4)).toThrowError();
    });

    it('should throw an error when given non-number parameter', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTriangleArea('1', '2', '3')).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(true, {})).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(null, false)).toThrowError();
    });

    it('should return the correct value base on area of triangle formula', () => {
      // arrange
      const base = 10;
      const height = 20;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const spyDivide = jest.spyOn(MathBasic, 'divide');

      // Action
      const result = figureCalculator.calculateTriangleArea(base, height);

      // Assert
      expect(spyMultiply).toHaveBeenCalledWith(base, height);
      expect(spyDivide).toHaveBeenCalledWith((base * height), 2);
      expect(result).toEqual(100);
    });
  });
});
