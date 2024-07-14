import $http from "../http"

export const get_label = (data) => {
	return $http({
		url: 'get_label',
		data
	})
}

export const get_list = (data) => {
	return $http({
		url: 'get_list',
		data
	})
}