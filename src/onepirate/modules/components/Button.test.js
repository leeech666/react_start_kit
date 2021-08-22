const rewire = require("rewire")
const Button = rewire("./Button")
const styles = Button.__get__("styles")
// @ponicode
describe("styles", () => {
    test("0", () => {
        let callFunction = () => {
            styles({ typography: { fontWeightMedium: "green", fontFamilySecondary: "Apt. 716" }, spacing: { unit: -10 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            styles({ typography: { fontWeightMedium: "rgb(0,100,200)", fontFamilySecondary: "Suite 469" }, spacing: { unit: 0 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            styles({ typography: { fontWeightMedium: "black", fontFamilySecondary: "Apt. 716" }, spacing: { unit: -10 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            styles({ typography: { fontWeightMedium: "red", fontFamilySecondary: "Apt. 716" }, spacing: { unit: 5 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            styles({ typography: { fontWeightMedium: "red", fontFamilySecondary: "Apt. 714" }, spacing: { unit: -10 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            styles({ typography: { fontWeightMedium: "", fontFamilySecondary: "" }, spacing: { unit: Infinity } })
        }
    
        expect(callFunction).not.toThrow()
    })
})
