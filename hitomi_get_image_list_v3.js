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
case 4088:
case 2648:
case 3654:
case 714:
case 2389:
case 1788:
case 716:
case 3872:
case 2483:
case 2668:
case 841:
case 1048:
case 1121:
case 2290:
case 2450:
case 2472:
case 873:
case 2307:
case 4030:
case 728:
case 384:
case 3014:
case 3023:
case 3159:
case 246:
case 3795:
case 3512:
case 430:
case 1410:
case 1005:
case 604:
case 2752:
case 3138:
case 3889:
case 678:
case 547:
case 957:
case 1051:
case 3807:
case 2085:
case 63:
case 3988:
case 3180:
case 1896:
case 2745:
case 2011:
case 8:
case 1712:
case 440:
case 234:
case 2765:
case 1595:
case 1310:
case 349:
case 1611:
case 3029:
case 3530:
case 289:
case 1366:
case 997:
case 192:
case 1304:
case 1208:
case 1535:
case 1836:
case 2484:
case 1801:
case 3884:
case 42:
case 371:
case 1111:
case 3381:
case 827:
case 3013:
case 3198:
case 3617:
case 3638:
case 2212:
case 2560:
case 1790:
case 908:
case 1956:
case 3481:
case 4090:
case 3000:
case 2105:
case 976:
case 3127:
case 2881:
case 1862:
case 3659:
case 832:
case 1842:
case 2975:
case 3735:
case 3078:
case 2876:
case 2021:
case 4022:
case 1320:
case 521:
case 1621:
case 1722:
case 2916:
case 1556:
case 879:
case 982:
case 2960:
case 2168:
case 3019:
case 187:
case 2230:
case 3154:
case 1855:
case 996:
case 4056:
case 709:
case 1013:
case 1024:
case 1756:
case 1376:
case 2613:
case 923:
case 3245:
case 2355:
case 2038:
case 3935:
case 1617:
case 3420:
case 275:
case 31:
case 3208:
case 143:
case 2716:
case 2129:
case 2892:
case 2401:
case 3111:
case 2342:
case 171:
case 1884:
case 3185:
case 544:
case 1315:
case 78:
case 2455:
case 247:
case 3722:
case 663:
case 387:
case 3556:
case 800:
case 1476:
case 3956:
case 3392:
case 2301:
case 1415:
case 1127:
case 2462:
case 1659:
case 2114:
case 1226:
case 3862:
case 717:
case 2059:
case 3466:
case 1014:
case 184:
case 3332:
case 2614:
case 698:
case 2623:
case 488:
case 186:
case 767:
case 2178:
case 3730:
case 2970:
case 583:
case 1795:
case 2027:
case 3005:
case 2908:
case 2866:
case 885:
case 2100:
case 3410:
case 2545:
case 3068:
case 1654:
case 1912:
case 1872:
case 2235:
case 2508:
case 3487:
case 2570:
case 669:
case 2809:
case 2832:
case 1180:
case 3611:
case 3595:
case 125:
case 3685:
case 3712:
case 3366:
case 1530:
case 824:
case 3346:
case 826:
case 2256:
case 2496:
case 1153:
case 945:
case 3387:
case 1240:
case 853:
case 415:
case 36:
case 221:
case 555:
case 1117:
case 352:
case 2803:
case 1216:
case 3309:
case 1588:
case 3403:
case 1807:
case 3995:
case 137:
case 3212:
case 1017:
case 2638:
case 932:
case 1355:
case 2522:
case 1038:
case 758:
case 876:
case 1624:
case 2198:
case 2013:
case 808:
case 2024:
case 1760:
case 4040:
case 1657:
case 4060:
case 1401:
case 1080:
case 461:
case 1342:
case 979:
case 4016:
case 1892:
case 243:
case 2653:
case 3148:
case 1619:
case 3230:
case 3168:
case 3575:
case 412:
case 56:
case 3021:
case 1295:
case 552:
case 3516:
case 3288:
case 2735:
case 2659:
case 233:
case 2226:
case 3881:
case 395:
case 1678:
case 3105:
case 2000:
case 1462:
case 3540:
case 1600:
case 1336:
case 1442:
case 3222:
case 1027:
case 1866:
case 1908:
case 1100:
case 1545:
case 1846:
case 1565:
case 2159:
case 1623:
case 1178:
case 1952:
case 49:
case 2023:
case 2014:
case 284:
case 707:
case 2325:
case 3472:
case 3450:
case 881:
case 3290:
case 1054:
case 4026:
case 1235:
case 1119:
case 2654:
case 3648:
case 1726:
case 1256:
case 1629:
case 2153:
case 389:
case 690:
case 249:
case 941:
case 3765:
case 225:
case 334:
case 3011:
case 1157:
case 587:
case 1098:
case 3489:
case 719:
case 3825:
case 2807:
case 1124:
case 2260:
case 3407:
case 2425:
case 30:
case 1803:
case 3350:
case 3651:
case 2889:
case 2138:
case 3770:
case 2930:
case 763:
case 1307:
case 670:
case 3809:
case 924:
case 2487:
case 1450:
case 3235:
case 1483:
case 3945:
case 2048:
case 3726:
case 3965:
case 2068:
case 3119:
case 144:
case 2410:
case 3866:
case 3908:
case 1222:
case 3027:
case 146:
case 2730:
case 3952:
case 3623:
case 2332:
case 2446:
case 829:
case 2466:
case 845:
case 1489:
case 1526:
case 4008:
case 1825:
case 2403:
case 252:
case 10:
case 3803:
case 321:
case 1752:
case 47:
case 1651:
case 1350:
case 3496:
case 720:
case 533:
case 2432:
case 2346:
case 292:
case 189:
case 835:
case 134:
case 2712:
case 2685:
case 2310:
case 2595:
case 4045:
case 1085:
case 3832:
case 4065:
case 3657:
case 183:
case 2270:
case 3342:
case 2492:
case 2111:
case 3401:
case 539:
case 3053:
case 2801:
case 3892:
case 586:
case 3129:
case 21:
case 616:
case 1212:
case 3017:
case 337:
case 2265:
case 614:
case 3775:
case 3355:
case 3613:
case 1975:
case 2842:
case 1384:
case 1516:
case 195:
case 1881:
case 3678:
case 2404:
case 968:
case 3462:
case 1105:
case 3804:
case 894:
case 2790:
case 3301:
case 2392:
case 322:
case 896:
case 3600:
case 549:
case 854:
case 291:
case 1940:
case 1148:
case 778:
case 856:
case 1168:
case 2320:
case 1916:
case 347:
case 2722:
case 1575:
case 155:
case 2058:
case 1079:
case 381:
case 3784:
case 1416:
case 3203:
case 2679:
case 3542:
case 568:
case 3091:
case 2002:
case 1701:
case 925:
case 3562:
case 419:
case 1440:
case 949:
case 310:
case 1602:
case 711:
case 1193:
case 599:
case 2618:
case 846:
case 2174:
case 129:
case 1633:
case 145:
case 2033:
case 780:
case 2197:
case 1475:
case 2682:
case 1661:
case 1360:
case 2715:
case 2592:
case 2781:
case 1762:
case 500:
case 3287:
case 1082:
case 939:
case 231:
case 3835:
case 1073:
case 984:
case 2094:
case 1890:
case 3209:
case 2128:
case 2920:
case 762:
case 1694:
case 3210:
case 4055:
case 135:
case 972:
case 3167:
case 1639:
case 889:
case 601:
case 407:
case 3147:
case 2039:
case 3901:
case 3246:
case 2356:
case 2:
case 3936:
case 3266:
case 1822:
case 2503:
case 3783:
case 2099:
case 585:
case 3204:
case 1699:
case 883:
case 1281:
case 2262:
case 3647:
case 1507:
case 242:
case 3772:
case 2932:
case 3996:
case 3370:
case 3352:
case 1194:
case 712:
case 2628:
case 933:
case 3596:
case 3686:
case 1028:
case 1907:
case 308:
case 227:
case 374:
case 2903:
case 1177:
case 2182:
case 2255:
case 1161:
case 1989:
case 1830:
case 376:
case 895:
case 2808:
case 1572:
case 2587:
case 2946:
case 232:
case 3292:
case 1097:
case 2236:
case 3470:
case 3049:
case 2093:
case 3789:
case 2870:
case 2852:
case 1074:
case 3408:
case 2118:
case 3069:
case 1693:
case 1326:
case 2674:
case 469:
case 602:
case 458:
case 3220:
case 2987:
case 1950:
case 413:
case 855:
case 2179:
case 943:
case 3006:
case 705:
case 3031:
case 1812:
case 2086:
case 3276:
case 573:
case 2925:
case 3907:
case 837:
case 875:
case 406:
case 2710:
case 1365:
case 404:
case 951:
case 259:
case 268:
case 3177:
case 1043:
case 1783:
case 2643:
case 1063:
case 1204:
case 3589:
case 4083:
case 991:
case 2071:
case 640:
case 1647:
case 3281:
case 4050:
case 4072:
case 1667:
case 3139:
case 3507:
case 2525:
case 160:
case 2191:
case 1465:
case 200:
case 2606:
case 3972:
case 2732:
case 1031:
case 847:
case 630:
case 3550:
case 1470:
case 91:
case 3133:
case 822:
case 3074:
case 1049:
case 3583:
case 3326:
case 1069:
case 1942:
case 1232:
case 3037:
case 285:
case 2915:
case 3018:
case 420:
case 2720:
case 345:
case 3633:
case 329:
case 157:
case 2289:
case 181:
case 2840:
case 2664:
case 1955:
case 4084:
case 1203:
case 1064:
case 2644:
case 2860:
case 2106:
case 3416:
case 2207:
case 3225:
case 2816:
case 3460:
case 2691:
case 110:
case 3602:
case 2390:
case 527:
case 3701:
case 2581:
case 2792:
case 1562:
case 3639:
case 1171:
case 224:
case 293:
case 3984:
case 1147:
case 3375:
case 1936:
case 2143:
case 1246:
case 3822:
case 1266:
case 3360:
case 218:
case 3661:
case 3742:
case 3134:
case 2490:
case 2250:
case 3890:
case 2704:
case 3584:
case 3495:
case 159:
case 466:
case 67:
case 3182:
case 327:
case 1710:
case 2365:
case 3532:
case 2596:
case 1430:
case 1086:
case 2895:
case 2352:
case 2370:
case 2667:
case 1047:
case 3242:
case 2671:
case 3932:
case 2750:
case 2647:
case 1826:
case 4087:
case 1643:
case 2063:
case 2204:
case 2308:
case 3099:
case 1663:
case 1488:
case 871:
case 2783:
case 4009:
case 3503:
case 282:
case 2031:
case 3546:
case 3865:
case 1164:
case 4032:
case 2006:
case 1631:
case 3845:
case 3987:
case 3510:
case 3395:
case 100:
case 2445:
case 2220:
case 1412:
case 2465:
case 1703:
case 3674:
case 2069:
case 3118:
case 3870:
case 2789:
case 1669:
case 3137:
case 2470:
case 2452:
case 3201:
case 332:
case 648:
case 833:
case 3725:
case 3587:
case 3966:
case 257:
case 4020:
case 90:
case 3197:
case 3033:
case 886:
case 1720:
case 1322:
case 2962:
case 185:
case 839:
case 3637:
case 1169:
case 2942:
case 3296:
case 1875:
case 3618:
case 1149:
case 2232:
case 210:
case 1976:
case 1515:
case 1390:
case 1581:
case 2562:
case 3002:
case 2542:
case 2203:
case 2064:
case 1860:
case 1644:
case 373:
case 3504:
case 2784:
case 872:
case 3335:
case 281:
case 3058:
case 2955:
case 1664:
case 1840:
case 1163:
case 2936:
case 3776:
case 3:
case 594:
case 1143:
case 730:
case 3992:
case 2901:
case 126:
case 3039:
case 3520:
case 428:
case 2171:
case 193:
case 3920:
case 3128:
case 3435:
case 3094:
case 1283:
case 414:
case 3061:
case 2287:
case 1250:
case 3077:
case 416:
case 554:
case 3682:
case 118:
case 3581:
case 2440:
case 574:
case 3390:
case 2602:
case 141:
case 2736:
case 612:
case 576:
case 2416:
case 2658:
case 3644:
case 173:
case 715:
case 3840:
case 403:
case 1335:
case 2079:
case 3289:
case 1504:
case 1033:
case 3322:
case 2633:
case 245:
case 582:
case 385:
case 2037:
case 3149:
case 1456:
case 1618:
case 2193:
case 3875:
case 1673:
case 852:
case 2073:
case 86:
case 3283:
case 1094:
case 1077:
case 2641:
case 3272:
case 2082:
case 2661:
case 2677:
case 1715:
case 1041:
case 1592:
case 4076:
case 1992:
case 1356:
case 1:
case 3143:
case 2755:
case 2375:
case 2984:
case 326:
case 467:
case 277:
case 235:
case 324:
case 788:
case 3525:
case 142:
case 1932:
case 2888:
case 3047:
case 947:
case 2215:
case 1262:
case 3067:
case 557:
case 3826:
case 3071:
case 2589:
case 399:
case 2426:
case 3643:
case 1503:
case 1099:
case 2161:
case 1255:
case 368:
case 359:
case 1495:
case 2634:
case 510:
case 922:
case 81:
case 3925:
case 2907:
case 1173:
case 3746:
case 2276:
case 2194:
case 1628:
case 2693:
case 1118:
case 223:
case 1674:
case 294:
case 2326:
case 2583:
case 3669:
case 1509:
case 3388:
case 2074:
case 2133:
case 1201:
case 2097:
case 975:
case 1236:
case 937:
case 2550:
case 1587:
case 1865:
case 3144:
case 1179:
case 1566:
case 2983:
case 254:
case 65:
case 887:
case 2519:
case 2108:
case 2900:
case 3418:
case 3656:
case 760:
case 3229:
case 653:
case 502:
case 618:
case 3075:
case 3738:
case 2978:
case 1444:
case 3921:
case 3016:
case 3060:
case 361:
case 1858:
case 3040:
case 3780:
case 624:
case 1538:
case 858:
case 776:
case 3337:
case 2524:
case 2957:
case 1188:
case 1839:
case 3318:
case 774:
case 2924:
case 898:
case 2913:
case 966:
case 2873:
case 2090:
case 782:
case 3473:
case 2882:
case 1344:
case 3379:
case 685:
case 2529:
case 1834:
case 3135:
case 2030:
case 1306:
case 1630:
case 148:
case 916:
case 446:
case 2828:
case 501:
case 3511:
case 914:
case 3886:
case 1998:
case 1190:
case 444:
case 3911:
case 1443:
case 3278:
case 3374:
case 2088:
case 3847:
case 2768:
case 1598:
case 3871:
case 819:
case 1463:
case 3867:
case 1122:
case 362:
case 3200:
case 2467:
case 35:
case 3397:
case 1899:
case 2447:
case 1065:
case 2012:
case 436:
case 1527:
case 1612:
case 311:
case 489:
case 699:
case 2523:
case 380:
case 2386:
case 1431:
case 3224:
case 2914:
case 2751:
case 2923:
case 659:
case 17:
case 2371:
case 1893:
case 3497:
case 2874:
case 1052:
case 2897:
case 1449:
case 710:
case 3156:
case 1343:
case 3474:
case 1008:
case 1554:
case 1374:
case 2626:
case 1847:
case 3443:
case 1278:
case 1754:
case 2393:
case 3349:
case 1026:
case 1871:
case 3688:
case 3463:
case 3598:
case 967:
case 162:
case 2843:
case 202:
case 15:
case 3834:
case 820:
case 3331:
case 3630:
case 19:
case 288:
case 1219:
case 735:
case 1585:
case 1727:
case 348:
case 2095:
case 52:
case 2434:
case 1886:
case 3190:
case 215:
case 37:
case 2869:
case 3052:
case 2849:
case 2399:
case 2253:
case 1474:
case 2568:
case 1156:
case 2905:
case 3469:
case 2217:
case 2831:
case 642:
case 2968:
case 3065:
case 338:
case 2334:
case 3612:
case 3785:
case 2140:
case 903:
case 2729:
case 3431:
case 1224:
case 1213:
case 729:
case 745:
case 3406:
case 2116:
case 2298:
case 1921:
case 2394:
case 1753:
case 1373:
case 2891:
case 6:
case 1016:
case 530:
case 3112:
case 161:
case 2402:
case 3491:
case 2640:
case 794:
case 1780:
case 909:
case 1382:
case 2377:
case 3833:
case 98:
case 1437:
case 878:
case 2713:
case 1418:
case 1656:
case 631:
case 2675:
case 1738:
case 1075:
case 2433:
case 3959:
case 540:
case 3391:
case 422:
case 3580:
case 2461:
case 1482:
case 3938:
case 2035:
case 3344:
case 2358:
case 1759:
case 3917:
case 1635:
case 4059:
case 3841:
case 3268:
case 3205:
case 2227:
case 3538:
case 917:
case 3721:
case 2439:
case 3953:
case 3622:
case 112:
case 447:
case 2333:
case 3188:
case 673:
case 2126:
case 1318:
case 907:
case 656:
case 2397:
case 25:
case 3471:
case 1863:
case 2200:
case 654:
case 472:
case 2867:
case 2026:
case 3088:
case 2985:
case 2278:
case 731:
case 2754:
case 2911:
case 1434:
case 2886:
case 439:
case 3828:
case 2695:
case 2727:
case 2585:
case 486:
case 2428:
case 1951:
case 188:
case 2219:
case 1714:
case 3486:
case 2135:
case 484:
case 623:
case 4023:
case 1548:
case 814:
case 1253:
case 1568:
case 816:
case 1493:
case 741:
case 3897:
case 2257:
case 1280:
case 3347:
case 1175:
case 3371:
case 773:
case 3652:
case 3367:
case 3751:
case 3914:
case 2224:
case 1729:
case 2213:
case 3386:
case 211:
case 340:
case 1334:
case 919:
case 1238:
case 1505:
case 1948:
case 3665:
case 449:
case 1831:
case 1217:
case 3645:
case 1806:
case 2780:
case 1757:
case 1361:
case 1660:
case 677:
case 969:
case 32:
case 2060:
case 3165:
case 1640:
case 1891:
case 3578:
case 913:
case 2479:
case 1394:
case 1616:
case 2373:
case 3170:
case 3285:
case 1339:
case 3211:
case 1433:
case 1675:
case 205:
case 1713:
case 2229:
case 3108:
case 998:
case 864:
case 4078:
case 1778:
case 742:
case 1035:
case 2379:
case 1358:
case 433:
case 3882:
case 2759:
case 645:
case 4000:
case 538:
case 3924:
case 1441:
case 3557:
case 1700:
case 727:
case 2223:
case 3957:
case 3524:
case 2337:
case 3513:
case 1227:
case 2959:
case 3433:
case 1978:
case 365:
case 1285:
case 41:
case 55:
case 3713:
case 2833:
case 1519:
case 890:
case 3844:
case 1879:
case 301:
case 3640:
case 1919:
case 2112:
case 1578:
case 2464:
case 2559:
case 2802:
case 3616:
case 3394:
case 3719:
case 491:
case 697:
case 768:
case 2839:
case 2188:
case 2953:
case 1022:
case 3227:
case 2538:
case 580:
case 2917:
case 1882:
case 2861:
case 2248:
case 2877:
case 3494:
case 3778:
case 2130:
case 3477:
case 1090:
case 978:
case 2894:
case 2580:
case 3700:
case 88:
case 2391:
case 1924:
case 1913:
case 657:
case 511:
case 4005:
case 2190:
case 2998:
case 561:
case 1221:
case 248:
case 3714:
case 388:
case 724:
case 793:
case 2630:
case 2331:
case 726:
case 1486:
case 1030:
case 3551:
case 660:
case 3843:
case 2122:
case 1467:
case 1929:
case 3863:
case 2369:
case 1768:
case 2598:
case 2463:
case 2688:
case 2349:
case 4068:
case 3259:
case 3499:
case 3116:
case 682:
case 2431:
case 1523:
case 1386:
case 2045:
case 2711:
case 3140:
case 2785:
case 3505:
case 2065:
case 1645:
case 1012:
case 3905:
case 3548:
case 2363:
case 3493:
case 3568:
case 3399:
case 608:
case 1347:
case 3175:
case 1874:
case 452:
case 2070:
case 1914:
case 3869:
case 1751:
case 920:
case 512:
case 315:
case 46:
case 676:
case 1670:
case 1367:
case 1371:
case 1329:
case 1414:
case 2805:
case 2239:
case 364:
case 1734:
case 427:
case 2949:
case 4034:
case 1162:
case 2181:
case 150:
case 2115:
case 2427:
case 3593:
case 2549:
case 3468:
case 3009:
case 2294:
case 1799:
case 2454:
case 1273:
case 3747:
case 3087:
case 2848:
case 1155:
case 2261:
case 3854:
case 2277:
case 117:
case 442:
case 2241:
case 2906:
case 3650:
case 2943:
case 1136:
case 258:
case 370:
case 3999:
case 479:
case 109:
case 1971:
case 213:
case 1586:
case 1323:
case 1947:
case 1885:
case 3032:
case 2625:
case 3898:
case 1571:
case 2202:
case 3451:
case 1547:
case 3003:
case 3689:
case 4093:
case 3599:
case 2543:
case 2774:
case 3934:
case 771:
case 1793:
case 2354:
case 3817:
case 1424:
case 3231:
case 3206:
case 1319:
case 725:
case 3189:
case 3838:
case 3977:
case 3961:
case 2417:
case 3539:
case 3684:
case 103:
case 3594:
case 980:
case 3269:
case 1196:
case 2779:
case 3939:
case 2453:
case 1378:
case 2359:
case 2293:
case 1758:
case 504:
case 1457:
case 3853:
case 2480:
case 578:
case 647:
case 1636:
case 3561:
case 1300:
case 911:
case 54:
case 3150:
case 3958:
case 786:
case 2317:
case 3533:
case 328:
case 3902:
case 2991:
case 4:
case 1313:
case 1228:
case 1419:
case 1821:
case 1076:
case 3183:
case 1357:
case 316:
case 1777:
case 2615:
case 637:
case 314:
case 1642:
case 431:
case 2062:
case 1081:
case 1400:
case 4061:
case 4077:
case 1741:
case 2544:
case 4094:
case 3004:
case 2299:
case 1478:
case 3933:
case 2764:
case 1594:
case 303:
case 752:
case 2573:
case 1249:
case 3758:
case 76:
case 3378:
case 3196:
case 802:
case 1939:
case 3297:
case 938:
case 3457:
case 3601:
case 655:
case 3300:
case 3636:
case 1206:
case 3319:
case 3413:
case 1231:
case 2982:
case 1977:
case 1189:
case 3733:
case 220:
case 1994:
case 1107:
case 2824:
case 2813:
case 1020:
case 418:
case 1859:
case 1502:
case 948:
case 2878:
case 3662:
case 116:
case 3015:
case 3400:
case 569:
case 2918:
case 2110:
case 2267:
case 3081:
case 114:
case 3642:
case 2166:
case 2800:
case 815:
case 1004:
case 1558:
case 2604:
case 3794:
case 1150:
case 367:
case 493:
case 2187:
case 2421:
case 3655:
case 2819:
case 1533:
case 426:
case 3419:
case 3228:
case 3324:
case 598:
case 3821:
case 1468:
case 2763:
case 1448:
case 689:
case 2083:
case 499:
case 390:
case 3799:
case 3282:
case 3155:
case 4067:
case 4071:
case 317:
case 1771:
case 563:
case 1066:
case 3423:
case 2646:
case 4086:
case 1046:
case 1786:
case 791:
case 1993:
case 519:
case 2610:
case 2311:
case 164:
case 3142:
case 2974:
case 2385:
case 60:
case 2814:
case 2823:
case 350:
case 278:
case 787:
case 166:
case 204:
case 3567:
case 3571:
case 1898:
case 3986:
case 1607:
case 644:
case 1291:
case 646:
case 1368:
case 1599:
case 2769:
case 1244:
case 2749:
case 3279:
case 2603:
case 2089:
case 3136:
case 1999:
case 1305:
case 2829:
case 3323:
case 3586:
case 3314:
case 3429:
case 3696:
case 1032:
case 3237:
case 3885:
case 1184:
case 2561:
case 1582:
case 410:
case 4091:
case 3036:
case 2853:
case 2541:
case 363:
case 687:
case 3359:
case 4064:
case 1084:
case 3453:
case 85:
case 2594:
case 4044:
case 70:
case 481:
case 862:
case 691:
case 2684:
case 2539:
case 1824:
case 2020:
case 789:
case 1813:
case 1973:
case 1620:
case 2994:
case 120:
case 2961:
case 2206:
case 3718:
case 1103:
case 2933:
case 1166:
case 1800:
case 2004:
case 2558:
case 3544:
case 1918:
case 930:
case 1110:
case 3062:
case 1267:
case 1271:
case 2859:
case 3591:
case 3782:
case 1937:
case 3615:
case 1878:
case 811:
case 746:
case 1286:
case 744:
case 3676:
case 2902:
case 3964:
case 307:
case 2533:
case 880:
case 2958:
case 3055:
case 1687:
case 2650:
case 2771:
case 13:
case 3277:
case 3848:
case 3398:
case 482:
case 2009:
case 692:
case 2683:
case 4043:
case 3549:
case 1763:
case 3427:
case 3115:
case 2010:
case 3969:
case 66:
case 266:
case 476:
case 3181:
case 104:
case 2993:
case 3949:
case 1311:
case 474:
case 1385:
case 503:
case 1666:
case 1104:
case 2827:
case 3563:
case 2348:
case 3498:
case 3543:
case 2264:
case 398:
case 2689:
case 2003:
case 783:
case 3202:
case 1007:
case 14:
case 1120:
case 2898:
case 3625:
case 2607:
case 2184:
case 4031:
case 1706:
case 313:
case 2305:
case 2534:
case 1829:
case 3233:
case 369:
case 1411:
case 92:
case 270:
case 1485:
case 3943:
case 2162:
case 378:
case 1969:
case 3814:
case 1427:
case 306:
case 1239:
case 3610:
case 4028:
case 3666:
case 3997:
case 747:
case 2329:
case 3646:
case 2414:
case 2423:
case 1931:
case 1906:
case 1241:
case 217:
case 1848:
case 1277:
case 649:
case 3743:
case 1294:
case 1176:
case 3083:
case 1454:
case 3763:
case 1549:
case 3574:
case 1096:
case 2237:
case 2811:
case 2967:
case 2696:
case 3731:
case 2429:
case 2314:
case 3706:
case 113:
case 775:
case 2218:
case 1963:
case 3829:
case 516:
case 901:
case 454:
case 209:
case 672:
case 514:
case 1943:
case 169:
case 3192:
case 1233:
case 1498:
case 2279:
case 1258:
case 1354:
case 2793:
case 1563:
case 4074:
case 3769:
case 1543:
case 34:
case 3120:
case 2025:
case 965:
case 1625:
case 639:
case 1417:
case 1125:
case 3321:
case 2733:
case 429:
case 633:
case 1737:
case 2424:
case 1718:
case 3582:
case 2300:
case 3692:
case 2196:
case 2378:
case 3857:
case 721:
case 1359:
case 3132:
case 2758:
case 4079:
case 3573:
case 203:
case 3286:
case 2821:
case 2076:
case 643:
case 1991:
case 2313:
case 902:
case 671:
case 3819:
case 107:
case 2655:
case 1964:
case 1234:
case 435:
case 1338:
case 3187:
case 1353:
case 1299:
case 1773:
case 3146:
case 3800:
case 87:
case 3166:
case 4073:
case 2081:
case 570:
case 3267:
case 3110:
case 4082:
case 2400:
case 2741:
case 1681:
case 2357:
case 1380:
case 2777:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756004401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,];
var gg_b = "1756004401/";

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
