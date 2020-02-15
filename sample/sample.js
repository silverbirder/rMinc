function myFunction() {
    const user = new User();
    const after = new Date('2019-11-01');
    const before = new Date('2019-12-01');
    const mail1 = new TohoCinemasMailRule(before, after);
    const mail2 = new AmazonMailRule(before, after);
    const mail3 = new ShokutakubinMailRule(before, after);
    user.setMailRules([mail1, mail2, mail3]);
    user.fetchMails();
    user.doRMinc();
}