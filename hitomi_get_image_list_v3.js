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
case 4079:
case 3246:
case 719:
case 3001:
case 2546:
case 3410:
case 3182:
case 2866:
case 3969:
case 1974:
case 3760:
case 2950:
case 3046:
case 1779:
case 3201:
case 1970:
case 3764:
case 2759:
case 1136:
case 364:
case 1367:
case 1436:
case 3114:
case 2594:
case 3090:
case 3920:
case 3108:
case 57:
case 1862:
case 492:
case 1542:
case 2047:
case 3671:
case 3290:
case 1453:
case 2132:
case 721:
case 3867:
case 845:
case 963:
case 2662:
case 2432:
case 2105:
case 2590:
case 938:
case 815:
case 1158:
case 1797:
case 2601:
case 908:
case 386:
case 1521:
case 354:
case 778:
case 3475:
case 731:
case 85:
case 204:
case 3175:
case 1801:
case 2347:
case 3103:
case 3262:
case 3647:
case 1894:
case 1425:
case 66:
case 2562:
case 118:
case 1251:
case 3062:
case 2271:
case 2694:
case 1642:
case 249:
case 1612:
case 2753:
case 1773:
case 1330:
case 2931:
case 500:
case 877:
case 4032:
case 4073:
case 3786:
case 4005:
case 3316:
case 3830:
case 2317:
case 2179:
case 567:
case 2616:
case 2787:
case 2479:
case 3981:
case 1816:
case 585:
case 3723:
case 1584:
case 3109:
case 3409:
case 1512:
case 2017:
case 231:
case 704:
case 4078:
case 1034:
case 373:
case 3144:
case 1230:
case 3968:
case 3444:
case 1778:
case 557:
case 3440:
case 7:
case 2965:
case 3140:
case 444:
case 990:
case 1290:
case 3453:
case 1547:
case 1867:
case 1094:
case 640:
case 2486:
case 1090:
case 1729:
case 1108:
case 2913:
case 2137:
case 3542:
case 1294:
case 1671:
case 2651:
case 1046:
case 1201:
case 1764:
case 3187:
case 3351:
case 164:
case 3621:
case 3367:
case 3436:
case 4064:
case 1110:
case 1362:
case 1246:
case 1001:
case 2423:
case 256:
case 284:
case 1410:
case 2123:
case 1760:
case 2567:
case 3251:
case 2709:
case 489:
case 1571:
case 2428:
case 3267:
case 3894:
case 336:
case 3425:
case 1346:
case 318:
case 1475:
case 840:
case 2455:
case 2021:
case 2066:
case 810:
case 243:
case 1175:
case 3801:
case 2155:
case 266:
case 2221:
case 3797:
case 2266:
case 2740:
case 3458:
case 186:
case 3521:
case 3846:
case 154:
case 1394:
case 3566:
case 2710:
case 2630:
case 2919:
case 1981:
case 3816:
case 2380:
case 2782:
case 872:
case 1834:
case 1723:
case 2312:
case 3159:
case 2464:
case 2948:
case 2714:
case 3684:
case 896:
case 3334:
case 995:
case 2429:
case 433:
case 756:
case 3732:
case 4037:
case 4086:
case 3680:
case 3705:
case 403:
case 1440:
case 281:
case 3234:
case 2534:
case 1140:
case 696:
case 969:
case 173:
case 2530:
case 1144:
case 423:
case 1755:
case 1968:
case 2703:
case 2943:
case 580:
case 458:
case 713:
case 2212:
case 2080:
case 552:
case 1496:
case 3584:
case 3870:
case 3324:
case 538:
case 546:
case 1591:
case 563:
case 1518:
case 1015:
case 571:
case 516:
case 2439:
case 2669:
case 70:
case 1727:
case 3650:
case 432:
case 97:
case 294:
case 1549:
case 1869:
case 465:
case 4027:
case 1195:
case 2752:
case 2620:
case 1772:
case 1495:
case 1370:
case 1733:
case 1824:
case 2971:
case 3369:
case 1374:
case 2624:
case 3777:
case 4033:
case 1504:
case 4038:
case 673:
case 661:
case 2054:
case 377:
case 3550:
case 2891:
case 1270:
case 1649:
case 2250:
case 1618:
case 3269:
case 3815:
case 2707:
case 3946:
case 196:
case 3706:
case 528:
case 2947:
case 3224:
case 402:
case 499:
case 3799:
case 3020:
case 791:
case 1315:
case 422:
case 2520:
case 172:
case 3024:
case 3994:
case 2804:
case 73:
case 851:
case 1513:
case 3220:
case 3126:
case 3161:
case 1863:
case 3426:
case 3798:
case 1345:
case 3157:
case 985:
case 3631:
case 2433:
case 2795:
case 22:
case 110:
case 2663:
case 2133:
case 967:
case 2917:
case 140:
case 2472:
case 2819:
case 3068:
case 3845:
case 2265:
case 1934:
case 900:
case 2331:
case 3268:
case 2848:
case 2065:
case 2568:
case 1476:
case 2563:
case 2031:
case 2843:
case 2185:
case 212:
case 930:
case 3263:
case 36:
case 864:
case 3368:
case 2231:
case 3063:
case 2138:
case 2581:
case 3281:
case 1245:
case 654:
case 1107:
case 686:
case 3435:
case 3793:
case 3135:
case 345:
case 3081:
case 1868:
case 2204:
case 2761:
case 1369:
case 1489:
case 1777:
case 1962:
case 2757:
case 2111:
case 1189:
case 3500:
case 2004:
case 4077:
case 3733:
case 3951:
case 1650:
case 2670:
case 3215:
case 2783:
case 2091:
case 3549:
case 1320:
case 1874:
case 2515:
case 2049:
case 3756:
case 1654:
case 2291:
case 3727:
case 4006:
case 2213:
case 747:
case 460:
case 2942:
case 717:
case 3513:
case 1706:
case 1224:
case 1799:
case 1020:
case 2318:
case 3604:
case 2391:
case 407:
case 3618:
case 2304:
case 3691:
case 3070:
case 1946:
case 396:
case 3074:
case 275:
case 2193:
case 2702:
case 2570:
case 1550:
case 2493:
case 2300:
case 3739:
case 3930:
case 3176:
case 935:
case 1565:
case 818:
case 626:
case 1916:
case 2422:
case 848:
case 962:
case 1363:
case 3152:
case 679:
case 15:
case 4011:
case 2043:
case 1457:
case 2477:
case 3543:
case 1426:
case 1381:
case 2319:
case 2177:
case 1631:
case 1102:
case 1435:
case 217:
case 2248:
case 115:
case 1793:
case 879:
case 1665:
case 1135:
case 3548:
case 2019:
case 3868:
case 3045:
case 4093:
case 3407:
case 2545:
case 2219:
case 3245:
case 3107:
case 2499:
case 1488:
case 905:
case 1063:
case 2406:
case 806:
case 1188:
case 2141:
case 826:
case 775:
case 16:
case 3371:
case 2764:
case 2046:
case 3950:
case 3501:
case 2246:
case 593:
case 842:
case 2110:
case 2482:
case 2362:
case 933:
case 1123:
case 2760:
case 3954:
case 2410:
case 184:
case 3546:
case 3821:
case 156:
case 2867:
case 1042:
case 459:
case 3473:
case 1871:
case 3432:
case 3590:
case 3105:
case 3173:
case 3247:
case 2108:
case 2729:
case 2920:
case 2090:
case 1321:
case 1437:
case 60:
case 1366:
case 334:
case 2294:
case 2671:
case 1137:
case 1913:
case 1186:
case 1744:
case 1991:
case 2390:
case 113:
case 3646:
case 2103:
case 2175:
case 4040:
case 1342:
case 691:
case 1266:
case 2394:
case 80:
case 3478:
case 1740:
case 3271:
case 903:
case 2301:
case 1428:
case 1551:
case 3:
case 2346:
case 4009:
case 612:
case 469:
case 3071:
case 2262:
case 773:
case 761:
case 1904:
case 550:
case 2963:
case 1708:
case 1129:
case 488:
case 3880:
case 537:
case 2786:
case 4008:
case 3884:
case 582:
case 3753:
case 319:
case 251:
case 2981:
case 1710:
case 2723:
case 694:
case 321:
case 1782:
case 3787:
case 3616:
case 3317:
case 4010:
case 1164:
case 1634:
case 1714:
case 1948:
case 1384:
case 1464:
case 1280:
case 331:
case 2109:
case 2496:
case 1080:
case 754:
case 3217:
case 2196:
case 2409:
case 39:
case 3197:
case 181:
case 3516:
case 4075:
case 1530:
case 1492:
case 261:
case 1703:
case 870:
case 3242:
case 3667:
case 3437:
case 3366:
case 3486:
case 1594:
case 134:
case 3651:
case 1047:
case 3137:
case 983:
case 1405:
case 2453:
case 1473:
case 817:
case 1432:
case 1105:
case 1662:
case 2153:
case 279:
case 1247:
case 3423:
case 226:
case 2974:
case 1954:
case 356:
case 2136:
case 2351:
case 1371:
case 2187:
case 1759:
case 206:
case 2621:
case 248:
case 1842:
case 1562:
case 2067:
case 1690:
case 3904:
case 1271:
case 3709:
case 3567:
case 914:
case 68:
case 2267:
case 944:
case 1:
case 2890:
case 1178:
case 3266:
case 2797:
case 3221:
case 2566:
case 2521:
case 3949:
case 3740:
case 2915:
case 1601:
case 104:
case 3744:
case 313:
case 1646:
case 3155:
case 2801:
case 343:
case 565:
case 1616:
case 1179:
case 3164:
case 101:
case 3634:
case 909:
case 3714:
case 1479:
case 3384:
case 3710:
case 446:
case 121:
case 929:
case 3782:
case 1884:
case 2705:
case 875:
case 1931:
case 2330:
case 726:
case 119:
case 2334:
case 3429:
case 706:
case 51:
case 3530:
case 3492:
case 675:
case 4058:
case 453:
case 3775:
case 2230:
case 2234:
case 1758:
case 2778:
case 1516:
case 2030:
case 2584:
case 3080:
case 408:
case 3012:
case 1017:
case 3943:
case 3212:
case 1725:
case 599:
case 2580:
case 131:
case 75:
case 1249:
case 878:
case 1854:
case 1921:
case 1966:
case 1049:
case 89:
case 2324:
case 3669:
case 1218:
case 1411:
case 3354:
case 2489:
case 1498:
case 1726:
case 1761:
case 1204:
case 533:
case 3813:
case 1757:
case 3624:
case 1004:
case 3752:
case 4026:
case 4061:
case 3971:
case 619:
case 462:
case 3254:
case 1304:
case 405:
case 523:
case 2946:
case 2554:
case 3849:
case 425:
case 1702:
case 277:
case 2069:
case 3818:
case 175:
case 1193:
case 1300:
case 849:
case 503:
case 1735:
case 1493:
case 2994:
case 2024:
case 1213:
case 1349:
case 2220:
case 715:
case 631:
case 3804:
case 801:
case 2224:
case 3524:
case 1391:
case 2990:
case 1318:
case 480:
case 2020:
case 2799:
case 3663:
case 3172:
case 1043:
case 3917:
case 25:
case 2161:
case 634:
case 1477:
case 30:
case 2457:
case 2711:
case 2631:
case 2381:
case 2157:
case 8:
case 1645:
case 982:
case 3127:
case 3568:
case 3065:
case 2916:
case 597:
case 1122:
case 937:
case 2565:
case 2483:
case 1422:
case 950:
case 2368:
case 1499:
case 2188:
case 2531:
case 1199:
case 2063:
case 312:
case 3185:
case 3843:
case 589:
case 3485:
case 342:
case 1441:
case 2665:
case 604:
case 1248:
case 2435:
case 960:
case 1019:
case 2081:
case 245:
case 147:
case 2402:
case 3581:
case 3138:
case 1343:
case 2281:
case 170:
case 3004:
case 1620:
case 420:
case 2951:
case 2824:
case 2733:
case 2495:
case 1350:
case 2613:
case 400:
case 2374:
case 3411:
case 4052:
case 3498:
case 3204:
case 881:
case 2504:
case 3111:
case 3757:
case 2015:
case 2518:
case 1776:
case 2591:
case 3850:
case 1139:
case 3291:
case 2727:
case 3674:
case 1669:
case 485:
case 1439:
case 3218:
case 4076:
case 3670:
case 3249:
case 2869:
case 467:
case 3091:
case 194:
case 710:
case 3013:
case 3788:
case 1524:
case 3391:
case 2604:
case 2785:
case 1520:
case 3349:
case 2513:
case 1804:
case 1891:
case 3570:
case 3193:
case 2074:
case 3300:
case 1250:
case 3735:
case 2270:
case 3615:
case 2274:
case 3304:
case 2738:
case 681:
case 296:
case 1050:
case 1849:
case 1819:
case 2934:
case 1265:
case 2648:
case 511:
case 1427:
case 2930:
case 2739:
case 3645:
case 541:
case 1456:
case 1568:
case 1065:
case 576:
case 2543:
case 2863:
case 498:
case 3789:
case 2345:
case 2152:
case 12:
case 932:
case 1795:
case 3984:
case 47:
case 1433:
case 240:
case 1472:
case 1917:
case 3545:
case 3865:
case 2519:
case 999:
case 902:
case 191:
case 2107:
case 1668:
case 3219:
case 613:
case 3248:
case 317:
case 2045:
case 2868:
case 2548:
case 643:
case 112:
case 1031:
case 1485:
case 955:
case 3441:
case 3499:
case 38:
case 3406:
case 3957:
case 369:
case 3926:
case 3209:
case 744:
case 2933:
case 2379:
case 2117:
case 714:
case 2972:
case 4:
case 1952:
case 2767:
case 2417:
case 2860:
case 424:
case 3044:
case 3766:
case 3116:
case 1434:
case 1660:
case 3244:
case 1592:
case 1430:
case 3040:
case 3859:
case 2696:
case 2397:
case 209:
case 2609:
case 292:
case 2985:
case 1896:
case 3344:
case 1809:
case 2079:
case 276:
case 1059:
case 1907:
case 1840:
case 3935:
case 2640:
case 3579:
case 1564:
case 948:
case 2078:
case 936:
case 1555:
case 1623:
case 625:
case 862:
case 2305:
case 3887:
case 835:
case 2730:
case 2939:
case 2610:
case 2823:
case 2734:
case 2614:
case 214:
case 2278:
case 1258:
case 3578:
case 3075:
case 1810:
case 1467:
case 2171:
case 1151:
case 1336:
case 1717:
case 1637:
case 2471:
case 1167:
case 1451:
case 3314:
case 1995:
case 49:
case 3780:
case 4017:
case 2886:
case 3162:
case 3310:
case 1225:
case 3632:
case 1808:
case 3462:
case 652:
case 1236:
case 1803:
case 3101:
case 709:
case 1875:
case 880:
case 3214:
case 3678:
case 283:
case 401:
case 2603:
case 2582:
case 116:
case 3210:
case 1036:
case 2675:
case 1087:
case 421:
case 138:
case 163:
case 979:
case 171:
case 449:
case 926:
case 635:
case 3190:
case 2447:
case 3505:
case 825:
case 2828:
case 1253:
case 3375:
case 3532:
case 1537:
case 3825:
case 1586:
case 3494:
case 2032:
case 1053:
case 3194:
case 2508:
case 2005:
case 3660:
case 413:
case 1244:
case 3592:
case 1040:
case 758:
case 443:
case 2292:
case 2879:
case 87:
case 1859:
case 466:
case 2329:
case 3134:
case 1416:
case 1044:
case 1766:
case 3434:
case 1240:
case 2922:
case 898:
case 2092:
case 1209:
case 289:
case 3952:
case 2412:
case 1009:
case 973:
case 2977:
case 2360:
case 2480:
case 1926:
case 1096:
case 1309:
case 1935:
case 2701:
case 2264:
case 3259:
case 3844:
case 2559:
case 1396:
case 1902:
case 2060:
case 195:
case 1697:
case 2746:
case 3907:
case 3840:
case 3896:
case 1344:
case 4042:
case 67:
case 3809:
case 2392:
case 3747:
case 55:
case 698:
case 1742:
case 2229:
case 2941:
case 2794:
case 1989:
case 2911:
case 1780:
case 1673:
case 2028:
case 1162:
case 1632:
case 1712:
case 1382:
case 885:
case 3151:
case 4080:
case 2228:
case 3686:
case 3717:
case 1853:
case 2873:
case 954:
case 4012:
case 3451:
case 1314:
case 3995:
case 308:
case 1308:
case 3882:
case 3258:
case 2121:
case 2716:
case 2558:
case 2466:
case 3810:
case 3814:
case 3058:
case 3623:
case 223:
case 657:
case 1836:
case 1887:
case 2255:
case 820:
case 797:
case 2142:
case 600:
case 3358:
case 3053:
case 1194:
case 964:
case 2553:
case 1573:
case 233:
case 1190:
case 3253:
case 830:
case 1490:
case 2355:
case 1532:
case 316:
case 3036:
case 3523:
case 3655:
case 2223:
case 1446:
case 3325:
case 338:
case 363:
case 371:
case 1858:
case 3236:
case 1010:
case 3875:
case 1214:
case 1082:
case 2023:
case 1401:
case 2587:
case 1678:
case 2356:
case 299:
case 2588:
case 2431:
case 1506:
case 222:
case 2877:
case 3713:
case 352:
case 3585:
case 1861:
case 2038:
case 4054:
case 2535:
case 1352:
case 325:
case 255:
case 157:
case 2333:
case 2770:
case 2979:
case 1622:
case 305:
case 2774:
case 3002:
case 3326:
case 2238:
case 3361:
case 1883:
case 1207:
case 1145:
case 2822:
case 4050:
case 1252:
case 2272:
case 3996:
case 1888:
case 3026:
case 470:
case 3700:
case 3909:
case 3685:
case 3057:
case 2806:
case 2688:
case 688:
case 2557:
case 3704:
case 1052:
case 1699:
case 2338:
case 2072:
case 1307:
case 2841:
case 1606:
case 3257:
case 1276:
case 1835:
case 2465:
case 2385:
case 910:
case 3749:
case 2635:
case 2715:
case 2056:
case 3940:
case 494:
case 1522:
case 2583:
case 2997:
case 2454:
case 3719:
case 2745:
case 3639:
case 972:
case 1395:
case 2450:
case 1470:
case 1987:
case 722:
case 859:
case 1170:
case 3420:
case 2811:
case 2898:
case 3120:
case 3908:
case 1611:
case 2905:
case 1731:
case 895:
case 1953:
case 1698:
case 2932:
case 2039:
case 74:
case 1765:
case 869:
case 506:
case 71:
case 3903:
case 3975:
case 3539:
case 4065:
case 526:
case 695:
case 40:
case 579:
case 1925:
case 198:
case 1095:
case 42:
case 1295:
case 105:
case 1627:
case 2769:
case 3445:
case 2419:
case 1481:
case 561:
case 3883:
case 1538:
case 3207:
case 573:
case 1035:
case 2676:
case 3145:
case 1357:
case 330:
case 1202:
case 96:
case 357:
case 3007:
case 3959:
case 2964:
case 3622:
case 3750:
case 863:
case 2241:
case 1383:
case 1713:
case 2322:
case 846:
case 2099:
case 2929:
case 628:
case 1163:
case 152:
case 945:
case 3861:
case 1088:
case 3599:
case 2206:
case 2041:
case 2724:
case 3506:
case 608:
case 1283:
case 3076:
case 638:
case 3522:
case 4018:
case 671:
case 663:
case 95:
case 1168:
case 2022:
case 1083:
case 4049:
case 1527:
case 1468:
case 1944:
case 385:
case 2576:
case 2399:
case 1261:
case 2443:
case 3052:
case 1226:
case 3699:
case 300:
case 4000:
case 2277:
case 3606:
case 1257:
case 3252:
case 1061:
case 320:
case 1533:
case 237:
case 1302:
case 853:
case 2077:
case 162:
case 1057:
case 1572:
case 3611:
case 3731:
case 1124:
case 3698:
case 1895:
case 3889:
case 2113:
case 2986:
case 2937:
case 727:
case 2695:
case 2413:
case 3395:
case 586:
case 1748:
case 2293:
case 3470:
case 3987:
case 3936:
case 3593:
case 2839:
case 3170:
case 1169:
case 2923:
case 2093:
case 4048:
case 1982:
case 2311:
case 37:
case 2400:
case 2595:
case 3598:
case 3925:
case 3095:
case 2104:
case 2298:
case 2491:
case 2768:
case 1975:
case 782:
case 2955:
case 1539:
case 2191:
case 293:
case 2118:
case 564:
case 750:
case 3115:
case 737:
case 3765:
case 3958:
case 3117:
case 4062:
case 1364:
case 3509:
case 3767:
case 3972:
case 2009:
case 1762:
case 58:
case 269:
case 2957:
case 1412:
case 1180:
case 2096:
case 2926:
case 3829:
case 1360:
case 3097:
case 2244:
case 3927:
case 3864:
case 3544:
case 2040:
case 2044:
case 3297:
case 2416:
case 547:
case 454:
case 2240:
case 486:
case 2116:
case 2597:
case 1999:
case 1029:
case 1790:
case 1906:
case 1392:
case 4094:
case 1229:
case 2742:
case 3609:
case 392:
case 309:
case 1701:
case 2935:
case 4046:
case 295:
case 788:
case 2396:
case 1559:
case 464:
case 2579:
case 341:
case 1746:
case 3938:
case 311:
case 3644:
case 103:
case 3734:
case 1337:
case 1421:
case 344:
case 2075:
case 1716:
case 2578:
case 123:
case 84:
case 3575:
case 3078:
case 2275:
case 3730:
case 3373:
case 2203:
case 2887:
case 2836:
case 3305:
case 2162:
case 2310:
case 1998:
case 2673:
case 2780:
case 865:
case 622:
case 1911:
case 2605:
case 2382:
case 832:
case 2712:
case 1323:
case 2632:
case 2853:
case 1832:
case 451:
case 3675:
case 3603:
case 3582:
case 2858:
case 665:
case 822:
case 2446:
case 3510:
case 3514:
case 2010:
case 1328:
case 1587:
case 383:
case 2678:
case 687:
case 1993:
case 899:
case 802:
case 795:
case 2825:
case 1142:
case 288:
case 1286:
case 3005:
case 2194:
case 1442:
case 2190:
case 2505:
case 2008:
case 855:
case 133:
case 2573:
case 168:
case 1625:
case 3232:
case 2490:
case 3273:
case 2375:
case 1086:
case 1037:
case 2303:
case 274:
case 1297:
case 1860:
case 1540:
case 3329:
case 53:
case 3659:
case 2664:
case 99:
case 728:
case 931:
case 978:
case 3412:
case 418:
case 4067:
case 3360:
case 3480:
case 389:
case 1379:
case 1596:
case 1933:
case 1751:
case 512:
case 1417:
case 3184:
case 1509:
case 2952:
case 1767:
case 290:
case 1972:
case 949:
case 2560:
case 2907:
case 3064:
case 2059:
case 176:
case 3746:
case 1079:
case 1938:
case 3260:
case 1644:
case 3701:
case 1640:
case 1279:
case 1892:
case 693:
case 3559:
case 2844:
case 3229:
case 1696:
case 2529:
case 1609:
case 3794:
case 901:
case 3941:
case 3999:
case 738:
case 3029:
case 3906:
case 921:
case 3392:
case 3873:
case 2637:
case 924:
case 2151:
case 2336:
case 3805:
case 1171:
case 2467:
case 2387:
case 2025:
case 2995:
case 774:
case 2451:
case 3653:
case 1886:
case 358:
case 1837:
case 3911:
case 3323:
case 660:
case 1682:
case 2623:
case 2058:
case 1078:
case 2353:
case 1939:
case 253:
case 837:
case 2258:
case 1278:
case 3166:
case 114:
case 1614:
case 303:
case 607:
case 1734:
case 3337:
case 9:
case 3421:
case 2810:
case 144:
case 3466:
case 3386:
case 637:
case 1232:
case 3553:
case 650:
case 827:
case 3037:
case 2358:
case 570:
case 1508:
case 3237:
case 682:
case 1073:
case 2803:
case 2236:
case 3328:
case 3587:
case 3993:
case 3658:
case 1675:
case 2036:
case 860:
case 216:
case 2325:
case 238:
case 1510:
case 1322:
case 4024:
case 2633:
case 2463:
case 322:
case 1006:
case 252:
case 1099:
case 1833:
case 3588:
case 399:
case 1206:
case 302:
case 3661:
case 4020:
case 3327:
case 2481:
case 2361:
case 107:
case 644:
case 2181:
case 3822:
case 98:
case 1676:
case 2538:
case 2202:
case 1148:
case 477:
case 1827:
case 4069:
case 3372:
case 3038:
case 3333:
case 1964:
case 581:
case 3683:
case 3338:
case 3557:
case 844:
case 2257:
case 1277:
case 3526:
case 814:
case 235:
case 137:
case 3899:
case 31:
case 2996:
case 2061:
case 2572:
case 3233:
case 1552:
case 2335:
case 2909:
case 2700:
case 3056:
case 2940:
case 3635:
case 3465:
case 3385:
case 332:
case 2283:
case 1341:
case 2807:
case 365:
case 3165:
case 1607:
case 1022:
case 2168:
case 1992:
case 2638:
case 1576:
case 2718:
case 2944:
case 2791:
case 2468:
case 1293:
case 2914:
case 415:
case 4081:
case 1839:
case 3150:
case 445:
case 892:
case 1093:
case 1923:
case 2169:
case 3745:
case 2910:
case 2639:
case 1781:
case 2719:
case 2469:
case 513:
case 1311:
case 3339:
case 2124:
case 3905:
case 4063:
case 1986:
case 1113:
case 3898:
case 3811:
case 2420:
case 1695:
case 1413:
case 725:
case 2120:
case 1955:
case 1418:
case 3239:
case 1768:
case 2903:
case 193:
case 2539:
case 1149:
case 1449:
case 611:
case 2089:
case 1011:
case 629:
case 1100:
case 1928:
case 45:
case 3589:
case 1104:
case 1404:
case 1211:
case 2289:
case 623:
case 4074:
case 912:
case 3448:
case 1979:
case 2622:
case 3964:
case 1333:
case 1502:
case 1683:
case 3419:
case 1238:
case 2445:
case 2754:
case 307:
case 3960:
case 3119:
case 496:
case 2145:
case 3676:
case 2207:
case 3833:
case 3041:
case 199:
case 3206:
case 1085:
case 531:
case 1661:
case 1626:
case 3299:
case 59:
case 3322:
case 1877:
case 472:
case 3241:
case 122:
case 2826:
case 2861:
case 3720:
case 360:
case 3929:
case 3099:
case 3306:
case 4015:
case 1256:
case 3022:
case 3399:
case 798:
case 2802:
case 285:
case 1227:
case 501:
case 3222:
case 1465:
case 92:
case 1385:
case 165:
case 1583:
case 1899:
case 337:
case 220:
case 2252:
case 668:
case 350:
case 1233:
case 14:
case 2641:
case 3077:
case 1072:
case 2052:
case 3443:
case 519:
case 1688:
case 2577:
case 3143:
case 3277:
case 1033:
case 1526:
case 1561:
case 549:
case 757:
case 3986:
case 1898:
case 2889:
case 5:
case 2698:
case 2731:
case 1905:
case 897:
case 1689:
case 2611:
case 1932:
case 2174:
case 3923:
case 3781:
case 1454:
case 3293:
case 2593:
case 2936:
case 1589:
case 3104:
case 2095:
case 3211:
case 410:
case 3393:
case 3400:
case 767:
case 3011:
case 3595:
case 534:
case 2115:
case 2693:
case 2765:
case 3768:
case 3491:
case 1893:
case 393:
case 700:
case 889:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744495202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,];
var gg_b = "1744495202/";

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
