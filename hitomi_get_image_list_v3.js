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
case 2132:
case 2519:
case 818:
case 3458:
case 3026:
case 2511:
case 1819:
case 3664:
case 2178:
case 3319:
case 127:
case 3168:
case 201:
case 2015:
case 115:
case 1155:
case 1077:
case 1457:
case 849:
case 2126:
case 3851:
case 2482:
case 843:
case 63:
case 3032:
case 3905:
case 3820:
case 3092:
case 3859:
case 1770:
case 2223:
case 1600:
case 478:
case 1359:
case 3078:
case 735:
case 3115:
case 40:
case 2449:
case 1351:
case 311:
case 1286:
case 2154:
case 2789:
case 3264:
case 1014:
case 1705:
case 170:
case 444:
case 690:
case 18:
case 1183:
case 3474:
case 1096:
case 167:
case 2742:
case 611:
case 2617:
case 2658:
case 3503:
case 3649:
case 3054:
case 4011:
case 1493:
case 2303:
case 451:
case 1200:
case 1433:
case 1830:
case 2590:
case 3682:
case 242:
case 3494:
case 2216:
case 2903:
case 1719:
case 1076:
case 2084:
case 528:
case 1711:
case 1504:
case 2113:
case 3027:
case 3990:
case 503:
case 509:
case 2294:
case 3930:
case 322:
case 3759:
case 3184:
case 3546:
case 1473:
case 1870:
case 1140:
case 1166:
case 4005:
case 2570:
case 941:
case 866:
case 2346:
case 1028:
case 662:
case 3688:
case 1456:
case 39:
case 1295:
case 2881:
case 3452:
case 129:
case 2616:
case 123:
case 180:
case 1951:
case 250:
case 805:
case 4070:
case 2505:
case 3162:
case 2001:
case 108:
case 2172:
case 1085:
case 2694:
case 2947:
case 330:
case 2252:
case 1424:
case 17:
case 3305:
case 2634:
case 2488:
case 3919:
case 1412:
case 826:
case 847:
case 3109:
case 3101:
case 622:
case 3072:
case 3461:
case 1962:
case 2479:
case 3577:
case 3469:
case 1766:
case 3151:
case 1315:
case 2261:
case 3159:
case 2377:
case 2555:
case 255:
case 1901:
case 466:
case 124:
case 3868:
case 2985:
case 1245:
case 1047:
case 1855:
case 1578:
case 2713:
case 711:
case 335:
case 888:
case 1119:
case 1532:
case 2997:
case 2644:
case 1368:
case 1190:
case 3536:
case 405:
case 3596:
case 73:
case 3701:
case 2928:
case 4055:
case 1130:
case 586:
case 635:
case 2396:
case 2669:
case 3671:
case 426:
case 1480:
case 164:
case 3762:
case 2953:
case 681:
case 2322:
case 1003:
case 2976:
case 959:
case 2244:
case 2738:
case 3383:
case 1984:
case 504:
case 2798:
case 3715:
case 3004:
case 3699:
case 3366:
case 371:
case 2376:
case 2827:
case 3983:
case 3340:
case 3553:
case 1767:
case 1170:
case 1221:
case 3884:
case 2566:
case 3576:
case 1840:
case 1443:
case 1866:
case 1229:
case 1250:
case 2353:
case 2726:
case 2813:
case 2410:
case 658:
case 175:
case 2996:
case 1755:
case 957:
case 3768:
case 443:
case 2608:
case 1046:
case 79:
case 80:
case 2792:
case 2914:
case 395:
case 3809:
case 844:
case 3585:
case 3801:
case 1968:
case 2397:
case 1407:
case 3089:
case 1621:
case 2499:
case 3537:
case 1629:
case 2439:
case 3862:
case 2872:
case 1915:
case 1572:
case 2977:
case 2838:
case 2208:
case 2754:
case 1598:
case 4040:
case 1362:
case 778:
case 1274:
case 1960:
case 919:
case 521:
case 435:
case 1789:
case 1742:
case 15:
case 3122:
case 267:
case 1464:
case 3665:
case 2036:
case 28:
case 948:
case 3293:
case 3233:
case 822:
case 3114:
case 3657:
case 1590:
case 534:
case 2200:
case 1623:
case 2830:
case 2022:
case 2890:
case 3904:
case 347:
case 3348:
case 1511:
case 2465:
case 2819:
case 1674:
case 2686:
case 1192:
case 1519:
case 1132:
case 2811:
case 2077:
case 2548:
case 215:
case 1217:
case 2155:
case 326:
case 974:
case 1015:
case 227:
case 1347:
case 3693:
case 3760:
case 3746:
case 862:
case 1482:
case 3520:
case 830:
case 3257:
case 2351:
case 3942:
case 3177:
case 3055:
case 305:
case 666:
case 2167:
case 150:
case 2951:
case 2581:
case 3342:
case 1889:
case 1138:
case 1616:
case 2920:
case 223:
case 2959:
case 2235:
case 2295:
case 2589:
case 229:
case 1881:
case 3224:
case 349:
case 1252:
case 27:
case 3435:
case 3381:
case 2542:
case 208:
case 3389:
case 1842:
case 700:
case 965:
case 890:
case 3703:
case 1488:
case 3656:
case 3137:
case 3185:
case 2663:
case 3212:
case 2730:
case 3673:
case 471:
case 4004:
case 3040:
case 1084:
case 269:
case 2695:
case 3304:
case 142:
case 263:
case 1216:
case 917:
case 1294:
case 1804:
case 925:
case 2504:
case 1113:
case 3846:
case 2166:
case 3860:
case 3463:
case 4089:
case 2140:
case 2870:
case 2473:
case 649:
case 4042:
case 1360:
case 3747:
case 2263:
case 1127:
case 643:
case 83:
case 1346:
case 906:
case 3896:
case 537:
case 30:
case 411:
case 3836:
case 3913:
case 2130:
case 3785:
case 766:
case 3797:
case 3103:
case 556:
case 2406:
case 3354:
case 1583:
case 593:
case 1772:
case 3822:
case 651:
case 2645:
case 2883:
case 2480:
case 989:
case 871:
case 1738:
case 2984:
case 2003:
case 1322:
case 3606:
case 2962:
case 1727:
case 351:
case 747:
case 2867:
case 1471:
case 3147:
case 2526:
case 4054:
case 1261:
case 2740:
case 2315:
case 3776:
case 3019:
case 1269:
case 1826:
case 3392:
case 285:
case 60:
case 9:
case 2047:
case 2855:
case 224:
case 2245:
case 198:
case 1555:
case 155:
case 2592:
case 1051:
case 2368:
case 1644:
case 858:
case 3445:
case 2532:
case 2119:
case 1892:
case 1020:
case 1059:
case 2968:
case 49:
case 4013:
case 835:
case 388:
case 3509:
case 992:
case 3736:
case 2650:
case 300:
case 1439:
case 3005:
case 2309:
case 3932:
case 582:
case 743:
case 1385:
case 1431:
case 2301:
case 3207:
case 1491:
case 749:
case 3837:
case 2783:
case 1977:
case 92:
case 3562:
case 1872:
case 1142:
case 3372:
case 2538:
case 2598:
case 1754:
case 1189:
case 2362:
case 2105:
case 1898:
case 1181:
case 881:
case 2767:
case 3243:
case 2384:
case 3450:
case 2527:
case 1540:
case 3876:
case 1353:
case 2250:
case 2443:
case 3160:
case 2221:
case 2170:
case 1778:
case 3828:
case 462:
case 2513:
case 96:
case 1104:
case 275:
case 1996:
case 1410:
case 600:
case 1732:
case 597:
case 2060:
case 3070:
case 3313:
case 1792:
case 2046:
case 1911:
case 801:
case 791:
case 1098:
case 1038:
case 2137:
case 1919:
case 2656:
case 2703:
case 3412:
case 2212:
case 2673:
case 218:
case 1109:
case 3037:
case 3581:
case 3097:
case 3951:
case 329:
case 2224:
case 502:
case 3589:
case 380:
case 2487:
case 3235:
case 323:
case 1625:
case 3542:
case 162:
case 2435:
case 1305:
case 2495:
case 3424:
case 1162:
case 2389:
case 2846:
case 1751:
case 3166:
case 2176:
case 3473:
case 438:
case 680:
case 2256:
case 19:
case 1013:
case 3263:
case 1688:
case 2747:
case 67:
case 3028:
case 3711:
case 2040:
case 2066:
case 1494:
case 2304:
case 3635:
case 3695:
case 1434:
case 3719:
case 1990:
case 3053:
case 3687:
case 3504:
case 2803:
case 2400:
case 1390:
case 554:
case 2233:
case 1054:
case 2293:
case 1330:
case 71:
case 903:
case 2114:
case 1503:
case 1649:
case 2136:
case 615:
case 2083:
case 3022:
case 3200:
case 1970:
case 13:
case 3286:
case 4020:
case 2122:
case 3036:
case 266:
case 3183:
case 2665:
case 498:
case 3675:
case 455:
case 3096:
case 1032:
case 2981:
case 2551:
case 1423:
case 1092:
case 1859:
case 3418:
case 2520:
case 785:
case 2746:
case 1282:
case 2257:
case 111:
case 2218:
case 68:
case 2847:
case 205:
case 3359:
case 3320:
case 2177:
case 968:
case 3465:
case 2348:
case 247:
case 2475:
case 3811:
case 1458:
case 731:
case 2067:
case 3548:
case 3077:
case 327:
case 1319:
case 2265:
case 1967:
case 2562:
case 1408:
case 2338:
case 3572:
case 1862:
case 2722:
case 3915:
case 2926:
case 2372:
case 4084:
case 3538:
case 94:
case 442:
case 1231:
case 3407:
case 288:
case 3968:
case 2885:
case 2796:
case 1955:
case 1239:
case 195:
case 675:
case 708:
case 1081:
case 2992:
case 3650:
case 3629:
case 200:
case 77:
case 3301:
case 1089:
case 2897:
case 3621:
case 1768:
case 2828:
case 3755:
case 1528:
case 596:
case 2313:
case 553:
case 769:
case 1691:
case 2243:
case 1631:
case 1340:
case 4062:
case 559:
case 171:
case 1715:
case 691:
case 2429:
case 2450:
case 3229:
case 2954:
case 1884:
case 3170:
case 1576:
case 3443:
case 610:
case 2160:
case 2090:
case 2030:
case 3883:
case 3480:
case 3645:
case 4015:
case 940:
case 3984:
case 1940:
case 3554:
case 2280:
case 1966:
case 2913:
case 20:
case 4068:
case 685:
case 3130:
case 1701:
case 624:
case 1671:
case 2797:
case 2737:
case 557:
case 78:
case 1679:
case 3909:
case 838:
case 952:
case 3047:
case 2568:
case 1402:
case 2728:
case 324:
case 976:
case 244:
case 2378:
case 2680:
case 3111:
case 1355:
case 1469:
case 1815:
case 664:
case 61:
case 2147:
case 1461:
case 746:
case 251:
case 3526:
case 1784:
case 727:
case 1159:
case 1120:
case 2019:
case 2776:
case 715:
case 3315:
case 3766:
case 1151:
case 331:
case 1860:
case 1463:
case 1256:
case 2184:
case 2759:
case 88:
case 1176:
case 2751:
case 3570:
case 519:
case 1747:
case 1273:
case 3127:
case 2370:
case 2434:
case 1066:
case 491:
case 3294:
case 222:
case 2225:
case 3804:
case 3748:
case 3234:
case 1137:
case 3488:
case 2038:
case 2098:
case 846:
case 2109:
case 1948:
case 1673:
case 1212:
case 4046:
case 1224:
case 2452:
case 3505:
case 350:
case 3889:
case 4060:
case 3172:
case 475:
case 3842:
case 2162:
case 3634:
case 3252:
case 230:
case 738:
case 143:
case 1381:
case 3009:
case 262:
case 1520:
case 3482:
case 87:
case 3126:
case 1989:
case 2249:
case 1551:
case 290:
case 2905:
case 2859:
case 2092:
case 2820:
case 1981:
case 2032:
case 1760:
case 2241:
case 3441:
case 105:
case 1847:
case 1055:
case 1218:
case 3068:
case 211:
case 829:
case 2115:
case 2078:
case 2282:
case 823:
case 1942:
case 65:
case 2458:
case 3192:
case 2417:
case 3519:
case 1348:
case 147:
case 2026:
case 3704:
case 1265:
case 3015:
case 464:
case 2168:
case 41:
case 126:
case 2319:
case 3217:
case 517:
case 431:
case 1114:
case 1293:
case 2641:
case 2390:
case 1233:
case 3623:
case 601:
case 994:
case 3303:
case 863:
case 3530:
case 2682:
case 1083:
case 1657:
case 869:
case 1136:
case 3960:
case 3781:
case 2970:
case 2264:
case 23:
case 2474:
case 485:
case 3658:
case 1122:
case 35:
case 3996:
case 2528:
case 3410:
case 956:
case 972:
case 1828:
case 3778:
case 3104:
case 47:
case 3328:
case 638:
case 423:
case 480:
case 3608:
case 2210:
case 3732:
case 3914:
case 1070:
case 2639:
case 1853:
case 1429:
case 271:
case 2004:
case 2699:
case 583:
case 2631:
case 742:
case 2340:
case 1421:
case 2983:
case 1243:
case 2691:
case 3827:
case 999:
case 1160:
case 3566:
case 2884:
case 993:
case 864:
case 3726:
case 3540:
case 1584:
case 1722:
case 3142:
case 3977:
case 1398:
case 4053:
case 2408:
case 831:
case 3208:
case 3838:
case 3181:
case 1372:
case 2610:
case 3189:
case 2585:
case 560:
case 1736:
case 750:
case 4028:
case 1796:
case 295:
case 1501:
case 2239:
case 532:
case 2291:
case 1643:
case 1885:
case 2042:
case 1509:
case 2231:
case 3431:
case 3385:
case 885:
case 1837:
case 3491:
case 1714:
case 3439:
case 2537:
case 824:
case 48:
case 2868:
case 355:
case 467:
case 3878:
case 3555:
case 3713:
case 2402:
case 3020:
case 3059:
case 3202:
case 235:
case 592:
case 3832:
case 3644:
case 3051:
case 1680:
case 1378:
case 3937:
case 4022:
case 151:
case 3727:
case 1147:
case 2469:
case 573:
case 3479:
case 579:
case 810:
case 1753:
case 2279:
case 3826:
case 1776:
case 3269:
case 1019:
case 2120:
case 3377:
case 2159:
case 1998:
case 2367:
case 1011:
case 2444:
case 939:
case 415:
case 1354:
case 2762:
case 1030:
case 1822:
case 4077:
case 0:
case 3854:
case 3976:
case 3322:
case 1280:
case 3738:
case 3244:
case 698:
case 655:
case 3314:
case 587:
case 3396:
case 1814:
case 2679:
case 3336:
case 2671:
case 1103:
case 875:
case 2514:
case 1797:
case 1676:
case 2507:
case 884:
case 109:
case 103:
case 2684:
case 3401:
case 1112:
case 2201:
case 1539:
case 3307:
case 2831:
case 128:
case 2945:
case 2891:
case 1653:
case 569:
case 2052:
case 563:
case 1706:
case 1591:
case 2472:
case 796:
case 3298:
case 806:
case 1961:
case 3808:
case 3152:
case 2498:
case 4:
case 2262:
case 3613:
case 4043:
case 3272:
case 2016:
case 2779:
case 3769:
case 865:
case 1697:
case 2284:
case 3550:
case 3529:
case 1944:
case 2771:
case 2427:
case 3980:
case 3761:
case 1685:
case 3227:
case 1843:
case 1173:
case 3484:
case 2034:
case 2543:
case 523:
case 2329:
case 2350:
case 1466:
case 529:
case 3025:
case 2094:
case 2609:
case 1253:
case 302:
case 3702:
case 3116:
case 483:
case 3698:
case 489:
case 3194:
case 1228:
case 2125:
case 1063:
case 2662:
case 1707:
case 515:
case 1214:
case 3064:
case 3306:
case 3626:
case 2615:
case 546:
case 654:
case 2739:
case 2921:
case 2164:
case 641:
case 2580:
case 3254:
case 1000:
case 2668:
case 1344:
case 46:
case 3943:
case 930:
case 2141:
case 1579:
case 1467:
case 2871:
case 4080:
case 2149:
case 58:
case 2879:
case 1614:
case 1369:
case 813:
case 1157:
case 221:
case 1636:
case 2215:
case 2058:
case 736:
case 99:
case 3468:
case 3049:
case 479:
case 3907:
case 473:
case 234:
case 2345:
case 3041:
case 3802:
case 3654:
case 3232:
case 145:
case 1455:
case 2023:
case 2492:
case 3117:
case 3158:
case 354:
case 2432:
case 3082:
case 4006:
case 2268:
case 116:
case 239:
case 233:
case 474:
case 2335:
case 3099:
case 3587:
case 4073:
case 3242:
case 3957:
case 3595:
case 3289:
case 4056:
case 2524:
case 2442:
case 353:
case 3281:
case 3774:
case 3108:
case 1812:
case 2131:
case 3965:
case 2199:
case 1588:
case 814:
case 887:
case 2008:
case 1793:
case 3312:
case 1107:
case 1765:
case 3204:
case 1316:
case 176:
case 282:
case 3894:
case 2825:
case 3642:
case 152:
case 3758:
case 702:
case 1021:
case 935:
case 2110:
case 3689:
case 3993:
case 1394:
case 3356:
case 1873:
case 1470:
case 510:
case 3563:
case 1718:
case 2573:
case 873:
case 1246:
case 653:
case 2556:
case 2749:
case 2363:
case 1260:
case 3010:
case 3648:
case 2963:
case 3752:
case 531:
case 417:
case 1374:
case 3144:
case 2864:
case 1724:
case 1180:
case 14:
case 3956:
case 3874:
case 657:
case 832:
case 3500:
case 860:
case 995:
case 1712:
case 3393:
case 1647:
case 1916:
case 1833:
case 636:
case 2300:
case 585:
case 2533:
case 877:
case 524:
case 2593:
case 3858:
case 3575:
case 465:
case 3817:
case 741:
case 1411:
case 3794:
case 3912:
case 2725:
case 1419:
case 186:
case 237:
case 2375:
case 3079:
case 336:
case 3365:
case 2061:
case 3102:
case 1358:
case 3071:
case 820:
case 889:
case 1857:
case 104:
case 971:
case 3420:
case 2987:
case 2557:
case 2518:
case 3924:
case 1549:
case 299:
case 1756:
case 1323:
case 2002:
case 2995:
case 2220:
case 2171:
case 1541:
case 2849:
case 564:
case 2179:
case 1427:
case 2637:
case 2156:
case 3821:
case 2697:
case 3453:
case 1016:
case 2466:
case 2253:
case 1094:
case 1609:
case 1543:
case 1350:
case 1329:
case 905:
case 1601:
case 2173:
case 732:
case 550:
case 2440:
case 3163:
case 2510:
case 648:
case 3428:
case 3056:
case 1810:
case 453:
case 3310:
case 4031:
case 4091:
case 2063:
case 2228:
case 926:
case 2297:
case 2237:
case 3331:
case 3485:
case 4010:
case 348:
case 2807:
case 203:
case 2035:
case 2902:
case 1507:
case 3024:
case 2706:
case 2591:
case 2087:
case 1839:
case 789:
case 194:
case 2599:
case 2112:
case 1831:
case 313:
case 2780:
case 1472:
case 1262:
case 3012:
case 966:
case 841:
case 1438:
case 3187:
case 2571:
case 3729:
case 3561:
case 1149:
case 2908:
case 1871:
case 55:
case 714:
case 76:
case 2277:
case 3371:
case 2743:
case 121:
case 3379:
case 2157:
case 2118:
case 3065:
case 2369:
case 207:
case 2075:
case 2696:
case 2455:
case 134:
case 1478:
case 3502:
case 2165:
case 3991:
case 384:
case 1268:
case 3683:
case 3175:
case 317:
case 3999:
case 1432:
case 3255:
case 325:
case 1074:
case 3910:
case 3496:
case 2133:
case 2086:
case 684:
case 3100:
case 3667:
case 1731:
case 617:
case 2296:
case 1615:
case 625:
case 161:
case 3422:
case 3033:
case 2483:
case 802:
case 4079:
case 1164:
case 943:
case 2344:
case 2000:
case 606:
case 2222:
case 1454:
case 2525:
case 3:
case 3043:
case 182:
case 377:
case 3325:
case 1404:
case 2394:
case 3605:
case 2050:
case 3516:
case 2021:
case 1573:
case 1782:
case 2757:
case 2873:
case 3863:
case 3460:
case 951:
case 2260:
case 2974:
case 683:
case 689:
case 3121:
case 1556:
case 1749:
case 3150:
case 3129:
case 1986:
case 2246:
case 3552:
case 1489:
case 1481:
case 1335:
case 1395:
case 139:
case 3887:
case 320:
case 2352:
case 383:
case 3205:
case 2824:
case 1387:
case 1442:
case 3949:
case 1199:
case 6:
case 90:
case 836:
case 2958:
case 1512:
case 4025:
case 2917:
case 1139:
case 1888:
case 1191:
case 677:
case 719:
case 1975:
case 1131:
case 3700:
case 857:
case 2107:
case 2660:
case 2646:
case 1008:
case 692:
case 3988:
case 286:
case 172:
case 3558:
case 387:
case 156:
case 2358:
case 896:
case 1448:
case 1069:
case 3219:
case 137:
case 3763:
case 1518:
case 2952:
case 853:
case 62:
case 3341:
case 2773:
case 3630:
case 2582:
case 2818:
case 204:
case 2857:
case 1882:
case 3523:
case 1179:
case 1251:
case 4064:
case 3382:
case 717:
case 3447:
case 1220:
case 193:
case 784:
case 1995:
case 1841:
case 1002:
case 2756:
case 2374:
case 3787:
case 32:
case 1963:
case 454:
case 1386:
case 2564:
case 3886:
case 2724:
case 379:
case 24:
case 3735:
case 373:
case 1864:
case 3230:
case 392:
case 2994:
case 2712:
case 3925:
case 614:
case 3800:
case 2647:
case 687:
case 555:
case 3080:
case 1651:
case 1533:
case 900:
case 1300:
case 1659:
case 2916:
case 1620:
case 2833:
case 894:
case 704:
case 1802:
case 1041:
case 3455:
case 2502:
case 1907:
case 2931:
case 217:
case 1082:
case 1278:
case 2175:
case 316:
case 2018:
case 3165:
case 2991:
case 1158:
case 1117:
case 2939:
case 1545:
case 2999:
case 141:
case 1869:
case 1226:
case 4044:
case 3571:
case 2729:
case 2750:
case 2569:
case 3467:
case 2721:
case 3579:
case 3361:
case 2267:
case 1123:
case 3743:
case 3277:
case 3075:
case 307:
case 53:
case 2065:
case 3157:
case 2379:
case 206:
case 1692:
case 2033:
case 2186:
case 1254:
case 2093:
case 1632:
case 1844:
case 923:
case 980:
case 3483:
case 3344:
case 3222:
case 2655:
case 1306:
case 3214:
case 2910:
case 645:
case 3133:
case 493:
case 499:
case 3193:
case 3677:
case 74:
case 2667:
case 3236:
case 3806:
case 2414:
case 3296:
case 2428:
case 861:
case 1702:
case 1672:
case 1906:
case 3063:
case 915:
case 2073:
case 274:
case 1194:
case 628:
case 2821:
case 1343:
case 1761:
case 3156:
case 3637:
case 776:
case 2240:
case 2266:
case 530:
case 2829:
case 1025:
case 3843:
case 3440:
case 2163:
case 3685:
case 1484:
case 3173:
case 219:
case 1298:
case 1238:
case 1744:
case 2971:
case 2135:
case 3969:
case 2979:
case 2508:
case 1462:
case 2012:
case 3628:
case 2187:
case 3308:
case 3807:
case 3297:
case 2391:
case 1401:
case 740:
case 309:
case 522:
case 3676:
case 2399:
case 2666:
case 3653:
case 3087:
case 3591:
case 3706:
case 2497:
case 1307:
case 3539:
case 2437:
case 3599:
case 328:
case 1627:
case 3773:
case 3582:
case 1823:
case 1420:
case 2341:
case 3247:
case 3952:
case 2690:
case 2523:
case 745:
case 1451:
case 461:
case 3857:
case 2382:
case 1357:
case 1161:
case 3323:
case 1924:
case 716:
case 2517:
case 26:
case 386:
case 3419:
case 2145:
case 2988:
case 3865:
case 1817:
case 1858:
case 1575:
case 157:
case 3411:
case 3358:
case 2211:
case 1102:
case 1071:
case 2219:
case 1365:
case 1079:
case 3934:
case 2290:
case 4017:
case 2403:
case 4058:
case 2800:
case 292:
case 535:
case 882:
case 2080:
case 3833:
case 3203:
case 3490:
case 1752:
case 2006:
case 3374:
case 2886:
case 2611:
case 2574:
case 1586:
case 273:
case 434:
case 910:
case 1956:
case 34:
case 3724:
case 4052:
case 1563:
case 3718:
case 3757:
case 2446:
case 2863:
case 3143:
case 3873:
case 2270:
case 3856:
case 1010:
case 931:
case 2129:
case 2150:
case 2534:
case 2:
case 985:
case 352:
case 3525:
case 924:
case 376:
case 1834:
case 1204:
case 3765:
case 2775:
case 3029:
case 1933:
case 558:
case 260:
case 1681:
case 3394:
case 595:
case 2325:
case 1993:
case 2516:
case 3958:
case 3917:
case 4094:
case 3588:
case 837:
case 676:
case 2700:
case 3812:
case 196:
case 3107:
case 3733:
case 2670:
case 4016:
case 3646:
case 872:
case 1587:
case 2982:
case 1091:
case 1957:
case 899:
case 709:
case 3405:
case 1099:
case 1604:
case 1852:
case 1774:
case 728:
case 1281:
case 283:
case 2205:
case 3352:
case 220:
case 2949:
case 159:
case 1289:
case 3164:
case 3921:
case 2708:
case 1422:
case 1093:
case 1186:
case 1544:
case 1033:
case 1655:
case 3454:
case 1283:
case 2626:
case 526:
case 2306:
case 2064:
case 3739:
case 404:
case 4045:
case 3615:
case 1667:
case 3731:
case 1100:
case 3506:
case 942:
case 334:
case 3478:
case 1502:
case 2049:
case 2292:
case 2232:
case 2041:
case 828:
case 254:
case 125:
case 1939:
case 2117:
case 3492:
case 3268:
case 1018:
case 1683:
case 799:
case 809:
case 1845:
case 1991:
case 2278:
case 803:
case 793:
case 1721:
case 1569:
case 3879:
case 1729:
case 566:
case 2869:
case 3149:
case 2415:
case 1065:
case 3215:
case 3426:
case 1379:
case 3182:
case 737:
case 1267:
case 3058:
case 2462:
case 113:
case 2744:
case 2238:
case 1135:
case 2808:
case 1195:
case 2298:
case 2152:
case 2613:
case 95:
case 1012:
case 3262:
case 452:
case 1399:
case 1024:
case 2401:
case 1640:
case 148:
case 1485:
case 1331:
case 1437:
case 2627:
case 3188:
case 612:
case 845:
case 1497:
case 3209:
case 3413:
case 2702:
case 1056:
case 2698:
case 1428:
case 2638:
case 694:
case 3125:
case 2194:
case 440:
case 312:
case 174:
case 2769:
case 543:
case 549:
case 1266:
case 3016:
case 1850:
case 1453:
case 1240:
case 3427:
case 2529:
case 2550:
case 782:
case 2343:
case 2484:
case 1163:
case 2227:
case 3321:
case 3609:
case 3350:
case 3329:
case 1476:
case 3543:
case 407:
case 544:
case 656:
case 1800:
case 2393:
case 1925:
case 1230:
case 3788:
case 672:
case 3300:
case 3620:
case 876:
case 3533:
case 3044:
case 3651:
case 1787:
case 1006:
case 416:
case 1364:
case 1795:
case 2956:
case 179:
case 2144:
case 1735:
case 761:
case 1574:
case 445:
case 1523:
case 1349:
case 1763:
case 3518:
case 3987:
case 1341:
case 2420:
case 2459:
case 393:
case 3171:
case 3259:
case 3935:
case 4086:
case 2161:
case 2924:
case 2318:
case 840:
case 2357:
case 356:
case 4000:
case 2817:
case 2248:
case 114:
case 187:
case 1558:
case 1517:
case 2912:
case 2794:
case 2365:
case 2079:
case 2716:
case 1219:
case 2102:
case 3061:
case 1211:
case 468:
case 3888:
case 2965:
case 397:
case 3975:
case 3199:
case 3139:
case 3008:
case 1670:
case 3335:
case 2099:
case 2604:
case 333:
case 2324:
case 2039:
case 2918:
case 2957:
case 1982:
case 2587:
case 2535:
case 3442:
case 253:
case 259:
case 1949:
case 1007:
case 1205:
case 3764:
case 183:
case 2108:
case 1941:
case 2774:
case 794:
case 3387:
case 189:
case 2723:
case 633:
case 2356:
case 428:
case 1863:
case 3782:
case 3573:
case 84:
case 409:
case 3556:
case 3986:
case 4035:
case 3741:
case 2373:
case 712:
case 1270:
case 3363:
case 3825:
case 3900:
case 382:
case 697:
case 1043:
case 3110:
case 1516:
case 588:
case 3404:
case 2681:
case 2993:
case 1325:
case 1605:
case 2816:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1749841202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,];
var gg_b = "1749841202/";

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
