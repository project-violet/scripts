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
case 405:
case 409:
case 3287:
case 2819:
case 3060:
case 4047:
case 1052:
case 841:
case 193:
case 3239:
case 3973:
case 1945:
case 2417:
case 1651:
case 3536:
case 1691:
case 3925:
case 2351:
case 2391:
case 1493:
case 3058:
case 1303:
case 1196:
case 2024:
case 1156:
case 2535:
case 2842:
case 2926:
case 1513:
case 1298:
case 1258:
case 1901:
case 1123:
case 3577:
case 1270:
case 3349:
case 3143:
case 1175:
case 1784:
case 37:
case 1917:
case 2445:
case 243:
case 2618:
case 3371:
case 713:
case 1039:
case 2050:
case 176:
case 970:
case 4015:
case 1165:
case 534:
case 1260:
case 3567:
case 685:
case 689:
case 3502:
case 380:
case 3252:
case 2874:
case 3733:
case 177:
case 4004:
case 2068:
case 1087:
case 756:
case 1727:
case 2052:
case 1828:
case 427:
case 1207:
case 1334:
case 2691:
case 1597:
case 3250:
case 1557:
case 2945:
case 1417:
case 293:
case 1262:
case 985:
case 484:
case 989:
case 1842:
case 1926:
case 3137:
case 1535:
case 426:
case 1024:
case 352:
case 3946:
case 2109:
case 2303:
case 3044:
case 2634:
case 1351:
case 622:
case 2784:
case 3671:
case 3011:
case 3224:
case 2175:
case 2508:
case 1993:
case 1953:
case 2329:
case 2123:
case 1629:
case 1090:
case 3425:
case 2039:
case 458:
case 1618:
case 3588:
case 2260:
case 1068:
case 2087:
case 3072:
case 3612:
case 2840:
case 277:
case 85:
case 2072:
case 3087:
case 431:
case 2463:
case 1361:
case 1820:
case 924:
case 2715:
case 2166:
case 1733:
case 450:
case 1252:
case 1292:
case 986:
case 2704:
case 772:
case 2981:
case 2661:
case 1567:
case 2425:
case 1371:
case 2062:
case 2473:
case 1349:
case 1577:
case 2671:
case 17:
case 3318:
case 2011:
case 741:
case 987:
case 3901:
case 759:
case 3298:
case 3508:
case 3196:
case 2137:
case 3513:
case 3493:
case 2044:
case 3634:
case 252:
case 2822:
case 678:
case 3303:
case 3109:
case 2290:
case 2155:
case 1925:
case 3691:
case 1536:
case 2278:
case 1239:
case 2310:
case 4027:
case 933:
case 3092:
case 1894:
case 275:
case 279:
case 902:
case 1683:
case 1831:
case 1287:
case 2747:
case 1715:
case 4016:
case 978:
case 1612:
case 2361:
case 1072:
case 1704:
case 2252:
case 2292:
case 280:
case 633:
case 1649:
case 3078:
case 1473:
case 343:
case 3629:
case 4084:
case 3090:
case 1176:
case 3953:
case 3993:
case 2446:
case 3244:
case 602:
case 1011:
case 857:
case 27:
case 388:
case 2577:
case 111:
case 152:
case 3391:
case 3351:
case 1044:
case 2098:
case 3535:
case 3842:
case 354:
case 3211:
case 581:
case 791:
case 2239:
case 1310:
case 686:
case 2973:
case 1278:
case 2536:
case 1195:
case 482:
case 1290:
case 42:
case 1250:
case 175:
case 2481:
case 708:
case 3819:
case 1383:
case 2854:
case 2894:
case 3828:
case 75:
case 963:
case 1268:
case 2963:
case 3727:
case 2683:
case 2776:
case 2368:
case 3061:
case 1805:
case 3775:
case 271:
case 2902:
case 2687:
case 3672:
case 1988:
case 3723:
case 2967:
case 868:
case 504:
case 896:
case 2390:
case 2400:
case 1436:
case 3071:
case 3611:
case 2378:
case 2210:
case 664:
case 1339:
case 897:
case 3049:
case 2639:
case 3413:
case 3662:
case 3593:
case 1029:
case 712:
case 242:
case 1886:
case 3116:
case 3935:
case 3370:
case 570:
case 394:
case 751:
case 3218:
case 3358:
case 192:
case 3229:
case 219:
case 730:
case 2789:
case 2525:
case 1900:
case 3644:
case 3957:
case 2147:
case 1624:
case 873:
case 522:
case 79:
case 2737:
case 58:
case 618:
case 2488:
case 1467:
case 3709:
case 2795:
case 1261:
case 2563:
case 934:
case 439:
case 435:
case 2692:
case 2805:
case 4023:
case 2387:
case 1368:
case 838:
case 2581:
case 2988:
case 2814:
case 2743:
case 3899:
case 1115:
case 3885:
case 2339:
case 2133:
case 4065:
case 1378:
case 3362:
case 2436:
case 3234:
case 1400:
case 1390:
case 3497:
case 2650:
case 142:
case 585:
case 3501:
case 2029:
case 3251:
case 3291:
case 3311:
case 2678:
case 344:
case 1104:
case 1639:
case 1789:
case 2003:
case 2546:
case 292:
case 847:
case 3482:
case 3545:
case 353:
case 3698:
case 3658:
case 2900:
case 3127:
case 1488:
case 846:
case 2392:
case 1737:
case 964:
case 469:
case 465:
case 1692:
case 1563:
case 3660:
case 1755:
case 3980:
case 768:
case 3879:
case 4037:
case 586:
case 796:
case 524:
case 1821:
case 3402:
case 3392:
case 4055:
case 903:
case 2545:
case 4089:
case 2832:
case 2010:
case 587:
case 3624:
case 2670:
case 1644:
case 1997:
case 2658:
case 812:
case 1229:
case 2344:
case 392:
case 1935:
case 1218:
case 1607:
case 1553:
case 2291:
case 1593:
case 3029:
case 1116:
case 3650:
case 3886:
case 1765:
case 2501:
case 2435:
case 244:
case 1982:
case 498:
case 851:
case 2517:
case 3133:
case 3339:
case 2457:
case 3436:
case 2307:
case 662:
case 849:
case 1012:
case 3988:
case 2806:
case 3743:
case 2859:
case 1775:
case 1184:
case 31:
case 3814:
case 89:
case 533:
case 116:
case 1480:
case 910:
case 1980:
case 3737:
case 2796:
case 2821:
case 578:
case 1658:
case 2957:
case 2644:
case 3034:
case 2997:
case 1127:
case 895:
case 448:
case 3147:
case 2218:
case 2370:
case 2935:
case 2526:
case 1913:
case 3789:
case 2408:
case 2358:
case 2398:
case 3051:
case 2229:
case 1344:
case 3091:
case 2662:
case 3639:
case 1501:
case 860:
case 2553:
case 1908:
case 1251:
case 2607:
case 3400:
case 1234:
case 1307:
case 981:
case 1457:
case 1497:
case 3390:
case 3350:
case 1517:
case 3766:
case 3210:
case 217:
case 3115:
case 1362:
case 3378:
case 2611:
case 371:
case 2775:
case 2830:
case 1806:
case 3283:
case 2672:
case 3687:
case 3368:
case 4043:
case 1372:
case 2480:
case 4:
case 216:
case 3776:
case 616:
case 2779:
case 1895:
case 4021:
case 76:
case 2741:
case 1122:
case 953:
case 3142:
case 1837:
case 1281:
case 2583:
case 2450:
case 1336:
case 3635:
case 2478:
case 364:
case 2194:
case 1026:
case 2154:
case 3119:
case 3253:
case 3128:
case 1600:
case 3503:
case 3944:
case 3697:
case 232:
case 2424:
case 3226:
case 1549:
case 694:
case 575:
case 2786:
case 739:
case 210:
case 735:
case 3529:
case 1053:
case 3498:
case 3308:
case 740:
case 2120:
case 49:
case 1866:
case 2273:
case 801:
case 2677:
case 3682:
case 3962:
case 1302:
case 3706:
case 1452:
case 2843:
case 3799:
case 3081:
case 1968:
case 2987:
case 1688:
case 898:
case 451:
case 866:
case 1876:
case 449:
case 3164:
case 495:
case 2738:
case 2855:
case 1779:
case 2895:
case 2487:
case 3472:
case 848:
case 2281:
case 57:
case 3721:
case 3856:
case 3960:
case 3809:
case 2122:
case 1992:
case 1741:
case 2439:
case 3073:
case 1478:
case 1300:
case 3407:
case 3397:
case 3025:
case 3958:
case 2600:
case 1636:
case 580:
case 3551:
case 2924:
case 2889:
case 3411:
case 3335:
case 2148:
case 644:
case 2026:
case 1154:
case 1001:
case 2246:
case 1424:
case 2377:
case 8:
case 2978:
case 1017:
case 1939:
case 2990:
case 765:
case 3608:
case 1388:
case 281:
case 2512:
case 3875:
case 2452:
case 4059:
case 1602:
case 2876:
case 1705:
case 2968:
case 1987:
case 4014:
case 1164:
case 3688:
case 942:
case 1972:
case 3561:
case 2875:
case 3367:
case 1081:
case 4005:
case 2823:
case 3492:
case 3452:
case 1706:
case 3571:
case 2140:
case 3978:
case 1682:
case 971:
case 1907:
case 1174:
case 2608:
case 3053:
case 3093:
case 1308:
case 1911:
case 3549:
case 1226:
case 1518:
case 3600:
case 1128:
case 1293:
case 2591:
case 1697:
case 1657:
case 1503:
case 4069:
case 1313:
case 1119:
case 767:
case 2335:
case 2411:
case 3889:
case 2970:
case 2613:
case 164:
case 1635:
case 2073:
case 2217:
case 2397:
case 2407:
case 2856:
case 588:
case 798:
case 766:
case 2680:
case 4079:
case 2809:
case 3895:
case 3855:
case 3738:
case 915:
case 3487:
case 2063:
case 4041:
case 3263:
case 593:
case 783:
case 3388:
case 1875:
case 2785:
case 3677:
case 123:
case 1140:
case 1865:
case 2518:
case 2226:
case 2308:
case 1444:
case 2498:
case 619:
case 1970:
case 3154:
case 7:
case 3194:
case 2503:
case 1591:
case 2046:
case 2128:
case 3769:
case 1407:
case 1534:
case 1025:
case 3490:
case 2732:
case 1357:
case 3131:
case 1217:
case 3478:
case 1073:
case 671:
case 2142:
case 447:
case 1856:
case 1896:
case 1721:
case 4038:
case 736:
case 2380:
case 1063:
case 576:
case 911:
case 400:
case 1774:
case 3815:
case 3587:
case 1185:
case 1067:
case 3381:
case 3804:
case 1002:
case 286:
case 2257:
case 850:
case 2434:
case 2507:
case 829:
case 1393:
case 705:
case 709:
case 2884:
case 3008:
case 1403:
case 1617:
case 1106:
case 2235:
case 1213:
case 224:
case 2130:
case 1598:
case 2544:
case 2121:
case 1570:
case 3277:
case 1326:
case 1645:
case 3910:
case 2345:
case 3138:
case 2626:
case 474:
case 2000:
case 1036:
case 3663:
case 3202:
case 680:
case 3552:
case 385:
case 1719:
case 389:
case 952:
case 3847:
case 4094:
case 3461:
case 4054:
case 2185:
case 3568:
case 2280:
case 726:
case 1572:
case 1740:
case 3186:
case 1816:
case 3483:
case 2067:
case 594:
case 370:
case 784:
case 1434:
case 1507:
case 3105:
case 3590:
case 1297:
case 2601:
case 3971:
case 980:
case 1317:
case 727:
case 807:
case 124:
case 3949:
case 1235:
case 2106:
case 3082:
case 2617:
case 1301:
case 1491:
case 1451:
case 2159:
case 2393:
case 2199:
case 2645:
case 3035:
case 611:
case 304:
case 2326:
case 3141:
case 3524:
case 1282:
case 2742:
case 2951:
case 2208:
case 1544:
case 2036:
case 3646:
case 1000:
case 2934:
case 1626:
case 3179:
case 133:
case 2719:
case 3754:
case 3794:
case 758:
case 3288:
case 3363:
case 517:
case 3169:
case 82:
case 1080:
case 2169:
case 441:
case 2363:
case 3827:
case 455:
case 677:
case 1748:
case 185:
case 1983:
case 3728:
case 1663:
case 3560:
case 2288:
case 2325:
case 2057:
case 2646:
case 2179:
case 1471:
case 1138:
case 2141:
case 1277:
case 1449:
case 2035:
case 1013:
case 204:
case 363:
case 3598:
case 3558:
case 571:
case 3429:
case 1625:
case 3742:
case 3617:
case 2949:
case 3213:
case 3106:
case 378:
case 3199:
case 3393:
case 3403:
case 2114:
case 1008:
case 2550:
case 3601:
case 2200:
case 2578:
case 693:
case 2410:
case 1539:
case 2186:
case 515:
case 1381:
case 2681:
case 2961:
case 2833:
case 3185:
case 2568:
case 1363:
case 2461:
case 706:
case 4019:
case 2663:
case 2983:
case 2412:
case 2592:
case 285:
case 2552:
case 1794:
case 1754:
case 993:
case 2748:
case 3626:
case 2910:
case 333:
case 1179:
case 761:
case 4042:
case 302:
case 3121:
case 2013:
case 2722:
case 2673:
case 1035:
case 2277:
case 2449:
case 3884:
case 18:
case 122:
case 3929:
case 2008:
case 4064:
case 3491:
case 3918:
case 408:
case 2539:
case 1971:
case 2236:
case 3653:
case 1200:
case 3297:
case 1590:
case 3088:
case 1912:
case 2804:
case 4074:
case 1186:
case 782:
case 80:
case 3740:
case 387:
case 1568:
case 2815:
case 858:
case 1720:
case 1681:
case 1989:
case 1669:
case 1042:
case 658:
case 60:
case 3022:
case 4057:
case 404:
case 909:
case 2700:
case 1736:
case 2163:
case 220:
case 255:
case 2852:
case 2892:
case 2638:
case 3475:
case 3048:
case 711:
case 2379:
case 2547:
case 1641:
case 2125:
case 56:
case 3621:
case 3780:
case 1955:
case 3630:
case 888:
case 357:
case 1074:
case 752:
case 3193:
case 3399:
case 3359:
case 1605:
case 1767:
case 2314:
case 1248:
case 3496:
case 3456:
case 3219:
case 3306:
case 2504:
case 1686:
case 422:
case 48:
case 1966:
case 1064:
case 3807:
case 3862:
case 2839:
case 4082:
case 3242:
case 2489:
case 3811:
case 3708:
case 540:
case 535:
case 2386:
case 539:
case 3735:
case 780:
case 590:
case 927:
case 3858:
case 3632:
case 2042:
case 2824:
case 3870:
case 2989:
case 2736:
case 1163:
case 1369:
case 3797:
case 3996:
case 2019:
case 2679:
case 141:
case 2937:
case 3054:
case 53:
case 155:
case 1892:
case 926:
case 120:
case 3321:
case 1220:
case 1476:
case 3527:
case 2641:
case 1547:
case 1173:
case 1379:
case 3145:
case 3699:
case 3659:
case 2074:
case 1455:
case 1231:
case 2868:
case 1515:
case 90:
case 1040:
case 1504:
case 3330:
case 1254:
case 1294:
case 2248:
case 3101:
case 2767:
case 3923:
case 605:
case 2605:
case 1839:
case 2064:
case 565:
case 2222:
case 25:
case 1386:
case 2777:
case 3782:
case 1489:
case 2181:
case 208:
case 3965:
case 3685:
case 3222:
case 2685:
case 1708:
case 1811:
case 1242:
case 3181:
case 486:
case 1862:
case 925:
case 424:
case 929:
case 950:
case 3966:
case 3686:
case 1807:
case 487:
case 1456:
case 1496:
case 1219:
case 391:
case 3605:
case 1399:
case 1193:
case 1228:
case 2923:
case 3614:
case 2699:
case 811:
case 4088:
case 3533:
case 157:
case 1872:
case 1780:
case 1621:
case 661:
case 3338:
case 2031:
case 3443:
case 1126:
case 598:
case 2860:
case 2956:
case 2996:
case 788:
case 3019:
case 3679:
case 566:
case 1423:
case 3028:
case 2797:
case 879:
case 1264:
case 4000:
case 1844:
case 2858:
case 1713:
case 3669:
case 3824:
case 2870:
case 433:
case 2811:
case 2242:
case 1965:
case 907:
case 478:
case 880:
case 4077:
case 3839:
case 2862:
case 3788:
case 2516:
case 2409:
case 3314:
case 906:
case 2228:
case 2359:
case 2153:
case 2193:
case 3504:
case 2306:
case 2456:
case 548:
case 3887:
case 87:
case 3040:
case 2630:
case 583:
case 1606:
case 1699:
case 4002:
case 1020:
case 3495:
case 1145:
case 3173:
case 536:
case 92:
case 3547:
case 2621:
case 2780:
case 2274:
case 3125:
case 359:
case 3852:
case 625:
case 629:
case 1321:
case 2423:
case 320:
case 1909:
case 1956:
case 1996:
case 1054:
case 1094:
case 2048:
case 2475:
case 3638:
case 777:
case 3163:
case 1797:
case 1757:
case 463:
case 1632:
case 1870:
case 2713:
case 2022:
case 174:
case 1858:
case 3102:
case 2984:
case 2829:
case 2664:
case 505:
case 3167:
case 1565:
case 2701:
case 871:
case 3543:
case 1575:
case 3177:
case 2182:
case 3006:
case 96:
case 1640:
case 3059:
case 2221:
case 3099:
case 1108:
case 2427:
case 2005:
case 665:
case 360:
case 297:
case 753:
case 3238:
case 2157:
case 819:
case 2628:
case 1927:
case 2079:
case 1038:
case 3947:
case 3654:
case 4063:
case 2041:
case 744:
case 214:
case 1113:
case 3883:
case 1328:
case 1299:
case 395:
case 1416:
case 434:
case 146:
case 2642:
case 3032:
case 2069:
case 3810:
case 273:
case 1484:
case 3746:
case 1342:
case 2565:
case 3188:
case 2753:
case 1086:
case 39:
case 1984:
case 1717:
case 3566:
case 3269:
case 527:
case 990:
case 2232:
case 640:
case 345:
case 330:
case 639:
case 1221:
case 635:
case 1916:
case 2523:
case 621:
case 3030:
case 2640:
case 1182:
case 2575:
case 93:
case 4081:
case 3447:
case 1005:
case 3320:
case 3576:
case 1427:
case 2374:
case 3331:
case 3415:
case 3648:
case 2038:
case 1619:
case 3205:
case 3555:
case 1197:
case 2509:
case 50:
case 3021:
case 2206:
case 1230:
case 114:
case 1041:
case 3354:
case 558:
case 2556:
case 4046:
case 2834:
case 3622:
case 173:
case 1745:
case 716:
case 2342:
case 969:
case 2484:
case 3286:
case 2726:
case 2891:
case 531:
case 1746:
case 4045:
case 2589:
case 550:
case 3891:
case 3726:
case 1322:
case 529:
case 771:
case 3834:
case 2725:
case 346:
case 1810:
case 3285:
case 3259:
case 199:
case 742:
case 3299:
case 195:
case 3416:
case 2214:
case 853:
case 1348:
case 347:
case 1654:
case 1947:
case 1433:
case 2648:
case 2555:
case 2763:
case 2100:
case 2933:
case 2447:
case 1915:
case 844:
case 2320:
case 966:
case 2576:
case 160:
case 719:
case 249:
case 1781:
case 1543:
case 2030:
case 3640:
case 4001:
case 3364:
case 967:
case 410:
case 2871:
case 3232:
case 2849:
case 3753:
case 3565:
case 1167:
case 29:
case 2322:
case 71:
case 2746:
case 2810:
case 561:
case 1725:
case 2032:
case 3642:
case 373:
case 1537:
case 314:
case 1404:
case 601:
case 3135:
case 983:
case 1021:
case 299:
case 295:
case 1205:
case 3157:
case 3197:
case 1595:
case 1648:
case 1415:
case 3619:
case 3079:
case 3427:
case 1576:
case 1320:
case 1861:
case 481:
case 1447:
case 2915:
case 3340:
case 1933:
case 817:
case 1241:
case 1812:
case 151:
case 2904:
case 3674:
case 149:
case 145:
case 2781:
case 3014:
case 3916:
case 2059:
case 368:
case 1269:
case 396:
case 1566:
case 3086:
case 937:
case 2167:
case 3701:
case 816:
case 3152:
case 3192:
case 4010:
case 2826:
case 2791:
case 2942:
case 453:
case 2089:
case 1265:
case 183:
case 3873:
case 1845:
case 3825:
case 1464:
case 2919:
case 3056:
case 1170:
case 2144:
case 1158:
case 1198:
case 3009:
case 2928:
case 660:
case 2327:
case 1474:
case 369:
case 832:
case 4083:
case 3931:
case 3538:
case 2616:
case 810:
case 2076:
case 2974:
case 2107:
case 3761:
case 3139:
case 267:
case 201:
case 1043:
case 2530:
case 1419:
case 1506:
case 1:
case 3712:
case 1599:
case 3023:
case 695:
case 574:
case 949:
case 1585:
case 930:
case 1817:
case 2172:
case 3771:
case 2964:
case 951:
case 3749:
case 64:
case 1384:
case 1801:
case 298:
case 2703:
case 1089:
case 718:
case 2160:
case 1791:
case 3569:
case 2845:
case 283:
case 339:
case 335:
case 340:
case 1144:
case 1521:
case 651:
case 1037:
case 3948:
case 3541:
case 1919:
case 3347:
case 94:
case 1440:
case 556:
case 3579:
case 1327:
case 1095:
case 3276:
case 3420:
case 2940:
case 4012:
case 764:
case 237:
case 1162:
case 3178:
case 3505:
case 1974:
case 3255:
case 3150:
case 2209:
case 2316:
case 3514:
case 2419:
case 416:
case 3237:
case 1111:
case 1530:
case 528:
case 3633:
case 4061:
case 36:
case 3168:
case 4049:
case 1172:
case 2817:
case 881:
case 4071:
case 166:
case 198:
case 3289:
case 960:
case 417:
case 2384:
case 2801:
case 1853:
case 2289:
case 1749:
case 997:
case 2586:
case 3718:
case 3801:
case 13:
case 3384:
case 559:
case 442:
case 1771:
case 336:
case 2168:
case 1712:
case 3559:
case 3428:
case 996:
case 190:
case 1448:
case 3296:
case 3256:
case 2454:
case 823:
case 2304:
case 2178:
case 1333:
case 3940:
case 2315:
case 2431:
case 1761:
case 471:
case 2347:
case 2579:
case 3198:
case 3158:
case 240:
case 3223:
case 235:
case 239:
case 710:
case 2783:
case 3170:
case 221:
case 1243:
case 2541:
case 1994:
case 2948:
case 415:
case 1825:
case 2266:
case 3845:
case 1873:
case 3703:
case 2922:
case 4034:
case 1192:
case 1152:
case 2422:
case 3893:
case 2749:
case 1289:
case 2187:
case 4018:
case 16:
case 3684:
case 3964:
case 3530:
case 3111:
case 1237:
case 2615:
case 1494:
case 367:
case 614:
case 1514:
case 290:
case 2023:
case 2712:
case 2920:
case 2761:
case 1150:
case 3616:
case 41:
case 3076:
case 1431:
case 2139:
case 1178:
case 2604:
case 1276:
case 3055:
case 265:
case 2863:
case 697:
case 2538:
case 1347:
case 2931:
case 2647:
case 3037:
case 121:
case 1124:
case 2096:
case 3919:
case 1541:
case 864:
case 3928:
case 135:
case 139:
case 946:
case 3521:
case 3144:
case 1569:
case 696:
case 668:
case 492:
case 4003:
case 2192:
case 2152:
case 947:
case 591:
case 781:
case 3826:
case 358:
case 4062:
case 3365:
case 628:
case 1986:
case 1739:
case 2750:
case 106:
case 3432:
case 1161:
case 3323:
case 1914:
case 225:
case 1016:
case 3930:
case 886:
case 704:
case 1888:
case 2247:
case 2479:
case 2376:
case 2520:
case 2768:
case 974:
case 479:
case 2938:
case 475:
case 2215:
case 1233:
case 2531:
case 2110:
case 3528:
case 3459:
case 3760:
case 3216:
case 3921:
case 833:
case 1548:
case 2594:
case 3356:
case 1941:
case 2337:
case 1752:
case 3897:
case 4044:
case 1800:
case 1969:
case 3485:
case 3798:
case 3758:
case 2183:
case 2389:
case 770:
case 530:
case 3770:
case 913:
case 549:
case 182:
case 545:
case 2084:
case 674:
case 599:
case 789:
case 2986:
case 595:
case 2112:
case 2161:
case 1469:
case 3665:
case 1750:
case 206:
case 1790:
case 1366:
case 1778:
case 2888:
case 1867:
case 3004:
case 1441:
case 3906:
case 131:
case 129:
case 3959:
case 125:
case 3999:
case 2016:
case 150:
case 2914:
case 480:
case 3227:
case 2905:
case 878:
case 1520:
case 1376:
case 3015:
case 207:
case 613:
case 261:
case 1247:
case 2171:
case 3134:
case 1405:
case 1395:
case 1027:
case 1531:
case 3696:
case 1110:
case 863:
case 2979:
case 1215:
case 2637:
case 3047:
case 3430:
case 2941:
case 1337:
case 1554:
case 2695:
case 305:
case 309:
case 3191:
case 3151:
case 3932:
case 4058:
case 1836:
case 2522:
case 22:
case 1724:
case 3813:
case 1183:
case 1389:
case 382:
case 32:
case 1798:
case 2744:
case 2813:
case 1835:
case 126:
case 597:
case 3969:
case 454:
case 4024:
case 1485:
case 2932:
case 1897:
case 1396:
case 1356:
case 691:
case 2430:
case 3752:
case 3792:
case 2191:
case 1459:
case 3655:
case 3695:
case 1921:
case 1216:
case 205:
case 972:
case 2609:
case 2134:
case 2047:
case 3637:
case 2656:
case 3233:
case 568:
case 2880:
case 127:
case 786:
case 3787:
case 88:
case 733:
case 2015:
case 1033:
case 2675:
case 3438:
case 2906:
case 1930:
case 3149:
case 4068:
case 3888:
case 2004:
case 1118:
case 702:
case 3914:
case 1323:
case 2999:
case 2959:
case 2665:
case 2985:
case 306:
case 3161:
case 2707:
case 2762:
case 1564:
case 3739:
case 3666:
case 3986:
case 4050:
case 2711:
case 3112:
case 4078:
case 514:
case 443:
case 3389:
case 3183:
case 2835:
case 1813:
case 2542:
case 284:
case 2758:
case 2284:
case 3486:
case 3724:
case 2770:
case 885:
case 889:
case 2857:
case 2897:
case 226:
case 2921:
case 109:
case 105:
case 2216:
case 2459:
case 2528:
case 1151:
case 2519:
case 1430:
case 3204:
case 2396:
case 2356:
case 538:
case 1880:
case 1696:
case 3531:
case 1656:
case 3938:
case 3405:
case 3027:
case 4092:
case 4052:
case 546:
case 1623:
case 908:
case 3768:
case 1772:
case 3376:
case 2574:
case 1227:
case 620:
case 659:
case 2323:
case 477:
case 2129:
case 655:
case 350:
case 3867:
case 2930:
case 2375:
case 3441:
case 3366:
case 1762:
case 3778:
case 991:
case 3469:
case 3790:
case 1985:
case 2432:
case 2882:
case 258:
case 3877:
case 4039:
case 1711:
case 476:
case 20:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744905601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,];
var gg_b = "1744905601/";

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
