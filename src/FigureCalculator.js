class FigureCalculator {
  constructor(mathBasic) {
    this._mathBasic = mathBasic;
  }

  _validateArgs(args, expedtedArgs) {
    if (args.length !== expedtedArgs) {
      throw new Error(`fungsi hanya menerima ${expedtedArgs} parameter`);
    }

    args.forEach((element) => {
      if (typeof element !== 'number') {
        throw new Error('fungsi hanya menerima parameter number');
      }
    });

    return args;
  }

  calculateRectanglePerimeter(...args) {
    const [length, width] = this._validateArgs(args, 2);

    // formula: (2 * (length + width))
    return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
  }

  calculateRectangleArea(...args) {
    const [length, width] = this._validateArgs(args, 2);

    // formula: (length * width)
    return this._mathBasic.multiply(length, width);
  }

  calculateTrianglePerimeter(...args) {
    const [sideA, sideB, sideC] = this._validateArgs(args, 3);

    // formula: ((sideA + side B) + side C)
    return this._mathBasic.add(this._mathBasic.add(sideA, sideB), sideC);
  }

  calculateTriangleArea(...args) {
    const [base, height] = this._validateArgs(args, 2);

    // formula: ((base * height) / 2)
    return this._mathBasic.divide(this._mathBasic.multiply(base, height), 2);
  }
}

module.exports = FigureCalculator;
