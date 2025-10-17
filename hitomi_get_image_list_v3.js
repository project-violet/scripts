// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 1;
switch (g) {
case 3692:
case 1432:
case 266:
case 951:
case 1525:
case 1540:
case 3367:
case 182:
case 4018:
case 1373:
case 3162:
case 3103:
case 3083:
case 1401:
case 2910:
case 3819:
case 1216:
case 3507:
case 1692:
case 3540:
case 382:
case 503:
case 3636:
case 1496:
case 1103:
case 3216:
case 1819:
case 1469:
case 3916:
case 2749:
case 742:
case 3035:
case 2210:
case 3469:
case 1804:
case 1139:
case 2546:
case 365:
case 1172:
case 3255:
case 1503:
case 1562:
case 2281:
case 2730:
case 3125:
case 3087:
case 45:
case 3107:
case 1363:
case 3172:
case 2895:
case 259:
case 3562:
case 595:
case 1125:
case 267:
case 1107:
case 3377:
case 911:
case 3736:
case 2146:
case 89:
case 2552:
case 512:
case 4051:
case 3479:
case 2981:
case 144:
case 3792:
case 2265:
case 983:
case 3955:
case 2353:
case 1479:
case 2182:
case 2002:
case 2063:
case 3237:
case 1271:
case 368:
case 2387:
case 3617:
case 2498:
case 2843:
case 1237:
case 2077:
case 2218:
case 168:
case 3271:
case 960:
case 2638:
case 1617:
case 1713:
case 1937:
case 2427:
case 4010:
case 1053:
case 4022:
case 4075:
case 2144:
case 735:
case 1909:
case 3261:
case 2951:
case 14:
case 3613:
case 2383:
case 3214:
case 894:
case 809:
case 1261:
case 528:
case 4081:
case 1985:
case 3494:
case 1214:
case 2582:
case 939:
case 2073:
case 1285:
case 178:
case 970:
case 2423:
case 824:
case 1806:
case 3209:
case 78:
case 598:
case 2544:
case 378:
case 3914:
case 2335:
case 3717:
case 1148:
case 3806:
case 3961:
case 2251:
case 3057:
case 2712:
case 2279:
case 224:
case 3135:
case 2745:
case 581:
case 2052:
case 3321:
case 3039:
case 3884:
case 689:
case 965:
case 1321:
case 3726:
case 1003:
case 1062:
case 351:
case 756:
case 40:
case 513:
case 3587:
case 717:
case 294:
case 3062:
case 3003:
case 1481:
case 1842:
case 626:
case 1815:
case 151:
case 2979:
case 982:
case 1422:
case 1959:
case 1626:
case 944:
case 3290:
case 2866:
case 2901:
case 697:
case 1475:
case 1290:
case 627:
case 3259:
case 1990:
case 2969:
case 1007:
case 831:
case 3583:
case 743:
case 1382:
case 3129:
case 3990:
case 1259:
case 3187:
case 3007:
case 1860:
case 769:
case 1129:
case 1878:
case 2409:
case 1451:
case 3624:
case 3223:
case 1346:
case 3451:
case 1624:
case 404:
case 3346:
case 2177:
case 1741:
case 160:
case 2414:
case 2461:
case 1854:
case 3923:
case 441:
case 2082:
case 867:
case 22:
case 2102:
case 877:
case 2874:
case 1289:
case 3352:
case 3641:
case 3227:
case 2793:
case 1553:
case 4069:
case 487:
case 3289:
case 1157:
case 1886:
case 1227:
case 1641:
case 170:
case 2628:
case 1205:
case 3048:
case 1724:
case 1418:
case 2502:
case 1927:
case 3298:
case 2173:
case 819:
case 3989:
case 2880:
case 2471:
case 2697:
case 3927:
case 3418:
case 339:
case 2303:
case 2167:
case 2577:
case 94:
case 129:
case 285:
case 341:
case 2116:
case 3830:
case 2939:
case 1429:
case 2203:
case 2262:
case 1398:
case 329:
case 141:
case 2604:
case 517:
case 304:
case 1708:
case 1175:
case 399:
case 2903:
case 3327:
case 3110:
case 1122:
case 579:
case 1079:
case 914:
case 3175:
case 199:
case 2892:
case 1252:
case 1327:
case 386:
case 3565:
case 1181:
case 557:
case 753:
case 3483:
case 2272:
case 2719:
case 2225:
case 2240:
case 3181:
case 1608:
case 1096:
case 2207:
case 2394:
case 661:
case 3001:
case 1483:
case 3032:
case 543:
case 2155:
case 3165:
case 1510:
case 387:
case 1435:
case 3695:
case 1246:
case 3849:
case 1522:
case 2907:
case 2972:
case 3510:
case 1165:
case 187:
case 1575:
case 3246:
case 1323:
case 3522:
case 3118:
case 1094:
case 4062:
case 2171:
case 4003:
case 1944:
case 1700:
case 637:
case 2514:
case 863:
case 2533:
case 2467:
case 1118:
case 2301:
case 1359:
case 3700:
case 849:
case 3282:
case 2332:
case 30:
case 3982:
case 4039:
case 1551:
case 3244:
case 3390:
case 2509:
case 3643:
case 1982:
case 2817:
case 1838:
case 2585:
case 288:
case 891:
case 1244:
case 2706:
case 1390:
case 1643:
case 4025:
case 2431:
case 1921:
case 2098:
case 411:
case 2948:
case 1743:
case 650:
case 1518:
case 3921:
case 95:
case 2477:
case 720:
case 4072:
case 2161:
case 3518:
case 636:
case 790:
case 3647:
case 2185:
case 3221:
case 2027:
case 234:
case 2109:
case 873:
case 3453:
case 1221:
case 1647:
case 904:
case 2670:
case 752:
case 114:
case 3075:
case 999:
case 1385:
case 1022:
case 1569:
case 1179:
case 2590:
case 3309:
case 1750:
case 314:
case 2983:
case 1766:
case 3022:
case 2642:
case 3179:
case 615:
case 3750:
case 2760:
case 3472:
case 507:
case 2559:
case 3596:
case 2684:
case 3676:
case 3314:
case 1440:
case 2935:
case 941:
case 1361:
case 1596:
case 3425:
case 468:
case 3440:
case 1314:
case 2016:
case 3532:
case 3812:
case 3579:
case 655:
case 478:
case 3169:
case 1065:
case 354:
case 987:
case 3820:
case 2656:
case 1439:
case 3699:
case 4057:
case 725:
case 1579:
case 3776:
case 1812:
case 1169:
case 291:
case 3065:
case 712:
case 1845:
case 1820:
case 1666:
case 2742:
case 3132:
case 44:
case 2055:
case 3650:
case 1403:
case 795:
case 584:
case 2287:
case 1371:
case 3337:
case 3101:
case 1132:
case 2229:
case 3403:
case 2770:
case 249:
case 2159:
case 3196:
case 3371:
case 3688:
case 2318:
case 506:
case 4035:
case 2786:
case 3774:
case 2421:
case 1931:
case 535:
case 1963:
case 2527:
case 2768:
case 1774:
case 2123:
case 3448:
case 2365:
case 2598:
case 3664:
case 3263:
case 31:
case 3194:
case 1018:
case 3231:
case 600:
case 6:
case 2381:
case 3758:
case 872:
case 2824:
case 90:
case 83:
case 3018:
case 2444:
case 1680:
case 1711:
case 3973:
case 1967:
case 3658:
case 2009:
case 862:
case 2189:
case 2085:
case 444:
case 2778:
case 3967:
case 3764:
case 798:
case 58:
case 2322:
case 1897:
case 3267:
case 2061:
case 885:
case 4029:
case 15:
case 1273:
case 2482:
case 3594:
case 2841:
case 2668:
case 658:
case 4087:
case 3674:
case 35:
case 401:
case 3273:
case 3506:
case 1709:
case 1366:
case 484:
case 2751:
case 1591:
case 1388:
case 54:
case 1497:
case 3785:
case 3217:
case 2011:
case 406:
case 874:
case 1506:
case 1350:
case 2844:
case 3591:
case 2618:
case 3497:
case 1637:
case 1217:
case 1078:
case 920:
case 198:
case 2441:
case 2938:
case 1917:
case 1733:
case 2882:
case 2500:
case 3399:
case 1054:
case 845:
case 3848:
case 3661:
case 1086:
case 3191:
case 3213:
case 2384:
case 3376:
case 3068:
case 2074:
case 1376:
case 3493:
case 1633:
case 3106:
case 1614:
case 2424:
case 1934:
case 2718:
case 1737:
case 1685:
case 3609:
case 864:
case 2058:
case 3934:
case 2080:
case 2147:
case 3737:
case 3685:
case 2100:
case 2765:
case 226:
case 848:
case 3292:
case 395:
case 1412:
case 2508:
case 953:
case 609:
case 2930:
case 2076:
case 1420:
case 1236:
case 3839:
case 1616:
case 3104:
case 1292:
case 501:
case 3412:
case 575:
case 1839:
case 3236:
case 1084:
case 1104:
case 902:
case 2675:
case 754:
case 3070:
case 3936:
case 1380:
case 1015:
case 1042:
case 289:
case 125:
case 3862:
case 3803:
case 832:
case 1070:
case 624:
case 1119:
case 3042:
case 3992:
case 296:
case 1803:
case 1358:
case 325:
case 544:
case 946:
case 2050:
case 3364:
case 2846:
case 2378:
case 303:
case 2710:
case 3504:
case 2066:
case 1655:
case 2775:
case 1311:
case 103:
case 86:
case 1519:
case 1872:
case 3716:
case 435:
case 1060:
case 2099:
case 3840:
case 2195:
case 1716:
case 3872:
case 3519:
case 714:
case 1056:
case 1825:
case 1840:
case 3224:
case 1798:
case 390:
case 2831:
case 2580:
case 1154:
case 998:
case 2802:
case 2863:
case 1224:
case 1395:
case 3798:
case 469:
case 1568:
case 928:
case 1924:
case 1178:
case 3853:
case 3308:
case 416:
case 3789:
case 457:
case 3568:
case 631:
case 3705:
case 3178:
case 2293:
case 2164:
case 827:
case 2873:
case 3627:
case 2997:
case 2047:
case 1554:
case 889:
case 232:
case 2158:
case 3689:
case 2319:
case 1241:
case 1627:
case 896:
case 1605:
case 2228:
case 3186:
case 2174:
case 4045:
case 430:
case 2564:
case 3698:
case 1438:
case 2417:
case 3578:
case 2511:
case 3168:
case 1186:
case 1857:
case 2297:
case 2304:
case 456:
case 1578:
case 2732:
case 1883:
case 2679:
case 3300:
case 787:
case 302:
case 2599:
case 264:
case 1170:
case 3347:
case 2701:
case 3115:
case 3883:
case 102:
case 912:
case 3170:
case 3560:
case 2550:
case 1790:
case 1184:
case 1004:
case 4093:
case 3835:
case 1449:
case 995:
case 353:
case 619:
case 3184:
case 2176:
case 3004:
case 2391:
case 2566:
case 1835:
case 3449:
case 840:
case 153:
case 676:
case 1887:
case 3690:
case 1430:
case 1226:
case 2945:
case 381:
case 786:
case 3515:
case 3156:
case 3887:
case 1570:
case 245:
case 1829:
case 1690:
case 3430:
case 1343:
case 113:
case 2188:
case 741:
case 2492:
case 2576:
case 1926:
case 2245:
case 274:
case 2601:
case 2632:
case 2150:
case 729:
case 2779:
case 2212:
case 447:
case 1721:
case 4004:
case 2748:
case 1682:
case 2534:
case 1468:
case 3721:
case 2117:
case 3943:
case 200:
case 2320:
case 2:
case 2312:
case 739:
case 3682:
case 2458:
case 2871:
case 1326:
case 680:
case 2837:
case 1818:
case 1644:
case 1243:
case 3326:
case 1097:
case 1744:
case 3851:
case 1947:
case 2517:
case 258:
case 2134:
case 3097:
case 3947:
case 2291:
case 1851:
case 2809:
case 3900:
case 3538:
case 2991:
case 2814:
case 935:
case 871:
case 1247:
case 1621:
case 2861:
case 1200:
case 3028:
case 169:
case 343:
case 2136:
case 420:
case 3810:
case 2919:
case 1875:
case 2450:
case 369:
case 1746:
case 2397:
case 1822:
case 2466:
case 316:
case 711:
case 3875:
case 984:
case 1460:
case 222:
case 3130:
case 3341:
case 2707:
case 2772:
case 2639:
case 587:
case 2328:
case 783:
case 1130:
case 490:
case 1020:
case 3484:
case 2476:
case 130:
case 3208:
case 1995:
case 649:
case 4091:
case 2592:
case 938:
case 356:
case 751:
case 2672:
case 808:
case 810:
case 1012:
case 529:
case 2739:
case 3149:
case 2393:
case 330:
case 1208:
case 3020:
case 907:
case 663:
case 117:
case 3995:
case 621:
case 3752:
case 156:
case 2607:
case 4006:
case 541:
case 837:
case 2536:
case 586:
case 1442:
case 379:
case 1908:
case 2703:
case 3295:
case 3324:
case 3442:
case 504:
case 3881:
case 2026:
case 1470:
case 3908:
case 2855:
case 1295:
case 412:
case 2447:
case 38:
case 4015:
case 1911:
case 1964:
case 4042:
case 1767:
case 18:
case 2124:
case 1773:
case 855:
case 3964:
case 3767:
case 778:
case 2254:
case 2757:
case 1597:
case 3663:
case 1491:
case 1677:
case 3193:
case 3211:
case 1264:
case 2349:
case 2823:
case 1663:
case 3597:
case 1631:
case 74:
case 3491:
case 4084:
case 3677:
case 237:
case 3038:
case 2986:
case 1731:
case 3777:
case 815:
case 3128:
case 2443:
case 135:
case 1763:
case 2524:
case 3280:
case 2141:
case 2330:
case 2898:
case 4056:
case 452:
case 3763:
case 2753:
case 1593:
case 3392:
case 236:
case 2889:
case 3980:
case 2805:
case 3958:
case 250:
case 2268:
case 2827:
case 1980:
case 51:
case 3673:
case 4054:
case 662:
case 554:
case 2635:
case 2984:
case 3976:
case 3030:
case 271:
case 2215:
case 2242:
case 2942:
case 701:
case 2092:
case 1545:
case 1520:
case 943:
case 2408:
case 2284:
case 775:
case 1512:
case 2915:
case 916:
case 106:
case 384:
case 428:
case 969:
case 3512:
case 2970:
case 2036:
case 979:
case 3832:
case 3988:
case 3801:
case 514:
case 1950:
case 293:
case 1801:
case 3419:
case 2260:
case 2859:
case 3896:
case 1299:
case 3869:
case 1266:
case 63:
case 2960:
case 4068:
case 1999:
case 3112:
case 2687:
case 2735:
case 3145:
case 4086:
case 3317:
case 107:
case 917:
case 223:
case 261:
case 338:
case 1288:
case 818:
case 3266:
case 2629:
case 3999:
case 2956:
case 3049:
case 800:
case 1317:
case 3404:
case 1544:
case 2961:
case 1423:
case 1738:
case 2914:
case 3335:
case 3121:
case 3544:
case 1251:
case 2148:
case 491:
case 3423:
case 1335:
case 3582:
case 2494:
case 4055:
case 1951:
case 2909:
case 533:
case 737:
case 2233:
case 2634:
case 3383:
case 2985:
case 2613:
case 449:
case 3951:
case 3067:
case 1800:
case 1521:
case 3489:
case 690:
case 883:
case 3144:
case 2937:
case 1918:
case 99:
case 3521:
case 3405:
case 3918:
case 473:
case 750:
case 3638:
case 1387:
case 1031:
case 2271:
case 1063:
case 92:
case 1002:
case 3329:
case 2617:
case 4016:
case 1638:
case 268:
case 1077:
case 1218:
case 736:
case 540:
case 1329:
case 3353:
case 771:
case 705:
case 1146:
case 2539:
case 3981:
case 681:
case 176:
case 596:
case 244:
case 2736:
case 526:
case 2377:
case 367:
case 1281:
case 2029:
case 2562:
case 2503:
case 860:
case 3895:
case 2172:
case 4061:
case 1965:
case 201:
case 2107:
case 613:
case 167:
case 1895:
case 1649:
case 2255:
case 3965:
case 1749:
case 3546:
case 3222:
case 480:
case 2035:
case 1275:
case 602:
case 177:
case 3749:
case 1210:
case 1152:
case 924:
case 1630:
case 3490:
case 2216:
case 2401:
case 3975:
case 2636:
case 994:
case 282:
case 2540:
case 653:
case 839:
case 2507:
case 2572:
case 1975:
case 4071:
case 2103:
case 723:
case 2367:
case 527:
case 2692:
case 3577:
case 718:
case 1173:
case 882:
case 3303:
case 3697:
case 4059:
case 2927:
case 1437:
case 2418:
case 3531:
case 3880:
case 43:
case 3173:
case 1303:
case 1362:
case 2298:
case 3563:
case 865:
case 2998:
case 3628:
case 1793:
case 4090:
case 1021:
case 3339:
case 3793:
case 270:
case 2641:
case 2868:
case 3021:
case 2157:
case 1339:
case 32:
case 548:
case 1372:
case 3573:
case 3082:
case 2923:
case 1567:
case 1728:
case 260:
case 3131:
case 628:
case 2741:
case 485:
case 1177:
case 1163:
case 12:
case 3372:
case 1573:
case 1325:
case 3414:
case 3567:
case 1307:
case 1131:
case 1294:
case 2854:
case 2346:
case 1044:
case 1797:
case 1994:
case 19:
case 2451:
case 532:
case 2878:
case 3811:
case 3044:
case 3994:
case 844:
case 3409:
case 1811:
case 959:
case 3612:
case 792:
case 3232:
case 3201:
case 2007:
case 3620:
case 2990:
case 3645:
case 1296:
case 2025:
case 603:
case 967:
case 868:
case 1201:
case 3969:
case 2860:
case 1645:
case 1899:
case 2259:
case 1901:
case 1866:
case 2410:
case 3850:
case 2626:
case 3996:
case 652:
case 283:
case 1932:
case 2422:
case 976:
case 1888:
case 3901:
case 2344:
case 1269:
case 3866:
case 1850:
case 1046:
case 722:
case 3932:
case 695:
case 2870:
case 3979:
case 84:
case 2183:
case 2062:
case 309:
case 3455:
case 574:
case 966:
case 2842:
case 2726:
case 194:
case 4023:
case 2039:
case 3876:
case 755:
case 1712:
case 878:
case 545:
case 2135:
case 3745:
case 324:
case 488:
case 3248:
case 134:
case 3813:
case 2453:
case 3109:
case 3027:
case 3185:
case 1834:
case 3571:
case 3161:
case 2743:
case 3114:
case 1098:
case 1606:
case 3691:
case 3402:
case 3537:
case 518:
case 1161:
case 500:
case 3948:
case 3098:
case 1114:
case 3431:
case 1691:
case 3706:
case 3369:
case 68:
case 2551:
case 424:
case 3585:
case 3817:
case 1706:
case 854:
case 77:
case 1585:
case 2838:
case 732:
case 1817:
case 980:
case 2982:
case 20:
case 3332:
case 2282:
case 1514:
case 1396:
case 3473:
case 2700:
case 2944:
case 2747:
case 3137:
case 2094:
case 558:
case 748:
case 1332:
case 3533:
case 3514:
case 3561:
case 1473:
case 2359:
case 3396:
case 3171:
case 1301:
case 2118:
case 494:
case 1137:
case 2522:
case 1090:
case 1925:
case 2246:
case 515:
case 4021:
case 3972:
case 2510:
case 3704:
case 3907:
case 2323:
case 3940:
case 3925:
case 2695:
case 764:
case 2165:
case 1719:
case 2032:
case 3516:
case 33:
case 638:
case 372:
case 949:
case 3225:
case 2181:
case 3272:
case 921:
case 2483:
case 1394:
case 3059:
case 172:
case 1240:
case 607:
case 963:
case 2565:
case 286:
case 745:
case 1962:
case 4044:
case 2708:
case 162:
case 973:
case 49:
case 1836:
case 3239:
case 362:
case 3903:
case 555:
case 1239:
case 3836:
case 1619:
case 2122:
case 774:
case 1939:
case 85:
case 3604:
case 2952:
case 3203:
case 185:
case 229:
case 2795:
case 1604:
case 3116:
case 2398:
case 385:
case 1262:
case 3555:
case 2273:
case 3198:
case 1014:
case 2674:
case 25:
case 2316:
case 3841:
case 3668:
case 1957:
case 2594:
case 3482:
case 829:
case 1061:
case 3033:
case 3014:
case 467:
case 459:
case 1841:
case 841:
case 537:
case 2828:
case 2267:
case 3322:
case 3257:
case 1189:
case 2051:
case 1523:
case 3105:
case 3127:
case 3310:
case 2897:
case 899:
case 804:
case 3009:
case 1778:
case 1105:
case 934:
case 1127:
case 1085:
case 3444:
case 1381:
case 419:
case 2018:
case 536:
case 3824:
case 2758:
case 1598:
case 3678:
case 1071:
case 2202:
case 21:
case 1824:
case 3598:
case 1768:
case 2963:
case 1527:
case 2902:
case 3654:
case 1505:
case 3253:
case 1786:
case 3768:
case 2893:
case 380:
case 1589:
case 3421:
case 121:
case 3318:
case 80:
case 972:
case 1287:
case 2462:
case 617:
case 2403:
case 349:
case 3229:
case 1055:
case 1742:
case 4067:
case 2666:
case 726:
case 4073:
case 1318:
case 2101:
case 2650:
case 3826:
case 1229:
case 3742:
case 2132:
case 2439:
case 1929:
case 2065:
case 3660:
case 796:
case 3190:
case 3987:
case 3784:
case 2820:
case 2845:
case 2699:
case 571:
case 191:
case 2169:
case 1987:
case 2579:
case 789:
case 4031:
case 1684:
case 4002:
case 727:
case 1559:
case 3756:
case 523:
case 2799:
case 2501:
case 3283:
case 669:
case 3935:
case 3684:
case 3760:
case 616:
case 3642:
case 2569:
case 2010:
case 3983:
case 3615:
case 3235:
case 214:
case 3590:
case 593:
case 797:
case 2766:
case 1983:
case 1235:
case 962:
case 173:
case 945:
case 1949:
case 577:
case 773:
case 1099:
case 3665:
case 2872:
case 2519:
case 3195:
case 2840:
case 2825:
case 3949:
case 2056:
case 3099:
case 2807:
case 1354:
case 1665:
case 2716:
case 397:
case 1195:
case 566:
case 1710:
case 327:
case 1378:
case 4013:
case 974:
case 3775:
case 3108:
case 1846:
case 3249:
case 519:
case 820:
case 1050:
case 436:
case 1722:
case 3066:
case 1088:
case 611:
case 3378:
case 127:
case 3681:
case 203:
case 1775:
case 1108:
case 2655:
case 3846:
case 1249:
case 1066:
case 450:
case 225:
case 396:
case 2042:
case 3426:
case 3781:
case 212:
case 3595:
case 389:
case 2803:
case 1622:
case 2119:
case 1610:
case 964:
case 2936:
case 1426:
case 3386:
case 410:
case 4017:
case 2616:
case 2236:
case 2445:
case 1930:
case 408:
case 3852:
case 1765:
case 437:
case 3930:
case 567:
case 763:
case 721:
case 1368:
case 326:
case 1852:
case 3765:
case 3651:
case 1543:
case 3100:
case 670:
case 3147:
case 2913:
case 1718:
case 3315:
case 1342:
case 2609:
case 3058:
case 3543:
case 802:
case 1100:
case 932:
case 493:
case 3718:
case 1147:
case 2771:
case 1315:
case 423:
case 3074:
case 847:
case 2614:
case 639:
case 853:
case 3384:
case 2191:
case 948:
case 1074:
case 2848:
case 2661:
case 1547:
case 2054:
case 3360:
case 1500:
case 2761:
case 1882:
case 3143:
case 2917:
case 2428:
case 1938:
case 1441:
case 881:
case 298:
case 3547:
case 405:
case 2399:
case 3938:
case 2591:
case 3844:
case 2366:
case 3011:
case 1238:
case 2217:
case 2785:
case 2637:
case 1618:
case 228:
case 846:
case 2350:
case 2506:
case 1576:
case 3779:
case 3212:
case 675:
case 3150:
case 1492:
case 374:
case 3245:
case 3220:
case 3576:
case 3166:
case 246:
case 1632:
case 1601:
case 1220:
case 1245:
case 1095:
case 2226:
case 1945:
case 2430:
case 4041:
case 644:
case 1920:
case 1912:
case 345:
case 524:
case 2887:
case 2156:
case 3199:
case 281:
case 898:
case 997:
case 2690:
case 145:
case 3912:
case 1199:
case 2449:
case 3588:
case 3566:
case 3391:
case 73:
case 1550:
case 253:
case 2835:
case 1566:
case 4:
case 418:
case 1701:
case 2170:
case 4024:
case 2759:
case 3796:
case 1679:
case 996:
case 2019:
case 1732:
case 364:
case 1796:
case 2300:
case 3599:
case 3679:
case 665:
case 989:
case 2142:
case 3732:
case 1511:
case 1417:
case 3304:
case 148:
case 2091:
case 2941:
case 1174:
case 3297:
case 2168:
case 3511:
case 2006:
case 3564:
case 348:
case 52:
case 1304:
case 1297:
case 2857:
case 132:
case 3867:
case 825:
case 788:
case 1047:
case 2554:
case 1180:
case 3319:
case 1873:
case 1867:
case 332:
case 1228:
case 3794:
case 3997:
case 455:
case 2627:
case 2241:
case 1319:
case 3164:
case 220:
case 3293:
case 2924:
case 1434:
case 1413:
case 803:
case 1293:
case 2308:
case 1111:
case 492:
case 1558:
case 422:
case 3802:
case 415:
case 3580:
case 3558:
case 2395:
case 3043:
case 1863:
case 2154:
case 1831:
case 432:
case 2415:
case 2646:
case 3026:
case 1703:
case 562:
case 654:
case 2881:
case 2295:
case 1855:
case 279:
case 3762:
case 1026:
case 2470:
case 724:
case 88:
case 3536:
case 794:
case 2752:
case 3607:
case 1592:
case 3640:
case 2995:
case 3393:
case 2045:
case 3739:
case 2149:
case 1607:
case 1625:
case 923:
case 217:
case 3476:
case 2484:
case 1393:
case 1707:
case 1904:
case 971:
case 835:
case 3328:
case 1499:
case 2460:
case 3219:
case 1816:
case 3772:
case 2652:
case 3707:
case 3904:
case 3740:
case 614:
case 2130:
case 3725:
case 1328:
case 1639:
case 3499:
case 1219:
case 1450:
case 257:
case 3192:
case 216:
case 3488:
case 3204:
case 1136:
case 392:
case 3662:
case 1192:
case 1204:
case 3906:
case 1041:
case 2454:
case 2200:
case 1861:
case 1648:
case 2621:
case 588:
case 3041:
case 445:
case 2782:
case 1814:
case 1885:
case 950:
case 2538:
case 3809:
case 884:
case 3113:
case 3291:
case 72:
case 2744:
case 3134:
case 3517:
case 3411:
case 2851:
case 1291:
case 1134:
case 65:
case 2326:
case 1024:
case 464:
case 1871:
case 534:
case 1458:
case 2818:
case 3871:
case 3458:
case 1534:
case 61:
case 300:
case 3320:
case 2093:
case 3345:
case 3:
case 3117:
case 937:
case 1748:
case 2721:
case 3474:
case 318:
case 3513:
case 3534:
case 1312:
case 910:
case 3748:
case 2138:
case 1117:
case 118:
case 908:
case 2404:
case 2288:
case 161:
case 123:
case 1687:
case 2049:
case 3629:
case 3956:
case 1960:
case 238:
case 2317:
case 2120:
case 4074:
case 719:
case 1956:
case 2250:
case 1890:
case 2869:
case 687:
case 3859:
case 1256:
case 2896:
case 2419:
case 3260:
case 4058:
case 3783:
case 393:
case 955:
case 2299:
case 573:
case 3256:
case 2801:
case 1783:
case 4080:
case 4011:
case 641:
case 433:
case 1408:
case 759:
case 767:
case 2545:
case 1092:
case 521:
case 4064:
case 1942:
case 2334:
case 3915:
case 3683:
case 2313:
case 3284:
case 2276:
case 1970:
case 549:
case 206:
case 3942:
case 1729:
case 3526:
case 3242:
case 371:
case 776:
case 2976:
case 2030:
case 699:
case 915:
case 591:
case 1242:
case 1215:
case 171:
case 1984:
case 3270:
case 1787:
case 2336:
case 816:
case 3827:
case 3268:
case 2958:
case 2593:
case 350:
case 3805:
case 869:
case 3013:
case 3889:
case 1286:
case 3034:
case 2392:
case 1268:
case 731:
case 150:
case 4066:
case 1524:
case 1968:
case 3657:
case 3898:
case 235:
case 580:
case 497:
case 1986:
case 1657:
case 2258:
case 1898:
case 2128:
case 3443:
case 2777:
case 2974:
case 1278:
case 337:
case 1017:
case 4076:
case 2597:
case 3349:
case 2193:
case 137:
case 3017:
case 2406:
case 308:
case 2602:
case 817:
case 1349:
case 2264:
case 489:
case 2767:
case 3978:
case 3124:
case 3541:
case 496:
case 2773:
case 1978:
case 3447:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760702401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,];
var gg_b = "1760702401/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
