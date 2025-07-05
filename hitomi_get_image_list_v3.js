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
var o = 0;
switch (g) {
case 2627:
case 2097:
case 830:
case 2875:
case 2264:
case 24:
case 1696:
case 1151:
case 2799:
case 2867:
case 1577:
case 1129:
case 1372:
case 2686:
case 2324:
case 1565:
case 4043:
case 3820:
case 1923:
case 3603:
case 166:
case 182:
case 3660:
case 2137:
case 943:
case 330:
case 1461:
case 985:
case 1087:
case 2758:
case 3174:
case 541:
case 2241:
case 2114:
case 4088:
case 2994:
case 3690:
case 448:
case 1595:
case 1887:
case 905:
case 31:
case 169:
case 602:
case 1271:
case 1284:
case 494:
case 102:
case 669:
case 268:
case 2585:
case 4082:
case 2294:
case 758:
case 1045:
case 1444:
case 3762:
case 2067:
case 1971:
case 424:
case 2474:
case 3306:
case 97:
case 1567:
case 428:
case 2718:
case 4024:
case 981:
case 550:
case 1291:
case 2441:
case 1575:
case 1706:
case 3670:
case 1484:
case 713:
case 3937:
case 1471:
case 2981:
case 264:
case 4042:
case 3602:
case 1244:
case 2753:
case 516:
case 3001:
case 2095:
case 762:
case 1991:
case 1368:
case 3017:
case 2712:
case 4048:
case 3504:
case 2281:
case 3793:
case 3055:
case 2877:
case 1423:
case 1676:
case 3763:
case 170:
case 789:
case 2382:
case 670:
case 2895:
case 3214:
case 1321:
case 2587:
case 706:
case 591:
case 3772:
case 22:
case 2065:
case 3389:
case 993:
case 3700:
case 2464:
case 519:
case 3194:
case 503:
case 2388:
case 901:
case 521:
case 1359:
case 1261:
case 1392:
case 3778:
case 2154:
case 923:
case 1885:
case 3609:
case 1929:
case 1205:
case 527:
case 1640:
case 1123:
case 3343:
case 3718:
case 3135:
case 2602:
case 2164:
case 549:
case 3545:
case 907:
case 3974:
case 1369:
case 1905:
case 3712:
case 2017:
case 1229:
case 597:
case 3095:
case 2001:
case 3753:
case 2055:
case 864:
case 2454:
case 2793:
case 2237:
case 3274:
case 1633:
case 705:
case 1520:
case 3330:
case 3865:
case 2214:
case 2141:
case 3382:
case 2817:
case 3779:
case 89:
case 2389:
case 3065:
case 32:
case 2700:
case 3077:
case 4006:
case 743:
case 2914:
case 1313:
case 1399:
case 3388:
case 1352:
case 2194:
case 987:
case 3154:
case 661:
case 39:
case 480:
case 418:
case 701:
case 1907:
case 1191:
case 3713:
case 3867:
case 3264:
case 2057:
case 532:
case 3324:
case 5:
case 2820:
case 1804:
case 1144:
case 2721:
case 906:
case 3547:
case 230:
case 3964:
case 1379:
case 2660:
case 2181:
case 3994:
case 665:
case 547:
case 868:
case 1730:
case 1312:
case 986:
case 3650:
case 1501:
case 529:
case 3294:
case 1429:
case 781:
case 3897:
case 1161:
case 511:
case 3383:
case 2437:
case 599:
case 2762:
case 4089:
case 1743:
case 2254:
case 105:
case 969:
case 2090:
case 1162:
case 3924:
case 2533:
case 1838:
case 1508:
case 2143:
case 808:
case 2803:
case 290:
case 2860:
case 2335:
case 3364:
case 522:
case 857:
case 1173:
case 733:
case 3050:
case 67:
case 1499:
case 2249:
case 1832:
case 1452:
case 3224:
case 308:
case 1311:
case 17:
case 3488:
case 1436:
case 357:
case 1080:
case 3948:
case 2540:
case 2130:
case 388:
case 1121:
case 1774:
case 761:
case 2182:
case 2615:
case 2722:
case 1781:
case 539:
case 2744:
case 1253:
case 3729:
case 1198:
case 2906:
case 1880:
case 3983:
case 1469:
case 1038:
case 2003:
case 888:
case 2728:
case 2890:
case 1953:
case 1192:
case 1218:
case 3705:
case 2060:
case 3576:
case 3283:
case 1178:
case 693:
case 3243:
case 3825:
case 2634:
case 1269:
case 1503:
case 2808:
case 2538:
case 3930:
case 884:
case 1794:
case 810:
case 3677:
case 1840:
case 623:
case 3943:
case 1172:
case 3539:
case 3149:
case 2870:
case 601:
case 1969:
case 3230:
case 2337:
case 2556:
case 101:
case 3988:
case 1952:
case 3009:
case 1913:
case 1999:
case 1040:
case 460:
case 304:
case 181:
case 2002:
case 3707:
case 2070:
case 542:
case 967:
case 3288:
case 1764:
case 2617:
case 1958:
case 2449:
case 2601:
case 1299:
case 3695:
case 3846:
case 1590:
case 2655:
case 2183:
case 2723:
case 2989:
case 240:
case 1033:
case 1391:
case 1968:
case 1076:
case 438:
case 1419:
case 1493:
case 2677:
case 766:
case 2046:
case 1586:
case 3538:
case 2930:
case 1328:
case 256:
case 3148:
case 3634:
case 2665:
case 1273:
case 3784:
case 563:
case 2149:
case 1268:
case 961:
case 2010:
case 3124:
case 1962:
case 3337:
case 3802:
case 2381:
case 210:
case 1322:
case 284:
case 2230:
case 3870:
case 1973:
case 2374:
case 2282:
case 3314:
case 607:
case 2988:
case 1992:
case 1685:
case 23:
case 158:
case 2566:
case 2448:
case 1959:
case 658:
case 1112:
case 1298:
case 855:
case 702:
case 2695:
case 1550:
case 1921:
case 3601:
case 2288:
case 471:
case 1292:
case 2442:
case 3723:
case 531:
case 2846:
case 1361:
case 2106:
case 186:
case 3803:
case 1421:
case 3761:
case 1972:
case 4074:
case 662:
case 1169:
case 820:
case 162:
case 1200:
case 1978:
case 208:
case 2224:
case 3249:
case 1645:
case 3130:
case 1896:
case 1714:
case 3540:
case 2242:
case 2675:
case 320:
case 1263:
case 1462:
case 3615:
case 3722:
case 1866:
case 3182:
case 1158:
case 2697:
case 1384:
case 1473:
case 1039:
case 2729:
case 1626:
case 3657:
case 3744:
case 1096:
case 1993:
case 3890:
case 1152:
case 2394:
case 1546:
case 1136:
case 3188:
case 3003:
case 3728:
case 1468:
case 1113:
case 3791:
case 434:
case 3206:
case 2430:
case 2576:
case 3060:
case 2850:
case 3354:
case 189:
case 1744:
case 3371:
case 3473:
case 2880:
case 3626:
case 651:
case 94:
case 3158:
case 2121:
case 3737:
case 2032:
case 3462:
case 2781:
case 1722:
case 3219:
case 151:
case 2192:
case 3687:
case 389:
case 1791:
case 2159:
case 1206:
case 1060:
case 1003:
case 243:
case 306:
case 1728:
case 2038:
case 3468:
case 3993:
case 1890:
case 1188:
case 1860:
case 431:
case 362:
case 190:
case 3525:
case 2458:
case 4029:
case 1090:
case 813:
case 1761:
case 2508:
case 973:
case 1803:
case 3900:
case 1533:
case 2604:
case 2838:
case 3323:
case 2279:
case 3492:
case 3509:
case 620:
case 809:
case 1540:
case 354:
case 2307:
case 2413:
case 2832:
case 2856:
case 3272:
case 2570:
case 3066:
case 27:
case 3153:
case 1289:
case 1070:
case 2193:
case 2913:
case 964:
case 3259:
case 1655:
case 3998:
case 2590:
case 1989:
case 3463:
case 2033:
case 952:
case 3118:
case 3876:
case 3735:
case 3400:
case 807:
case 2213:
case 2958:
case 3550:
case 1449:
case 3586:
case 2412:
case 2833:
case 50:
case 3328:
case 1148:
case 2503:
case 1634:
case 3273:
case 2794:
case 2453:
case 4011:
case 730:
case 3391:
case 2560:
case 2305:
case 887:
case 293:
case 3647:
case 4007:
case 3973:
case 2969:
case 1142:
case 1337:
case 201:
case 1802:
case 1532:
case 2163:
case 2418:
case 3179:
case 1771:
case 3962:
case 387:
case 3268:
case 2329:
case 2172:
case 223:
case 2685:
case 576:
case 2153:
case 2992:
case 604:
case 492:
case 104:
case 63:
case 2298:
case 2112:
case 381:
case 1707:
case 436:
case 3258:
case 1810:
case 3913:
case 1282:
case 3119:
case 1988:
case 3193:
case 2463:
case 3033:
case 3479:
case 2118:
case 3016:
case 2259:
case 773:
case 2472:
case 1695:
case 1982:
case 2735:
case 1288:
case 2400:
case 2876:
case 3453:
case 1046:
case 3794:
case 656:
case 156:
case 3269:
case 2273:
case 3351:
case 2586:
case 1930:
case 3305:
case 2968:
case 3178:
case 45:
case 2754:
case 110:
case 3418:
case 2179:
case 1381:
case 2973:
case 1374:
case 3969:
case 439:
case 1539:
case 323:
case 287:
case 579:
case 74:
case 1010:
case 3840:
case 3212:
case 2626:
case 2384:
case 4061:
case 2039:
case 1983:
case 3918:
case 2219:
case 2462:
case 3032:
case 3781:
case 2293:
case 188:
case 1697:
case 2866:
case 1341:
case 1705:
case 1430:
case 577:
case 3159:
case 3953:
case 3192:
case 1850:
case 2919:
case 2152:
case 72:
case 1086:
case 2468:
case 2199:
case 209:
case 1248:
case 262:
case 2963:
case 2525:
case 1364:
case 4022:
case 1942:
case 3162:
case 3508:
case 2278:
case 2972:
case 1482:
case 2421:
case 4028:
case 2896:
case 442:
case 157:
case 2839:
case 3080:
case 3452:
case 3311:
case 2200:
case 764:
case 37:
case 2066:
case 3570:
case 3856:
case 213:
case 3307:
case 254:
case 805:
case 3413:
case 3501:
case 2271:
case 2595:
case 269:
case 4059:
case 2428:
case 202:
case 2491:
case 990:
case 3405:
case 3004:
case 2319:
case 497:
case 2393:
case 1067:
case 2971:
case 3743:
case 2422:
case 1075:
case 2984:
case 1383:
case 2666:
case 704:
case 4021:
case 168:
case 1897:
case 2045:
case 865:
case 427:
case 2444:
case 73:
case 2026:
case 1348:
case 1867:
case 2151:
case 64:
case 3128:
case 951:
case 1799:
case 2845:
case 3907:
case 3191:
case 3656:
case 446:
case 3911:
case 1097:
case 2363:
case 282:
case 1758:
case 2461:
case 2087:
case 2577:
case 3207:
case 2565:
case 3211:
case 3804:
case 2789:
case 3638:
case 4062:
case 1686:
case 2300:
case 1077:
case 1646:
case 3184:
case 2749:
case 861:
case 1065:
case 1779:
case 3742:
case 2047:
case 3358:
case 1587:
case 2321:
case 4:
case 1382:
case 788:
case 2597:
case 1154:
case 19:
case 1526:
case 3336:
case 3411:
case 2373:
case 664:
case 3369:
case 2228:
case 3251:
case 1135:
case 2922:
case 2471:
case 1545:
case 164:
case 3640:
case 757:
case 2567:
case 1343:
case 1718:
case 2575:
case 1609:
case 267:
case 3205:
case 3783:
case 2291:
case 3520:
case 429:
case 1865:
case 2222:
case 1877:
case 1281:
case 1095:
case 4078:
case 1494:
case 2111:
case 652:
case 447:
case 333:
case 1712:
case 2368:
case 2107:
case 441:
case 1435:
case 1389:
case 1700:
case 1034:
case 2724:
case 2171:
case 2184:
case 1772:
case 3961:
case 1531:
case 3047:
case 956:
case 370:
case 1817:
case 3392:
case 3885:
case 3597:
case 4053:
case 4012:
case 3261:
case 910:
case 984:
case 1914:
case 2407:
case 2313:
case 2352:
case 2411:
case 1194:
case 2557:
case 417:
case 4079:
case 1937:
case 3922:
case 1164:
case 1602:
case 1670:
case 3228:
case 2251:
case 3373:
case 2369:
case 3085:
case 3291:
case 2783:
case 495:
case 93:
case 904:
case 3567:
case 2640:
case 3362:
case 1719:
case 1055:
case 959:
case 2520:
case 1834:
case 2951:
case 1504:
case 3368:
case 233:
case 1017:
case 1001:
case 3111:
case 790:
case 2517:
case 302:
case 2451:
case 2312:
case 3595:
case 544:
case 2831:
case 369:
case 1954:
case 2501:
case 3271:
case 2555:
case 265:
case 1690:
case 3319:
case 4013:
case 2405:
case 2004:
case 3491:
case 416:
case 598:
case 908:
case 3826:
case 2161:
case 1306:
case 2743:
case 1254:
case 2318:
case 3422:
case 869:
case 3971:
case 483:
case 3045:
case 3444:
case 957:
case 2429:
case 3666:
case 1773:
case 445:
case 3696:
case 3151:
case 3026:
case 1057:
case 3639:
case 2788:
case 3378:
case 1792:
case 3223:
case 2911:
case 2191:
case 2656:
case 403:
case 3845:
case 2031:
case 3461:
case 2782:
case 1721:
case 1174:
case 1660:
case 130:
case 2122:
case 2804:
case 2638:
case 2211:
case 1820:
case 3923:
case 3577:
case 1349:
case 2207:
case 1798:
case 3226:
case 1257:
case 2612:
case 1035:
case 401:
case 772:
case 1854:
case 2653:
case 2185:
case 1215:
case 3693:
case 235:
case 3708:
case 1606:
case 1957:
case 2514:
case 677:
case 3871:
case 493:
case 274:
case 3366:
case 2011:
case 4033:
case 3071:
case 2710:
case 3339:
case 1529:
case 892:
case 1177:
case 836:
case 1220:
case 3678:
case 2811:
case 2332:
case 944:
case 2537:
case 1054:
case 1455:
case 392:
case 3663:
case 2679:
case 1360:
case 2904:
case 336:
case 508:
case 4040:
case 3600:
case 2338:
case 1920:
case 3672:
case 1401:
case 53:
case 1689:
case 3285:
case 3698:
case 2126:
case 1955:
case 1901:
case 2554:
case 3376:
case 3091:
case 3760:
case 2404:
case 3131:
case 3985:
case 3541:
case 231:
case 1255:
case 3022:
case 3659:
case 3044:
case 1201:
case 2613:
case 559:
case 3445:
case 1796:
case 1814:
case 2699:
case 1739:
case 405:
case 2636:
case 1837:
case 1507:
case 1511:
case 2669:
case 278:
case 1370:
case 1457:
case 556:
case 485:
case 96:
case 337:
case 2829:
case 443:
case 1014:
case 1175:
case 2316:
case 584:
case 2431:
case 1934:
case 2333:
case 1167:
case 679:
case 2535:
case 837:
case 4032:
case 2145:
case 2750:
case 753:
case 714:
case 780:
case 2594:
case 728:
case 2861:
case 831:
case 3126:
case 242:
case 2285:
case 1738:
case 3786:
case 3404:
case 2376:
case 1682:
case 4066:
case 3658:
case 68:
case 2022:
case 462:
case 1081:
case 555:
case 1467:
case 2692:
case 2541:
case 18:
case 1584:
case 744:
case 1295:
case 2445:
case 3613:
case 1874:
case 2673:
case 1265:
case 489:
case 3669:
case 1277:
case 2822:
case 312:
case 406:
case 1643:
case 2104:
case 3340:
case 1309:
case 1780:
case 972:
case 1630:
case 3851:
case 878:
case 2828:
case 2061:
case 1977:
case 812:
case 2790:
case 363:
case 2564:
case 3185:
case 1350:
case 3931:
case 1477:
case 3612:
case 2023:
case 2447:
case 953:
case 1297:
case 914:
case 335:
case 487:
case 874:
case 1894:
case 1561:
case 1716:
case 2287:
case 1683:
case 1155:
case 25:
case 2770:
case 3011:
case 1841:
case 1101:
case 374:
case 4076:
case 2702:
case 2485:
case 222:
case 2071:
case 3710:
case 1134:
case 1648:
case 3356:
case 2945:
case 3537:
case 171:
case 1522:
case 3332:
case 3147:
case 2678:
case 794:
case 3811:
case 2574:
case 3204:
case 520:
case 1864:
case 3679:
case 1267:
case 407:
case 3746:
case 2672:
case 1386:
case 2600:
case 3338:
case 724:
case 1624:
case 236:
case 900:
case 2684:
case 2588:
case 1883:
case 2326:
case 3980:
case 1048:
case 3818:
case 3440:
case 78:
case 895:
case 698:
case 1641:
case 247:
case 2966:
case 2078:
case 3079:
case 3433:
case 3812:
case 2582:
case 1950:
case 1521:
case 3331:
case 2819:
case 2072:
case 395:
case 628:
case 1024:
case 128:
case 2000:
case 2266:
case 1170:
case 2296:
case 3795:
case 1446:
case 3053:
case 841:
case 2717:
case 2863:
case 3012:
case 3879:
case 1842:
case 2239:
case 2476:
case 1824:
case 3304:
case 2872:
case 2755:
case 2996:
case 341:
case 3018:
case 2133:
case 2939:
case 3238:
case 1286:
case 734:
case 2:
case 226:
case 3611:
case 1573:
case 817:
case 3607:
case 4047:
case 70:
case 2439:
case 4087:
case 2892:
case 482:
case 738:
case 2859:
case 3767:
case 1910:
case 3899:
case 1043:
case 1888:
case 3836:
case 803:
case 3852:
case 1190:
case 3775:
case 2276:
case 2720:
case 1030:
case 819:
case 1704:
case 2898:
case 4026:
case 891:
case 979:
case 2180:
case 1519:
case 1210:
case 2821:
case 1882:
case 303:
case 2976:
case 2068:
case 1450:
case 124:
case 1377:
case 1572:
case 249:
case 2524:
case 383:
case 2542:
case 2868:
case 1209:
case 816:
case 2021:
case 1082:
case 345:
case 402:
case 1681:
case 3216:
case 2622:
case 3480:
case 3233:
case 694:
case 3797:
case 2466:
case 148:
case 3629:
case 2757:
case 883:
case 2862:
case 2138:
case 648:
case 3099:
case 1843:
case 3940:
case 316:
case 291:
case 1150:
case 52:
case 2069:
case 4031:
case 846:
case 2775:
case 315:
case 777:
case 934:
case 2899:
case 2767:
case 2813:
case 3898:
case 1355:
case 1889:
case 59:
case 172:
case 3976:
case 618:
case 2438:
case 1317:
case 203:
case 975:
case 118:
case 3821:
case 672:
case 1334:
case 2196:
case 3628:
case 2139:
case 1202:
case 3098:
case 2240:
case 245:
case 1490:
case 2058:
case 3868:
case 1579:
case 327:
case 283:
case 3542:
case 3873:
case 1970:
case 1208:
case 3715:
case 2216:
case 3622:
case 1637:
case 2940:
case 3548:
case 216:
case 3862:
case 1186:
case 3138:
case 2629:
case 3757:
case 2052:
case 397:
case 3466:
case 552:
case 98:
case 3671:
case 1513:
case 2818:
case 971:
case 1536:
case 1470:
case 3588:
case 3326:
case 2980:
case 1146:
case 811:
case 1806:
case 573:
case 3966:
case 3078:
case 347:
case 1315:
case 1290:
case 225:
case 2853:
case 3387:
case 600:
case 1558:
case 2331:
case 399:
case 2416:
case 311:
case 1747:
case 2079:
case 847:
case 568:
case 2589:
case 1990:
case 2777:
case 3072:
case 153:
case 2012:
case 180:
case 3717:
case 1960:
case 680:
case 3701:
case 2053:
case 1849:
case 3093:
case 217:
case 3140:
case 3800:
case 3476:
case 826:
case 832:
case 241:
case 1125:
case 2607:
case 3345:
case 1203:
case 2611:
case 2238:
case 896:
case 1140:
case 1623:
case 196:
case 3903:
case 1530:
case 2824:
case 3320:
case 2986:
case 3849:
case 696:
case 2227:
case 1019:
case 1701:
case 935:
case 2170:
case 49:
case 3635:
case 1239:
case 353:
case 2102:
case 1717:
case 3960:
case 2568:
case 3203:
case 3569:
case 2573:
case 2286:
case 1345:
case 974:
case 1133:
case 1543:
case 2108:
case 1939:
case 880:
case 3006:
case 565:
case 3315:
case 647:
case 3290:
case 452:
case 1966:
case 4095:
case 2397:
case 2409:
case 2641:
case 2592:
case 147:
case 3536:
case 629:
case 1684:
case 3146:
case 3806:
case 3513:
case 244:
case 3599:
case 129:
case 2048:
case 3402:
case 3990:
case 1893:
case 2598:
case 1819:
case 2694:
case 742:
case 1734:
case 3110:
case 2024:
case 699:
case 3747:
case 464:
case 2521:
case 2950:
case 3558:
case 1582:
case 199:
case 2925:
case 1868:
case 1347:
case 2209:
case 1691:
case 3787:
case 792:
case 468:
case 3490:
case 1021:
case 736:
case 3202:
case 2365:
case 2500:
case 649:
case 3270:
case 1628:
case 3908:
case 1757:
case 197:
case 3726:
case 2088:
case 722:
case 2843:
case 931:
case 697:
case 1644:
case 3186:
case 1138:
case 1715:
case 1622:
case 3637:
case 2674:
case 2578:
case 2427:
case 818:
case 3518:
case 2190:
case 978:
case 1276:
case 2888:
case 3150:
case 1892:
case 26:
case 1496:
case 3745:
case 3301:
case 2882:
case 1821:
case 3553:
case 372:
case 3512:
case 1068:
case 739:
case 3403:
case 3460:
case 1720:
case 44:
case 3355:
case 2593:
case 2490:
case 1058:
case 2787:
case 145:
case 1240:
case 2127:
case 183:
case 848:
case 942:
case 1605:
case 3209:
case 1549:
case 3377:
case 2202:
case 1139:
case 894:
case 1916:
case 2186:
case 4020:
case 1099:
case 1940:
case 116:
case 3103:
case 616:
case 1036:
case 3088:
case 1052:
case 2726:
case 3225:
case 41:
case 1480:
case 1233:
case 2637:
case 3160:
case 394:
case 2902:
case 824:
case 570:
case 1852:
case 3190:
case 1775:
case 1767:
case 3910:
case 2614:
case 3246:
case 2745:
case 430:
case 691:
case 119:
case 36:
case 2150:
case 272:
case 3486:
case 1858:
case 3210:
case 2553:
case 1166:
case 3882:
case 3593:
case 3519:
case 3030:
case 3704:
case 2889:
case 3227:
case 1256:
case 1232:
case 2849:
case 2320:
case 1938:
case 3986:
case 2903:
case 2960:
case 280:
case 1879:
case 3842:
case 2635:
case 3102:
case 3664:
case 253:
case 3170:
case 1053:
case 3927:
case 778:
case 2125:
case 1932:
case 3410:
case 1238:
case 3286:
case 2785:
case 2203:
case 2569:
case 3573:
case 2260:
case 3083:
case 582:
case 641:
case 3375:
case 3848:
case 3367:
case 4034:
case 3108:
case 398:
case 922:
case 625:
case 2315:
case 1176:
case 2290:
case 2599:
case 2402:
case 569:
case 1818:
case 344:
case 2806:
case 2552:
case 2470:
case 2536:
case 502:
case 695:
case 1765:
case 195:
case 3694:
case 2049:
case 2990:
case 844:
case 2654:
case 3950:
case 3521:
case 1331:
case 1079:
case 200:
case 1812:
case 1280:
case 3042:
case 2220:
case 586:
case 1204:
case 3041:
case 3327:
case 1537:
case 929:
case 1807:
case 1332:
case 440:
case 3544:
case 3967:
case 3134:
case 455:
case 562:
case 716:
case 2529:
case 947:
case 911:
case 3528:
case 2920:
case 1904:
case 2417:
case 2303:
case 2649:
case 871:
case 2401:
case 999:
case 2054:
case 750:
case 4002:
case 3591:
case 2776:
case 745:
case 260:
case 2505:
case 1679:
case 135:
case 2390:
case 3894:
case 3716:
case 635:
case 721:
case 3733:
case 3064:
case 2434:
case 996:
case 3465:
case 2035:
case 1725:
case 2257:
case 1612:
case 1185:
case 1931:
case 2854:
case 3117:
case 174:
case 2915:
case 1007:
case 1011:
case 674:
case 3101:
case 3997:
case 506:
case 926:
case 3155:
case 2957:
case 9:
case 2606:
case 589:
case 1618:
case 3740:
case 1829:
case 3497:
case 3309:
case 4003:
case 3120:
case 875:
case 2837:
case 2302:
case 3881:
case 4060:
case 2370:
case 612:
case 3874:
case 3265:
case 2234:
case 1669:
case 587:
case 1535:
case 663:
case 1431:
case 375:
case 1316:
case 2175:
case 2308:
case 80:
case 717:
case 2934:
case 946:
case 3965:
case 1554:
case 3995:
case 3682:
case 949:
case 3115:
case 2420:
case 88:
case 1051:
case 2955:
case 3157:
case 1126:
case 2814:
case 3295:
case 1699:
case 2201:
case 3584:
case 4090:
case 3688:
case 1636:
case 3074:
case 631:
case 1187:
case 38:
case 1844:
case 2643:
case 3415:
case 3014:
case 2120:
case 919:
case 593:
case 20:
case 2265:
case 3511:
case 3234:
case 3370:
case 2874:
case 3457:
case 3302:
case 2881:
case 726:
case 1822:
case 732:
case 921:
case 379:
case 1564:
case 2325:
case 1891:
case 1668:
case 3934:
case 1828:
case 3167:
case 3308:
case 1790:
case 501:
case 796:
case 3175:
case 1487:
case 1061:
case 2977:
case 1376:
case 3420:
case 1760:
case 3917:
case 3197:
case 1621:
case 3901:
case 2682:
case 457:
case 1698:
case 2157:
case 1028:
case 376:
case 1703:
case 142:
case 3689:
case 950:
case 1285:
case 2688:
case 3217:
case 729:
case 2584:
case 1044:
case 3201:
case 1445:
case 3796:
case 2295:
case 3814:
case 2310:
case 2732:
case 3255:
case 2756:
case 1022:
case 747:
case 28:
case 2074:
case 1541:
case 271:
case 1581:
case 2327:
case 505:
case 2041:
case 459:
case 3220:
case 1485:
case 1084:
case 3529:
case 122:
case 2648:
case 797:
case 622:
case 2544:
case 1396:
case 1071:
case 2094:
case 1672:
case 636:
case 1245:
case 4009:
case 3649:
case 3417:
case 57:
case 3303:
case 1823:
case 1600:
case 3776:
case 360:
case 3505:
case 3360:
case 2591:
case 3054:
case 995:
case 692:
case 1447:
case 1619:
case 3215:
case 1693:
case 2350:
case 3854:
case 917:
case 1226:
case 3257:
case 410:
case 484:
case 2064:
case 3035:
case 543:
case 2101:
case 1770:
case 238:
case 3195:
case 2117:
case 2740:
case 1871:
case 3606:
case 3957:
case 4046:
case 2155:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751716802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,];
var gg_b = "1751716802/";

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
