function myFunction() {
    const user = new RMinc.User();
    const after = new Date('2019-11-01');
    const before = new Date('2019-12-01');
    const mail1 = new RMinc.TohoCinemasMailRule(before, after);
    const mail2 = new RMinc.AmazonMailRule(before, after);
    const mail3 = new RMinc.ShokutakubinMailRule(before, after);
    user.setMailRules([mail1, mail2, mail3]);
    user.fetchMails();
    user.doRMinc();
}