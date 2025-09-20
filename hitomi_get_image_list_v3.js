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
case 3189:
case 2789:
case 2388:
case 619:
case 2389:
case 2776:
case 106:
case 1221:
case 1227:
case 3188:
case 2422:
case 3076:
case 2661:
case 3089:
case 837:
case 609:
case 3591:
case 652:
case 3027:
case 2550:
case 3942:
case 1289:
case 2321:
case 1276:
case 2721:
case 3127:
case 241:
case 4075:
case 2945:
case 3504:
case 393:
case 1534:
case 781:
case 1615:
case 159:
case 2767:
case 867:
case 1112:
case 656:
case 3067:
case 3061:
case 998:
case 1273:
case 1012:
case 2689:
case 14:
case 1852:
case 2462:
case 2621:
case 2373:
case 102:
case 1261:
case 2470:
case 1267:
case 3212:
case 2215:
case 1186:
case 3549:
case 1179:
case 1079:
case 3465:
case 1078:
case 3286:
case 1715:
case 3907:
case 3278:
case 2802:
case 3980:
case 1984:
case 746:
case 1445:
case 2655:
case 358:
case 4095:
case 1568:
case 1569:
case 2883:
case 286:
case 3241:
case 3526:
case 617:
case 1922:
case 3196:
case 3514:
case 1147:
case 1528:
case 1529:
case 70:
case 3298:
case 2886:
case 628:
case 3132:
case 3299:
case 1102:
case 1199:
case 1581:
case 3155:
case 2431:
case 2755:
case 2437:
case 1098:
case 2355:
case 3193:
case 2793:
case 2152:
case 1705:
case 2812:
case 3093:
case 2490:
case 234:
case 3523:
case 157:
case 3457:
case 3451:
case 314:
case 29:
case 3335:
case 282:
case 4056:
case 1632:
case 140:
case 547:
case 1655:
case 701:
case 785:
case 4003:
case 1883:
case 711:
case 668:
case 291:
case 3876:
case 2296:
case 3442:
case 3888:
case 1796:
case 2047:
case 2041:
case 3827:
case 2922:
case 2510:
case 3341:
case 3347:
case 2147:
case 164:
case 2255:
case 1879:
case 1732:
case 1878:
case 1332:
case 2199:
case 2102:
case 678:
case 3398:
case 3302:
case 3399:
case 3798:
case 638:
case 1355:
case 2098:
case 1755:
case 1431:
case 2099:
case 2587:
case 2581:
case 3005:
case 2970:
case 1793:
case 2305:
case 1812:
case 2962:
case 4040:
case 3235:
case 3647:
case 19:
case 174:
case 948:
case 1205:
case 3252:
case 1696:
case 3873:
case 2227:
case 2221:
case 206:
case 1776:
case 700:
case 1389:
case 2546:
case 1388:
case 1376:
case 216:
case 376:
case 1661:
case 1667:
case 710:
case 1422:
case 1841:
case 141:
case 2288:
case 4064:
case 362:
case 1327:
case 1321:
case 3554:
case 2500:
case 453:
case 3679:
case 3783:
case 2183:
case 290:
case 2615:
case 3383:
case 2534:
case 549:
case 2083:
case 1767:
case 4024:
case 259:
case 2012:
case 3957:
case 3951:
case 1676:
case 2990:
case 1773:
case 212:
case 372:
case 3411:
case 3417:
case 1470:
case 2261:
case 2835:
case 3386:
case 2178:
case 2937:
case 808:
case 2186:
case 1215:
case 78:
case 3379:
case 818:
case 792:
case 2079:
case 3015:
case 2315:
case 1802:
case 3683:
case 3115:
case 2715:
case 2434:
case 1133:
case 2606:
case 1203:
case 3580:
case 559:
case 2295:
case 3875:
case 502:
case 3003:
case 1969:
case 3358:
case 443:
case 3759:
case 2159:
case 2158:
case 3758:
case 3233:
case 922:
case 3359:
case 778:
case 3963:
case 1008:
case 1450:
case 1092:
case 738:
case 1009:
case 2640:
case 1109:
case 3454:
case 1192:
case 1238:
case 3292:
case 3209:
case 3139:
case 2739:
case 2446:
case 3914:
case 3138:
case 2738:
case 2339:
case 3208:
case 2860:
case 516:
case 926:
case 3106:
case 1928:
case 1981:
case 1206:
case 2603:
case 1695:
case 789:
case 1036:
case 3517:
case 1653:
case 601:
case 1562:
case 2256:
case 2443:
case 3574:
case 4005:
case 1885:
case 1044:
case 2340:
case 3923:
case 1:
case 590:
case 2639:
case 3013:
case 3272:
case 2892:
case 2808:
case 476:
case 3997:
case 3853:
case 1264:
case 2624:
case 3685:
case 3260:
case 3113:
case 1160:
case 68:
case 2616:
case 1213:
case 1060:
case 2950:
case 692:
case 861:
case 2364:
case 82:
case 3542:
case 3164:
case 2764:
case 1375:
case 524:
case 914:
case 3219:
case 3904:
case 2545:
case 3218:
case 904:
case 2682:
case 1018:
case 1019:
case 1934:
case 1119:
case 2275:
case 3895:
case 557:
case 150:
case 1216:
case 2324:
case 247:
case 958:
case 3124:
case 2724:
case 199:
case 466:
case 1120:
case 831:
case 3594:
case 3016:
case 3220:
case 2716:
case 1943:
case 2316:
case 1224:
case 1590:
case 1675:
case 2481:
case 2487:
case 1537:
case 787:
case 3507:
case 2428:
case 3082:
case 883:
case 2836:
case 610:
case 4076:
case 894:
case 1808:
case 87:
case 1892:
case 1809:
case 4089:
case 1410:
case 1713:
case 3477:
case 3414:
case 1313:
case 2213:
case 1616:
case 3360:
case 426:
case 3838:
case 1764:
case 2172:
case 3839:
case 3175:
case 1469:
case 1468:
case 663:
case 2900:
case 3075:
case 2858:
case 582:
case 3803:
case 2018:
case 250:
case 3718:
case 534:
case 59:
case 3719:
case 2934:
case 422:
case 1724:
case 3551:
case 1613:
case 147:
case 540:
case 1185:
case 1324:
case 943:
case 3423:
case 3840:
case 615:
case 2120:
case 3720:
case 3466:
case 1844:
case 86:
case 3672:
case 2590:
case 2224:
case 2943:
case 3660:
case 3285:
case 673:
case 752:
case 2282:
case 633:
case 2537:
case 1487:
case 1429:
case 3618:
case 1782:
case 709:
case 1836:
case 2203:
case 3525:
case 1606:
case 972:
case 3259:
case 3333:
case 1295:
case 3430:
case 2033:
case 3195:
case 966:
case 2395:
case 1819:
case 1400:
case 1703:
case 3636:
case 458:
case 1159:
case 3095:
case 3404:
case 1303:
case 1640:
case 3813:
case 2009:
case 2008:
case 251:
case 3644:
case 3153:
case 3308:
case 2239:
case 3792:
case 2109:
case 3709:
case 2656:
case 3864:
case 1446:
case 60:
case 1739:
case 1872:
case 1860:
case 2910:
case 728:
case 2522:
case 2929:
case 4032:
case 962:
case 2928:
case 1706:
case 680:
case 3882:
case 3449:
case 3736:
case 541:
case 2981:
case 2987:
case 976:
case 2036:
case 1820:
case 3344:
case 3692:
case 1256:
case 2653:
case 2144:
case 3744:
case 1340:
case 2570:
case 3056:
case 404:
case 2240:
case 149:
case 835:
case 15:
case 3156:
case 414:
case 1638:
case 1038:
case 63:
case 2497:
case 694:
case 1039:
case 1209:
case 1139:
case 1138:
case 3656:
case 1454:
case 2792:
case 3192:
case 3109:
case 2709:
case 2308:
case 3239:
case 2309:
case 2153:
case 486:
case 3753:
case 2644:
case 2392:
case 3238:
case 351:
case 2708:
case 3108:
case 3008:
case 1963:
case 3009:
case 2813:
case 94:
case 2095:
case 2404:
case 1758:
case 198:
case 1103:
case 2636:
case 863:
case 3395:
case 959:
case 2195:
case 1580:
case 902:
case 3033:
case 2430:
case 1875:
case 2333:
case 3584:
case 440:
case 522:
case 2258:
case 2525:
case 474:
case 49:
case 1923:
case 805:
case 2156:
case 3:
case 434:
case 3356:
case 4035:
case 66:
case 2816:
case 3240:
case 2056:
case 482:
case 3044:
case 2824:
case 3144:
case 1517:
case 1511:
case 2608:
case 4052:
case 2344:
case 1040:
case 3695:
case 873:
case 2565:
case 916:
case 3036:
case 3987:
case 3981:
case 3136:
case 2449:
case 2448:
case 2882:
case 1659:
case 2336:
case 2633:
case 1106:
case 1236:
case 737:
case 514:
case 3119:
case 2719:
case 769:
case 2318:
case 350:
case 2718:
case 3859:
case 1930:
case 3019:
case 2803:
case 504:
case 3858:
case 1904:
case 1218:
case 3060:
case 3172:
case 2772:
case 2463:
case 2372:
case 2954:
case 2760:
case 2426:
case 3072:
case 80:
case 2414:
case 3946:
case 1260:
case 2471:
case 1685:
case 2620:
case 81:
case 3264:
case 1991:
case 1507:
case 739:
case 945:
case 3675:
case 3531:
case 603:
case 880:
case 1948:
case 2806:
case 620:
case 3282:
case 2660:
case 3943:
case 1856:
case 1016:
case 1594:
case 1220:
case 2672:
case 399:
case 635:
case 2466:
case 3120:
case 2423:
case 3216:
case 1385:
case 1319:
case 1719:
case 4083:
case 3682:
case 982:
case 3833:
case 3468:
case 1075:
case 148:
case 2218:
case 253:
case 1175:
case 3545:
case 1372:
case 3764:
case 2164:
case 2542:
case 3364:
case 1772:
case 1426:
case 2064:
case 1360:
case 2685:
case 1471:
case 3313:
case 2853:
case 416:
case 2997:
case 644:
case 3808:
case 1620:
case 3892:
case 3410:
case 2182:
case 670:
case 3382:
case 3836:
case 2501:
case 964:
case 2948:
case 2949:
case 3481:
case 4079:
case 4078:
case 885:
case 940:
case 1660:
case 625:
case 811:
case 2220:
case 2016:
case 2594:
case 3664:
case 402:
case 1720:
case 3085:
case 1466:
case 459:
case 3844:
case 1320:
case 2024:
case 2124:
case 2385:
case 3724:
case 44:
case 2785:
case 3860:
case 1497:
case 4047:
case 4041:
case 2038:
case 2977:
case 2138:
case 3253:
case 2139:
case 3338:
case 2209:
case 3872:
case 1708:
case 88:
case 1153:
case 1309:
case 2454:
case 62:
case 1813:
case 2963:
case 718:
case 661:
case 892:
case 2359:
case 3703:
case 298:
case 3303:
case 1404:
case 3159:
case 2759:
case 2358:
case 532:
case 1195:
case 3818:
case 2003:
case 3819:
case 584:
case 3058:
case 3295:
case 2875:
case 566:
case 1733:
case 3606:
case 1259:
case 3434:
case 3639:
case 1156:
case 896:
case 2923:
case 349:
case 3740:
case 2040:
case 2574:
case 3443:
case 1692:
case 1565:
case 727:
case 4002:
case 1336:
case 1449:
case 995:
case 3306:
case 941:
case 2106:
case 1633:
case 810:
case 823:
case 754:
case 2480:
case 3083:
case 3534:
case 1425:
case 2679:
case 9:
case 997:
case 725:
case 868:
case 2554:
case 262:
case 1127:
case 1027:
case 126:
case 1942:
case 770:
case 1088:
case 730:
case 236:
case 3546:
case 1176:
case 3221:
case 3227:
case 306:
case 1907:
case 1901:
case 3715:
case 1286:
case 951:
case 1278:
case 3315:
case 744:
case 2015:
case 3086:
case 2379:
case 3178:
case 1549:
case 3937:
case 2386:
case 3835:
case 3261:
case 3267:
case 302:
case 1073:
case 312:
case 1173:
case 232:
case 3990:
case 122:
case 3273:
case 2951:
case 2893:
case 2957:
case 359:
case 2312:
case 1805:
case 1161:
case 1167:
case 760:
case 266:
case 783:
case 2747:
case 3147:
case 3141:
case 2741:
case 1096:
case 1514:
case 345:
case 1635:
case 3922:
case 3041:
case 3047:
case 1652:
case 627:
case 1563:
case 2889:
case 2442:
case 2876:
case 3296:
case 887:
case 1247:
case 3605:
case 2602:
case 2699:
case 3569:
case 3445:
case 243:
case 158:
case 3984:
case 2925:
case 3293:
case 1566:
case 2252:
case 45:
case 1457:
case 1735:
case 1451:
case 357:
case 114:
case 2647:
case 1335:
case 1917:
case 3705:
case 2105:
case 950:
case 324:
case 3305:
case 1093:
case 2867:
case 1974:
case 2861:
case 1193:
case 1352:
case 2005:
case 3970:
case 3581:
case 608:
case 3099:
case 3198:
case 2302:
case 72:
case 3232:
case 3199:
case 2702:
case 1298:
case 1132:
case 1202:
case 1299:
case 1032:
case 2407:
case 3528:
case 3529:
case 1341:
case 2635:
case 2571:
case 1747:
case 3796:
case 809:
case 3396:
case 1876:
case 1889:
case 852:
case 2241:
case 386:
case 3883:
case 258:
case 3655:
case 947:
case 143:
case 340:
case 1925:
case 3035:
case 382:
case 497:
case 2335:
case 374:
case 214:
case 2735:
case 2457:
case 3205:
case 334:
case 1861:
case 2093:
case 1235:
case 548:
case 2917:
case 2911:
case 3152:
case 3393:
case 2352:
case 3755:
case 3431:
case 2055:
case 1702:
case 1799:
case 1398:
case 1965:
case 2815:
case 1399:
case 1798:
case 3879:
case 3732:
case 2132:
case 3886:
case 794:
case 3332:
case 2298:
case 3878:
case 1407:
case 735:
case 2530:
case 4019:
case 2425:
case 450:
case 3484:
case 1686:
case 95:
case 3727:
case 2127:
case 703:
case 162:
case 1896:
case 3327:
case 4060:
case 226:
case 2021:
case 2027:
case 720:
case 3847:
case 3841:
case 2591:
case 2597:
case 3661:
case 807:
case 639:
case 2188:
case 3389:
case 395:
case 2176:
case 3376:
case 2189:
case 688:
case 2279:
case 3802:
case 2278:
case 3898:
case 1115:
case 2901:
case 828:
case 1855:
case 2465:
case 1378:
case 1832:
case 1386:
case 1779:
case 1778:
case 1786:
case 2212:
case 3373:
case 132:
case 2173:
case 3462:
case 3773:
case 3627:
case 1411:
case 172:
case 669:
case 4020:
case 222:
case 3676:
case 2061:
case 2067:
case 166:
case 2167:
case 499:
case 2805:
case 3367:
case 2992:
case 2214:
case 3897:
case 3953:
case 1460:
case 2277:
case 2271:
case 960:
case 1846:
case 1472:
case 3464:
case 1666:
case 3710:
case 2110:
case 3310:
case 682:
case 1371:
case 2541:
case 1777:
case 1623:
case 3413:
case 3804:
case 1419:
case 1800:
case 2933:
case 3628:
case 228:
case 1418:
case 944:
case 3830:
case 2069:
case 138:
case 1959:
case 178:
case 3369:
case 751:
case 3768:
case 3368:
case 4011:
case 4017:
case 2266:
case 573:
case 2944:
case 826:
case 1626:
case 970:
case 1723:
case 47:
case 1671:
case 494:
case 1535:
case 3956:
case 3424:
case 1323:
case 337:
case 1366:
case 1420:
case 1843:
case 925:
case 3328:
case 2129:
case 581:
case 2029:
case 2028:
case 797:
case 505:
case 640:
case 3482:
case 2598:
case 3669:
case 893:
case 3668:
case 2599:
case 2181:
case 3781:
case 3787:
case 413:
case 1648:
case 2000:
case 542:
case 3975:
case 1649:
case 92:
case 2919:
case 3734:
case 1868:
case 2918:
case 961:
case 1730:
case 1330:
case 475:
case 1254:
case 804:
case 435:
case 750:
case 1397:
case 1391:
case 369:
case 1797:
case 1791:
case 2046:
case 1150:
case 2972:
case 2754:
case 3154:
case 3643:
case 1810:
case 4042:
case 2960:
case 2586:
case 2578:
case 1436:
case 1749:
case 1748:
case 1829:
case 858:
case 4007:
case 1887:
case 1881:
case 3406:
case 2248:
case 379:
case 1697:
case 2920:
case 209:
case 465:
case 3646:
case 1444:
case 2143:
case 580:
case 3823:
case 641:
case 3004:
case 3495:
case 1100:
case 2649:
case 2304:
case 93:
case 2704:
case 2648:
case 3234:
case 3030:
case 1583:
case 2868:
case 1919:
case 1034:
case 2730:
case 3200:
case 3913:
case 3588:
case 3576:
case 3097:
case 1146:
case 3589:
case 64:
case 1046:
case 2791:
case 2391:
case 2397:
case 156:
case 3350:
case 1297:
case 3750:
case 3527:
case 2050:
case 602:
case 1354:
case 1960:
case 3246:
case 2409:
case 2604:
case 1579:
case 511:
case 1586:
case 843:
case 2828:
case 2630:
case 3982:
case 747:
case 690:
case 2881:
case 2887:
case 1248:
case 1249:
case 1512:
case 1920:
case 2697:
case 4057:
case 4051:
case 119:
case 3924:
case 444:
case 1654:
case 1143:
case 152:
case 3916:
case 2444:
case 287:
case 329:
case 471:
case 2326:
case 1909:
case 624:
case 832:
case 2763:
case 2472:
case 3026:
case 872:
case 3210:
case 2846:
case 3596:
case 1263:
case 3077:
case 2666:
case 657:
case 866:
case 1226:
case 2314:
case 2623:
case 3938:
case 2771:
case 3171:
case 3177:
case 1010:
case 2777:
case 3939:
case 1547:
case 2377:
case 3269:
case 2418:
case 2419:
case 318:
case 1068:
case 965:
case 592:
case 238:
case 1069:
case 691:
case 2552:
case 862:
case 1266:
case 3593:
case 461:
case 2626:
case 1223:
case 42:
case 2323:
case 354:
case 876:
case 117:
case 920:
case 2671:
case 3123:
case 1485:
case 2843:
case 2420:
case 107:
case 645:
case 3023:
case 903:
case 1129:
case 3287:
case 1128:
case 3281:
case 3906:
case 75:
case 1502:
case 1599:
case 1087:
case 1598:
case 4065:
case 268:
case 3228:
case 975:
case 3880:
case 937:
case 3575:
case 589:
case 3631:
case 1045:
case 706:
case 200:
case 4030:
case 330:
case 716:
case 1601:
case 370:
case 2518:
case 647:
case 105:
case 790:
case 296:
case 181:
case 2242:
case 1447:
case 4091:
case 2657:
case 325:
case 568:
case 712:
case 1499:
case 2037:
case 1402:
case 2031:
case 2201:
case 2207:
case 2986:
case 3731:
case 2978:
case 702:
case 2979:
case 3915:
case 1707:
case 1301:
case 759:
case 1585:
case 2757:
case 2751:
case 2435:
case 344:
case 1870:
case 2357:
case 2351:
case 1862:
case 3811:
case 3874:
case 2912:
case 3051:
case 1642:
case 1394:
case 1794:
case 2452:
case 429:
case 28:
case 578:
case 1251:
case 3390:
case 3670:
case 2592:
case 2509:
case 331:
case 1617:
case 3553:
case 211:
case 3427:
case 2941:
case 2022:
case 3476:
case 4071:
case 3322:
case 3784:
case 2325:
case 2184:
case 3125:
case 2845:
case 3025:
case 1380:
case 383:
case 2665:
case 791:
case 180:
case 587:
case 408:
case 1559:
case 1558:
case 3905:
case 2544:
case 142:
case 1717:
case 2070:
case 1711:
case 1374:
case 2162:
case 361:
case 1317:
case 1774:
case 3362:
case 427:
case 988:
case 3370:
case 2170:
case 2062:
case 1890:
case 3622:
case 3467:
case 2217:
case 454:
case 2211:
case 3556:
case 1935:
case 11:
case 4066:
case 1831:
case 3684:
case 3065:
case 1486:
case 1478:
case 2365:
case 2998:
case 3801:
case 853:
case 3165:
case 2765:
case 2902:
case 2999:
case 185:
case 3222:
case 1508:
case 111:
case 2611:
case 2674:
case 321:
case 1947:
case 1941:
case 36:
case 246:
case 697:
case 1122:
case 2483:
case 1533:
case 3080:
case 1325:
case 509:
case 1084:
case 764:
case 519:
case 3180:
case 786:
case 1665:
case 2225:
case 3503:
case 552:
case 3284:
case 2559:
case 2311:
case 2374:
case 2711:
case 2717:
case 651:
case 3017:
case 3011:
case 3540:
case 3851:
case 2890:
case 477:
case 394:
case 2935:
case 437:
case 1211:
case 1217:
case 2680:
case 79:
case 2831:
case 3415:
case 3955:
case 2478:
case 1999:
case 1902:
case 1998:
case 1365:
case 3345:
case 313:
case 273:
case 2145:
case 3745:
case 233:
case 2045:
case 3825:
case 741:
case 303:
case 100:
case 488:
case 517:
case 123:
case 2601:
case 1242:
case 469:
case 3976:
case 375:
case 699:
case 3989:
case 3921:
case 3927:
case 2822:
case 3564:
case 2742:
case 2694:
case 1031:
case 1037:
case 2498:
case 3645:
case 1978:
case 1986:
case 1207:
case 1201:
case 3865:
case 2307:
case 2301:
case 3237:
case 3231:
case 3107:
case 2701:
case 3101:
case 3582:
case 650:
case 3007:
case 1351:
case 3290:
case 2870:
case 3524:
case 918:
case 908:
case 1912:
case 479:
case 439:
case 18:
case 1452:
case 3194:
case 2794:
case 1090:
case 2642:
case 1190:
case 2251:
case 3094:
case 3405:
case 192:
case 3342:
case 2564:
case 125:
case 2921:
case 3447:
case 3441:
case 968:
case 2988:
case 2513:
case 305:
case 8:
case 1245:
case 130:
case 3601:
case 989:
case 3884:
case 2825:
case 2745:
case 3145:
case 726:
case 373:
case 213:
case 220:
case 2405:
case 3251:
case 452:
case 1493:
case 4043:
case 3794:
case 2194:
case 3862:
case 1811:
case 419:
case 1051:
case 1057:
case 409:
case 1157:
case 938:
case 2290:
case 2007:
case 1432:
case 2001:
case 722:
case 2582:
case 2101:
case 160:
case 2231:
case 3301:
case 3307:
case 2865:
case 1731:
case 1337:
case 3498:
case 648:
case 2284:
case 3559:
case 4069:
case 380:
case 2180:
case 987:
case 183:
case 428:
case 1784:
case 2080:
case 346:
case 1322:
case 2996:
case 1489:
case 2539:
case 2538:
case 221:
case 131:
case 3674:
case 3617:
case 1421:
case 1427:
case 171:
case 4081:
case 1807:
case 1065:
case 3486:
case 2955:
case 2506:
case 4028:
case 3831:
case 3265:
case 4029:
case 23:
case 1556:
case 31:
case 417:
case 2270:
case 1467:
case 3890:
case 1622:
case 3412:
case 2857:
case 2540:
case 3952:
case 2011:
case 1770:
case 2017:
case 3717:
case 2111:
case 3711:
case 342:
case 1762:
case 1473:
case 161:
case 3311:
case 2174:
case 1503:
case 438:
case 478:
case 1284:
case 909:
case 919:
case 529:
case 3665:
case 3280:
case 283:
case 3084:
case 2025:
case 3845:
case 2125:
case 2384:
case 1080:
case 3533:
case 3325:
case 3184:
case 2784:
case 1996:
case 847:
case 2722:
case 2488:
case 2476:
case 2489:
case 16:
case 2662:
case 311:
case 2427:
case 2421:
case 3509:
case 385:
case 743:
case 3999:
case 2165:
case 3765:
case 698:
case 2807:
case 468:
case 3536:
case 2065:
case 194:
case 17:
case 2556:
case 13:
case 2622:
case 855:
case 2467:
case 1270:
case 2461:
case 3062:
case 3170:
case 2770:
case 1011:
case 1540:
case 1857:
case 1851:
case 2370:
case 3162:
case 2905:
case 3544:
case 1111:
case 3070:
case 1142:
case 3572:
case 1921:
case 225:
case 3560:
case 1042:
case 3657:
case 3651:
case 175:
case 1976:
case 135:
case 1989:
case 85:
case 396:
case 310:
case 3518:
case 323:
case 776:
case 554:
case 736:
case 917:
case 120:
case 2637:
case 2575:
case 113:
case 2880:
case 1745:
case 3190:
case 392:
case 38:
case 508:
case 1194:
case 3090:
case 2493:
case 3912:
case 2051:
case 2874:
case 1961:
case 3294:
case 2811:
case 1290:
case 244:
case 2151:
case 3435:
case 165:
case 2432:
case 2915:
case 1107:
case 766:
case 1101:
case 2331:
case 3979:
case 3137:
case 2737:
case 2455:
case 2731:
case 3986:
case 653:
case 772:
case 3031:
case 732:
case 3834:
case 1769:
case 1830:
case 1687:
case 1681:
case 3958:
case 2903:
case 378:
case 218:
case 2268:
case 2269:
case 3377:
case 4022:
case 3371:
case 859:
case 2114:
case 3714:
case 2938:
case 3777:
case 3771:
case 2171:
case 1413:
case 560:
case 167:
case 84:
case 1310:
case 2596:
case 485:
case 3472:
case 3763:
case 411:
case 3326:
case 3460:
case 802:
case 2063:
case 3726:
case 525:
case 2228:
case 1381:
case 1387:
case 981:
case 905:
case 1668:
case 643:
case 2532:
case 890:
case 1482:
case 2281:
case 2287:
case 2906:
case 1329:
case 3366:
case 2166:
case 1610:
case 806:
case 3677:
case 177:
case 1956:
case 816:
case 3535:
case 530:
case 137:
case 3614:
case 1505:
case 1416:
case 389:
case 3626:
case 4070:
case 2940:
case 3663:
case 3409:
case 3492:
case 3810:
case 2453:
case 2521:
case 3050:
case 1814:
case 2750:
case 824:
case 2350:
case 2964:
case 632:
case 1877:
case 3397:
case 3391:
case 1826:
case 496:
case 2197:
case 3791:
case 2191:
case 3254:
case 2589:
case 2097:
case 1746:
case 666:
case 2576:
case 2913:
case 1346:
case 2588:
case 2130:
case 3730:
case 188:
case 400:
case 423:
case 1734:
case 410:
case 3433:
case 3869:
case 3704:
case 1975:
case 561:
case 1403:
case 3304:
case 1300:
case 90:
case 2004:
case 1823:
case 1440:
case 2650:
case 662:
case 1343:
case 3444:
case 1743:
case 492:
case 3985:
case 676:
case 1646:
case 980:
case 3697:
case 845:
case 139:
case 3881:
case 2982:
case 2048:
case 3828:
case 4031:
case 3829:
case 1600:
case 2049:
case 946:
case 3348:
case 2149:
case 3749:
case 2148:
case 3349:
case 3604:
case 3960:
case 3354:
case 2877:
case 2871:
case 3972:
case 2814:
case 748:
case 1197:
case 89:
case 2826:
case 481:
case 1913:
case 2346:
case 1576:
case 2746:
case 2863:
case 415:
case 3034:
case 3918:
case 3583:
case 2334:
case 3204:
case 2734:
case 3134:
case 3919:
case 57:
case 594:
case 3000:
case 2975:
case 3459:
case 1104:
case 1004:
case 4045:
case 3230:
case 3100:
case 2440:
case 3043:
case 129:
case 3143:
case 1573:
case 626:
case 352:
case 2646:
case 309:
case 1243:
case 1456:
case 1567:
case 1561:
case 864:
case 279:
case 319:
case 56:
case 3248:
case 3249:
case 2515:
case 1982:
case 840:
case 693:
case 3579:
case 1149:
case 3586:
case 2368:
case 2995:
case 3169:
case 3168:
case 2768:
case 2369:
case 480:
case 3068:
case 118:
case 2681:
case 565:
case 1269:
case 1268:
case 98:
case 267:
case 3226:
case 1177:
case 3010:
case 3547:
case 1939:
case 1114:
case 1014:
case 614:
case 446:
case 2310:
case 1854:
case 1077:
case 1071:
case 1210:
case 3908:
case 3277:
case 3214:
case 3909:
case 2387:
case 2381:
case 3936:
case 1228:
case 3187:
case 2787:
case 3181:
case 3599:
case 996:
case 3081:
case 3087:
case 2669:
case 2482:
case 3028:
case 2849:
case 2729:
case 535:
case 2329:
case 3128:
case 40:
case 2610:
case 895:
case 1166:
case 154:
case 277:
case 317:
case 41:
case 520:
case 910:
case 513:
case 3223:
case 923:
case 841:
case 3266:
case 503:
case 1940:
case 1593:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758355201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,];
var gg_b = "1758355201/";

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
