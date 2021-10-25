import axiosInstance from 'utils/request';
const request = axiosInstance;

export function createArticles(data) {
    console.log(data);
    return request({
        url: "/api/articals/",
        method: 'post',
        data,
    });
}

export function updateArticle(data) {
    return request({
        url: `/api/articals/${data.id}/`,
        method: 'put',
        data,
    })
}

export function getArticle(id) {
    return request ({
        url: `/api/articals/${id}/`,
        method: 'get',
    })
}

export function getArticleList(page, searchText, searchSelect) {
    let params;
    if (searchText === null) {
        params = {
            page
        }
    } else {
        params = {
            page,
            bcontent: searchText
        }
        if (searchSelect === "标题") {
            params = {
                page,
                btitle: searchText
            }
        }
    }

    return request({
        url: '/api/articals/',
        method: 'get',
        params
    })
}

export function searchAriticleList(searchText, searchSelect) {
    let params;
    params = {
        bcontent: searchText
    }
    if (searchSelect === "标题") {
        params = {
            btitle: searchText
        }
    }
    return request({
        url: '/api/articals/',
        method: 'get',
        params
    })

}

export function getNextPrevPage(url) {
    return request({
        url: url,
        method: "get",
    })
}

export function uploadFile(formData) {
    return request({
        url: "/api/articals/uploadMDFile/",
        method: "POST",
        data: formData,
        contentType: 'multipart/form-data'
    })
}

export function html2pdf(id) {
    return request({
        url: "/api/articals/" + id + "/html2pdf/",
        method: "GET",
        responseType: 'arraybuffer'


    })
}
