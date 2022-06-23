describe(`${Person.name} Class`, () => {
    let model;

    beforeEach(()=>{
        model = new Person();
    });
    describe('default vlaues', ()=> {
        it('first name defaults to empty string', () => {
            expect(model.firstName).toBe('');
        });
        it('last name defaults to empty string', () => {
            expect(model.lastName).toBe('');
        });
        it('middle name defaults to empty string', () => {
            expect(model.middleName).toBe('');
        });    
    })
});