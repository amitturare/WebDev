function setIcon(code, hours, element) {
    if (
        code == 1006 ||
        code == 1009 ||
        code == 1030 ||
        code == 1135 ||
        code == 1147
    ) {
        element.src = "icons/119-122-143-248-260.svg";
    }
    if (
        code == 1150 ||
        code == 1153 ||
        code == 1168 ||
        code == 1171 ||
        code == 1183 ||
        code == 1198 ||
        code == 1201
    ) {
        element.src = "icons/263-266-281-284-296-311-314.svg";
    }
    if (code == 1189) {
        element.src = "icons/302.svg";
    }
    if (code == 1192 || code == 1195) {
        element.src = "icons/305-308.svg";
    }
    if (code == 1114 || code == 1204 || code == 1207 || code == 1225) {
        element.src = "icons/227-317-320-338.svg";
    }
    if (code == 1213 || code == 1219 || code == 1237) {
        element.src = "icons/326-332-350.svg";
    }
    if (
        code == 1087 ||
        code == 1273 ||
        code == 1276 ||
        code == 1279 ||
        code == 1282
    ) {
        element.src = "icons/night/200-386-389-392-395.svg";
    }

    if (hours > 18) {
        // console.log("Moon");
        if (code == 1000) {
            element.src = "icons/night/113-night.svg";
        }
        if (code == 1003) {
            element.src = "icons/night/116-night.svg";
        }
        if (code == 1063 || code == 1072 || code == 1240) {
            element.src = "icons/night/185.svg";
        }
        if (code == 1117) {
            element.src = "icons/night/230.svg";
        }
        if (code == 1180 || code == 1186 || code == 1243) {
            element.src = "icons/night/263-266-281-284-296-311-314.svg";
        }
        if (code == 1246) {
            element.src = "icons/night/263-266-281-284-296-311-314.svg";
        }
        if (
            code == 1066 ||
            code == 1069 ||
            code == 1114 ||
            code == 1210 ||
            code == 1216 ||
            code == 1222 ||
            code == 1249 ||
            code == 1252 ||
            code == 1258
        ) {
            element.src = "icons/night/227-317-320-338.svg";
        }
        if (code == 1255 || code == 1261 || code == 1264) {
            element.src = "icons/326-332-350.svg";
        }
    } else {
        // console.log("Day");
        if (code == 1000) {
            element.src = "icons/113-day.svg";
        }
        if (code == 1003) {
            element.src = "icons/116-day.svg";
        }
        if (code == 1063 || code == 1240) {
            element.src = "icons/176-353.svg";
        }
        if (
            code == 1066 ||
            code == 1169 ||
            code == 1222 ||
            code == 1249 ||
            code == 1252
        ) {
            element.src = "icons/179-182-335-362-365.svg";
        }
        if (code == 1072) {
            element.src = "icons/185.svg";
        }
        if (code == 1114) {
            element.src = "icons/227-317-320-338.svg";
        }
        if (code == 1117) {
            element.src = "icons/230.svg";
        }
        if (code == 1180 || code == 1243 || code == 1246) {
            element.src = "icons/293-356-359.svg";
        }
        if (code == 1186) {
            element.src = "icons/299.svg";
        }
        if (code == 1210 || code == 1216 || code == 1258) {
            element.src = "icons/323-329-371.svg";
        }
        if (code == 1255 || code == 1261 || code == 1264) {
            element.src = "icons/368-374-377.svg";
        }
    }
}

export { setIcon };
