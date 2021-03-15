export default function({store, redirect, next}) {
    if(!store.getters['auth/isAuth']) {
        redirect('/admin/login/')
    }
    next(true);
}