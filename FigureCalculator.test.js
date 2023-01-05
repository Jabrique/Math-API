const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./src/MathBasic');

const figureCalculator = new FigureCalculator();

describe('A Figure Calculator', () => {
  it('should contain calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, and calculateTriangleArea', () => {
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
    expect(() => figureCalculator.calculateRectanglePerimeter(0)).toThrowError();
    expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3)).toThrowError();
    expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3, 4)).toThrowError();
  });

  it('should throw error when given non-number parameter', () => {
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
