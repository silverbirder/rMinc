function myFunction() {
    const user = new User();
    user.setMailRules([new TohoCinemasMailRule(), new AmazonMailRule(), new ShokutakubinMailRule()]);
    user.fetchMails();
    user.doRMinc();
}