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
case 517:
case 2686:
case 410:
case 420:
case 3050:
case 1068:
case 1564:
case 3370:
case 1933:
case 1607:
case 3653:
case 109:
case 2655:
case 4061:
case 2939:
case 1797:
case 1896:
case 2336:
case 67:
case 36:
case 3341:
case 2361:
case 190:
case 2860:
case 3840:
case 1418:
case 1213:
case 612:
case 3581:
case 2490:
case 2180:
case 2119:
case 2427:
case 3868:
case 4026:
case 3188:
case 3293:
case 680:
case 2802:
case 3906:
case 3193:
case 857:
case 1071:
case 1351:
case 770:
case 475:
case 2456:
case 244:
case 346:
case 2929:
case 3981:
case 934:
case 1782:
case 3672:
case 958:
case 1643:
case 816:
case 2357:
case 623:
case 2058:
case 1040:
case 888:
case 1305:
case 826:
case 1421:
case 2938:
case 2787:
case 2725:
case 208:
case 76:
case 3723:
case 463:
case 38:
case 3065:
case 1069:
case 1072:
case 1352:
case 2063:
case 3530:
case 1480:
case 2855:
case 2118:
case 2231:
case 2413:
case 3853:
case 454:
case 2474:
case 1807:
case 3246:
case 4000:
case 325:
case 2166:
case 3920:
case 114:
case 3997:
case 2928:
case 868:
case 1256:
case 3210:
case 3289:
case 1285:
case 2976:
case 1185:
case 3499:
case 833:
case 2121:
case 3582:
case 789:
case 1432:
case 1517:
case 3308:
case 746:
case 1053:
case 370:
case 636:
case 3342:
case 2362:
case 2379:
case 2059:
case 2792:
case 3929:
case 246:
case 1738:
case 3912:
case 3456:
case 2816:
case 1944:
case 4009:
case 133:
case 2193:
case 2906:
case 3802:
case 3295:
case 2498:
case 2188:
case 1535:
case 431:
case 1199:
case 3132:
case 960:
case 3554:
case 3058:
case 3378:
case 80:
case 3357:
case 979:
case 1624:
case 667:
case 2669:
case 3649:
case 936:
case 2981:
case 1645:
case 2717:
case 1659:
case 3939:
case 4041:
case 2653:
case 2506:
case 2370:
case 1048:
case 1347:
case 1587:
case 1776:
case 1525:
case 2404:
case 3180:
case 3490:
case 3119:
case 1115:
case 2581:
case 1858:
case 3860:
case 3361:
case 3601:
case 861:
case 1634:
case 1992:
case 1001:
case 2499:
case 3511:
case 687:
case 3538:
case 1488:
case 3976:
case 1283:
case 1183:
case 1298:
case 1493:
case 991:
case 1863:
case 1824:
case 2289:
case 2733:
case 126:
case 188:
case 3928:
case 980:
case 4042:
case 116:
case 2668:
case 923:
case 3602:
case 913:
case 1086:
case 3379:
case 2342:
case 634:
case 270:
case 1055:
case 1375:
case 744:
case 2616:
case 2007:
case 658:
case 3121:
case 2043:
case 3528:
case 520:
case 2597:
case 417:
case 1049:
case 881:
case 2065:
case 510:
case 28:
case 3744:
case 951:
case 890:
case 3660:
case 2640:
case 1658:
case 3911:
case 1677:
case 3787:
case 3576:
case 2146:
case 698:
case 215:
case 3886:
case 4094:
case 2246:
case 912:
case 3413:
case 3218:
case 456:
case 3118:
case 3855:
case 1591:
case 3131:
case 2530:
case 1859:
case 1104:
case 820:
case 3369:
case 2349:
case 964:
case 3052:
case 3372:
case 3211:
case 1365:
case 3238:
case 3433:
case 581:
case 2435:
case 1094:
case 1598:
case 3138:
case 2510:
case 2589:
case 156:
case 3799:
case 2657:
case 590:
case 127:
case 340:
case 3918:
case 3931:
case 618:
case 2182:
case 2492:
case 3521:
case 2862:
case 686:
case 2946:
case 883:
case 1814:
case 992:
case 509:
case 628:
case 3228:
case 2800:
case 3894:
case 2301:
case 2425:
case 1852:
case 3128:
case 2661:
case 1998:
case 2989:
case 3276:
case 1983:
case 1406:
case 2386:
case 2713:
case 2774:
case 4001:
case 255:
case 3670:
case 3715:
case 1722:
case 3353:
case 1008:
case 426:
case 1481:
case 3531:
case 1191:
case 1042:
case 1291:
case 488:
case 2075:
case 2230:
case 993:
case 0:
case 3316:
case 1673:
case 339:
case 3608:
case 3783:
case 2727:
case 3642:
case 937:
case 3798:
case 2302:
case 1599:
case 2756:
case 1851:
case 1070:
case 2348:
case 1235:
case 1350:
case 445:
case 2047:
case 3809:
case 2878:
case 1482:
case 1192:
case 4048:
case 1721:
case 4002:
case 2993:
case 2106:
case 468:
case 203:
case 1999:
case 2737:
case 2206:
case 2988:
case 3995:
case 3870:
case 1187:
case 3051:
case 1287:
case 1225:
case 3340:
case 2181:
case 433:
case 1515:
case 1766:
case 3522:
case 3841:
case 50:
case 1718:
case 2790:
case 3932:
case 2600:
case 1396:
case 3989:
case 1927:
case 3661:
case 2641:
case 1412:
case 1956:
case 3487:
case 3197:
case 3800:
case 3444:
case 3075:
case 3355:
case 3230:
case 1062:
case 2518:
case 2014:
case 3130:
case 2566:
case 1647:
case 94:
case 2715:
case 2921:
case 3774:
case 3386:
case 1793:
case 138:
case 2609:
case 2799:
case 3678:
case 1603:
case 3510:
case 3435:
case 1345:
case 2433:
case 2211:
case 605:
case 637:
case 2372:
case 966:
case 2369:
case 3349:
case 2808:
case 3282:
case 702:
case 532:
case 3946:
case 2966:
case 3879:
case 163:
case 684:
case 3862:
case 3120:
case 3492:
case 3182:
case 4072:
case 2931:
case 2918:
case 4069:
case 1990:
case 240:
case 461:
case 2212:
case 621:
case 2051:
case 2371:
case 2870:
case 2129:
case 1847:
case 611:
case 557:
case 2995:
case 3988:
case 3206:
case 3993:
case 896:
case 2694:
case 2932:
case 2704:
case 693:
case 2580:
case 175:
case 588:
case 3181:
case 3281:
case 1078:
case 3360:
case 3003:
case 2067:
case 3047:
case 817:
case 2239:
case 2368:
case 3593:
case 1411:
case 2595:
case 374:
case 3084:
case 1438:
case 1233:
case 3302:
case 2139:
case 3756:
case 2798:
case 490:
case 2642:
case 3727:
case 110:
case 918:
case 4068:
case 2919:
case 928:
case 3826:
case 120:
case 653:
case 2532:
case 3878:
case 4016:
case 2254:
case 2417:
case 3857:
case 856:
case 1932:
case 1704:
case 796:
case 3731:
case 1519:
case 1005:
case 3766:
case 2746:
case 444:
case 1340:
case 2574:
case 2358:
case 1212:
case 3144:
case 3225:
case 1229:
case 855:
case 1371:
case 1870:
case 3497:
case 3187:
case 2428:
case 1112:
case 3244:
case 2264:
case 3125:
case 4058:
case 282:
case 985:
case 210:
case 2913:
case 2974:
case 1980:
case 3721:
case 220:
case 1922:
case 2803:
case 3482:
case 3192:
case 1417:
case 1154:
case 58:
case 2061:
case 1239:
case 2133:
case 3070:
case 3235:
case 3350:
case 2233:
case 3851:
case 176:
case 2411:
case 1139:
case 3599:
case 1798:
case 1642:
case 2710:
case 3614:
case 895:
case 3673:
case 139:
case 1608:
case 3042:
case 2079:
case 1014:
case 803:
case 3307:
case 3191:
case 262:
case 1353:
case 546:
case 1073:
case 3008:
case 1715:
case 1566:
case 3722:
case 2647:
case 3719:
case 1921:
case 2684:
case 4034:
case 3983:
case 4059:
case 2985:
case 3998:
case 1176:
case 2334:
case 3852:
case 641:
case 294:
case 731:
case 1808:
case 3814:
case 2454:
case 263:
case 1966:
case 2117:
case 2875:
case 802:
case 1521:
case 1918:
case 317:
case 1931:
case 929:
case 4024:
case 140:
case 238:
case 1609:
case 1799:
case 2556:
case 2788:
case 2603:
case 3795:
case 2439:
case 2585:
case 1111:
case 2363:
case 3343:
case 2000:
case 3598:
case 3365:
case 1238:
case 3583:
case 847:
case 1369:
case 2292:
case 629:
case 2041:
case 3061:
case 738:
case 2420:
case 754:
case 619:
case 3803:
case 1826:
case 147:
case 320:
case 4050:
case 3036:
case 3913:
case 310:
case 3710:
case 3789:
case 46:
case 1662:
case 1785:
case 3675:
case 763:
case 840:
case 2599:
case 3411:
case 3438:
case 1593:
case 3574:
case 1360:
case 3358:
case 446:
case 1281:
case 3377:
case 83:
case 3746:
case 2766:
case 1491:
case 2515:
case 2009:
case 1181:
case 906:
case 1836:
case 1790:
case 1600:
case 2396:
case 103:
case 2999:
case 3476:
case 3847:
case 2125:
case 2244:
case 3264:
case 2187:
case 2497:
case 3884:
case 3164:
case 2144:
case 876:
case 673:
case 2732:
case 4065:
case 2651:
case 3990:
case 195:
case 1492:
case 3875:
case 1946:
case 1879:
case 3117:
case 48:
case 1862:
case 3217:
case 2814:
case 1220:
case 415:
case 3345:
case 2583:
case 710:
case 2094:
case 3324:
case 3363:
case 3000:
case 425:
case 1510:
case 1626:
case 2795:
case 354:
case 1678:
case 3556:
case 2605:
case 3793:
case 338:
case 1713:
case 2719:
case 155:
case 1546:
case 3647:
case 2722:
case 672:
case 544:
case 2504:
case 362:
case 3590:
case 2307:
case 2481:
case 782:
case 3079:
case 61:
case 604:
case 1355:
case 1487:
case 1301:
case 1425:
case 1661:
case 1989:
case 3927:
case 577:
case 4007:
case 257:
case 3650:
case 1930:
case 2754:
case 1342:
case 2055:
case 2375:
case 1616:
case 169:
case 1520:
case 3053:
case 1582:
case 2001:
case 3127:
case 3865:
case 2488:
case 2283:
case 2198:
case 1872:
case 3185:
case 3495:
case 3285:
case 750:
case 2863:
case 3843:
case 1289:
case 3227:
case 226:
case 877:
case 4075:
case 288:
case 2739:
case 3156:
case 1146:
case 3781:
case 115:
case 125:
case 1246:
case 539:
case 709:
case 3807:
case 3290:
case 1853:
case 1415:
case 2591:
case 2104:
case 3419:
case 3190:
case 2859:
case 1530:
case 3480:
case 781:
case 1394:
case 361:
case 1597:
case 3137:
case 3696:
case 3072:
case 3237:
case 3352:
case 1065:
case 18:
case 495:
case 1723:
case 1764:
case 2658:
case 671:
case 2712:
case 2677:
case 2729:
case 6:
case 1309:
case 53:
case 714:
case 70:
case 268:
case 3305:
case 2303:
case 3040:
case 2060:
case 2663:
case 1096:
case 3782:
case 1672:
case 1717:
case 2645:
case 3720:
case 2987:
case 2738:
case 146:
case 2711:
case 4003:
case 2925:
case 1816:
case 189:
case 3964:
case 2944:
case 3533:
case 1906:
case 1288:
case 1498:
case 2199:
case 2410:
case 1868:
case 1404:
case 808:
case 3213:
case 3418:
case 1581:
case 3431:
case 390:
case 3174:
case 4084:
case 942:
case 699:
case 245:
case 2992:
case 2446:
case 2935:
case 907:
case 2728:
case 232:
case 1653:
case 3933:
case 3523:
case 540:
case 3068:
case 447:
case 3367:
case 2347:
case 2587:
case 2776:
case 2525:
case 1871:
case 2190:
case 1118:
case 2422:
case 397:
case 2290:
case 502:
case 3204:
case 1266:
case 4052:
case 574:
case 3729:
case 3677:
case 1576:
case 1787:
case 1938:
case 1045:
case 2072:
case 2069:
case 3049:
case 2696:
case 1300:
case 1063:
case 547:
case 1024:
case 2373:
case 2517:
case 889:
case 3055:
case 503:
case 733:
case 1379:
case 846:
case 43:
case 1221:
case 3754:
case 959:
case 2650:
case 357:
case 768:
case 20:
case 1735:
case 3739:
case 326:
case 2227:
case 2843:
case 3183:
case 3298:
case 1511:
case 3198:
case 801:
case 1034:
case 1976:
case 2865:
case 3845:
case 3446:
case 4067:
case 2730:
case 281:
case 345:
case 3992:
case 476:
case 1601:
case 1954:
case 1336:
case 2174:
case 1219:
case 1361:
case 1222:
case 2113:
case 2431:
case 3858:
case 2274:
case 88:
case 3877:
case 1512:
case 3525:
case 3384:
case 1686:
case 3776:
case 1437:
case 2367:
case 815:
case 2523:
case 2564:
case 2068:
case 3048:
case 971:
case 2607:
case 2016:
case 3728:
case 3659:
case 797:
case 4051:
case 3645:
case 1649:
case 250:
case 3624:
case 2643:
case 3663:
case 1077:
case 1058:
case 3303:
case 3060:
case 1378:
case 2305:
case 3199:
case 2850:
case 1848:
case 3410:
case 1427:
case 555:
case 1485:
case 1802:
case 3299:
case 333:
case 2923:
case 4005:
case 2964:
case 3944:
case 870:
case 3925:
case 1929:
case 3711:
case 144:
case 3738:
case 3987:
case 3441:
case 2559:
case 712:
case 2390:
case 1017:
case 722:
case 1553:
case 1318:
case 1331:
case 77:
case 3664:
case 2644:
case 473:
case 1366:
case 3740:
case 1972:
case 3771:
case 15:
case 2337:
case 2038:
case 2534:
case 1100:
case 1897:
case 3470:
case 2152:
case 751:
case 1467:
case 3175:
case 404:
case 1279:
case 1321:
case 2114:
case 2173:
case 1405:
case 723:
case 944:
case 472:
case 3907:
case 2635:
case 287:
case 2692:
case 669:
case 3768:
case 2934:
case 2702:
case 3543:
case 485:
case 2028:
case 2385:
case 2524:
case 360:
case 3398:
case 2327:
case 19:
case 780:
case 3097:
case 1569:
case 1572:
case 3383:
case 379:
case 1136:
case 908:
case 1236:
case 3753:
case 3315:
case 1322:
case 1319:
case 1380:
case 2054:
case 2558:
case 1540:
case 2786:
case 3147:
case 2167:
case 835:
case 807:
case 2825:
case 2887:
case 3284:
case 2400:
case 37:
case 3184:
case 3494:
case 3247:
case 2039:
case 2844:
case 1806:
case 322:
case 4074:
case 66:
case 2691:
case 3950:
case 1968:
case 1630:
case 1940:
case 1126:
case 2977:
case 465:
case 1226:
case 1473:
case 736:
case 843:
case 1414:
case 1257:
case 3442:
case 646:
case 2479:
case 1157:
case 391:
case 689:
case 3996:
case 267:
case 3550:
case 1023:
case 1568:
case 541:
case 2835:
case 3833:
case 1395:
case 3617:
case 1516:
case 1:
case 1620:
case 1765:
case 1682:
case 387:
case 1955:
case 3426:
case 3959:
case 2633:
case 989:
case 946:
case 2275:
case 2030:
case 1108:
case 3114:
case 859:
case 8:
case 1242:
case 3457:
case 2175:
case 3273:
case 1986:
case 3545:
case 2565:
case 1811:
case 1838:
case 2097:
case 3327:
case 2543:
case 441:
case 3524:
case 3385:
case 3028:
case 3076:
case 236:
case 1901:
case 3748:
case 358:
case 3692:
case 1612:
case 3625:
case 2740:
case 3687:
case 1586:
case 3436:
case 1346:
case 3644:
case 2623:
case 107:
case 2507:
case 608:
case 2304:
case 2020:
case 529:
case 548:
case 519:
case 3461:
case 1447:
case 1828:
case 1294:
case 3534:
case 3038:
case 3252:
case 1501:
case 2771:
case 3945:
case 2965:
case 4004:
case 142:
case 1876:
case 2103:
case 291:
case 1475:
case 2442:
case 2081:
case 1109:
case 1854:
case 504:
case 734:
case 3105:
case 1611:
case 572:
case 3958:
case 2772:
case 677:
case 2617:
case 1763:
case 1025:
case 969:
case 2399:
case 1087:
case 3151:
case 970:
case 585:
case 1839:
case 2550:
case 1548:
case 1044:
case 3313:
case 85:
case 3786:
case 3558:
case 3054:
case 1092:
case 798:
case 98:
case 3755:
case 1948:
case 3701:
case 915:
case 222:
case 1734:
case 1902:
case 3844:
case 3267:
case 2247:
case 2494:
case 3887:
case 1812:
case 2147:
case 3825:
case 55:
case 3019:
case 1509:
case 2392:
case 2656:
case 2503:
case 366:
case 718:
case 1832:
case 2762:
case 4035:
case 330:
case 3683:
case 3708:
case 1773:
case 873:
case 253:
case 1970:
case 1621:
case 2449:
case 292:
case 3551:
case 3472:
case 1895:
case 1102:
case 2250:
case 1381:
case 3277:
case 3453:
case 3815:
case 2455:
case 3158:
case 81:
case 1819:
case 2903:
case 4025:
case 211:
case 2296:
case 59:
case 1909:
case 34:
case 2700:
case 3794:
case 1618:
case 2690:
case 252:
case 3951:
case 3604:
case 2547:
case 1666:
case 2093:
case 1570:
case 3364:
case 3323:
case 2584:
case 885:
case 3095:
case 2046:
case 237:
case 2778:
case 2757:
case 902:
case 599:
case 2575:
case 1542:
case 3514:
case 442:
case 3031:
case 1320:
case 3573:
case 1004:
case 3245:
case 3163:
case 3883:
case 2885:
case 435:
case 3898:
case 2827:
case 3468:
case 2448:
case 1450:
case 1632:
case 284:
case 3416:
case 2856:
case 349:
case 318:
case 766:
case 947:
case 1994:
case 3914:
case 3973:
case 2975:
case 2761:
case 1496:
case 1186:
case 1866:
case 2890:
case 63:
case 1818:
case 5:
case 559:
case 1831:
case 1255:
case 1330:
case 443:
case 2107:
case 3259:
case 3021:
case 2010:
case 4091:
case 1680:
case 3615:
case 1767:
case 2613:
case 2674:
case 106:
case 321:
case 4023:
case 4064:
case 2905:
case 93:
case 1978:
case 3196:
case 1957:
case 806:
case 1459:
case 2177:
case 1926:
case 543:
case 3455:
case 2453:
case 2258:
case 1240:
case 3813:
case 4:
case 2032:
case 603:
case 3874:
case 1329:
case 1271:
case 1312:
case 2095:
case 3584:
case 3344:
case 2323:
case 3547:
case 1646:
case 2794:
case 4033:
case 2683:
case 499:
case 2698:
case 1689:
case 1610:
case 1526:
case 3762:
case 364:
case 542:
case 3656:
case 1557:
case 3392:
case 2080:
case 2019:
case 2505:
case 737:
case 705:
case 400:
case 2551:
case 2472:
case 1888:
case 2469:
case 3449:
case 2333:
case 3150:
case 3947:
case 1116:
case 148:
case 353:
case 119:
case 1216:
case 3984:
case 2021:
case 3107:
case 3391:
case 2259:
case 2440:
case 752:
case 1458:
case 1253:
case 1477:
case 3207:
case 3736:
case 3890:
case 49:
case 3975:
case 185:
case 2741:
case 2973:
case 2914:
case 11:
case 1784:
case 1056:
case 2615:
case 2770:
case 12:
case 655:
case 2234:
case 3837:
case 172:
case 1328:
case 3010:
case 1027:
case 2317:
case 2031:
case 2514:
case 3726:
case 45:
case 753:
case 3757:
case 3778:
case 305:
case 1693:
case 3046:
case 2066:
case 2709:
case 2952:
case 2416:
case 384:
case 2263:
case 3448:
case 2468:
case 1810:
case 2224:
case 3827:
case 2898:
case 1037:
case 1272:
case 3402:
case 3143:
case 1311:
case 2784:
case 204:
case 2056:
case 1615:
case 3622:
case 3619:
case 272:
case 3083:
case 1234:
case 821:
case 2328:
case 3098:
case 3594:
case 3397:
case 580:
case 458:
case 852:
case 1021:
case 2153:
case 3330:
case 1440:
case 3818:
case 2253:
case 3155:
case 513:
case 3831:
case 1804:
case 3866:
case 2846:
case 285:
case 341:
case 4028:
case 3496:
case 1973:
case 1914:
case 920:
case 864:
case 149:
case 1952:
case 118:
case 3632:
case 3751:
case 910:
case 2810:
case 1263:
case 1224:
case 2172:
case 2169:
case 627:
case 2272:
case 3249:
case 2269:
case 1883:
case 1245:
case 1163:
case 2311:
case 1317:
case 522:
case 1573:
case 1018:
case 1514:
case 1031:
case 656:
case 3542:
case 2562:
case 498:
case 57:
case 983:
case 3705:
case 1709:
case 3099:
case 2329:
case 962:
case 1095:
case 631:
case 3570:
case 1364:
case 1323:
case 2171:
case 1567:
case 1951:
case 1604:
case 3631:
case 3752:
case 3306:
case 14:
case 3909:
case 2536:
case 2957:
case 4029:
case 3541:
case 2459:
case 2926:
case 1158:
case 3160:
case 994:
case 536:
case 1453:
case 1258:
case 706:
case 2240:
case 3260:
case 3381:
case 1032:
case 1277:
case 2268:
case 2893:
case 2339:
case 963:
case 2888:
case 1472:
case 3202:
case 3895:
case 1899:
case 3148:
case 2168:
case 3465:
case 248:
case 2116:
case 2216:
case 954:
case 3714:
case 1683:
case 1708:
case 2961:
case 1698:
case 2526:
case 1742:
case 938:
case 2578:
case 2074:
case 2936:
case 2354:
case 2557:
case 3015:
case 1080:
case 1019:
case 2249:
case 3269:
case 830:
case 3037:
case 3272:
case 3169:
case 2450:
case 1827:
case 2751:
case 2632:
case 4082:
case 1856:
case 2994:
case 2705:
case 3703:
case 3688:
case 2821:
case 748:
case 1726:
case 654:
case 2542:
case 3562:
case 2382:
case 2320:
case 1010:
case 3328:
case 2083:
case 372:
case 2619:
case 32:
case 2767:
case 3747:
case 2622:
case 1613:
case 206:
case 3784:
case 1674:
case 479:
case 2908:
case 460:
case 2496:
case 385:
case 241:
case 3846:
case 3962:
case 436:
case 84:
case 2155:
case 3458:
case 1984:
case 329:
case 1947:
case 3116:
case 348:
case 153:
case 927:
case 3445:
case 192:
case 1449:
case 610:
case 2102:
case 3893:
case 3424:
case 2248:
case 3268:
case 412:
case 849:
case 1392:
case 2509:
case 1656:
case 164:
case 2832:
case 3578:
case 1779:
case 3526:
case 598:
case 3775:
case 773:
case 2773:
case 956:
case 491:
case 2306:
case 1690:
case 2666:
case 3171:
case 1093:
case 3434:
case 1325:
case 1584:
case 3271:
case 1401:
case 2407:
case 413:
case 2381:
case 704:
case 2260:
case 1813:
case 2822:
case 3140:
case 2160:
case 3926:
case 2880:
case 2819:
case 772:
case 111:
case 1486:
case 1196:
case 1903:
case 1637:
case 121:
case 1296:
case 1769:
case 1006:
case 1617:
case 3516:
case 3620:
case 2745:
case 3743:
case 2763:
case 411:
case 3395:
case 2502:
case 2087:
case 650:
case 2393:
case 2044:
case 2548:
case 2475:
case 1442:
case 2209:
case 3157:
case 834:
case 2854:
case 3414:
case 858:
case 2109:
case 1408:
case 180:
case 493:
case 988:
case 2638:
case 4088:
case 2960:
case 112:
case 1950:
case 3968:
case 2948:
case 464:
case 2902:
case 690:
case 3806:
case 122:
case 1247:
case 1864:
case 17:
case 1184:
case 1494:
case 2170:
case 2829:
case 1284:
case 3033:
case 3916:
case 399:
case 586:
case 2560:
case 3540:
case 549:
case 3881:
case 75:
case 3319:
case 3380:
case 2092:
case 3261:
case 1753:
case 3236:
case 2759:
case 2628:
case 300:
case 1716:
case 179:
case 1565:
case 3569:
case 2811:
case 3451:
case 1097:
case 1543:
case 160:
case 1398:
case 243:
case 1768:
case 2955:
case 2639:
case 4089:
case 1907:
case 1633:
case 867:
case 3953:
case 54:
case 2108:
case 3405:
case 3279:
case 1817:
case 3162:
case 2403:
case 3882:
case 759:
case 437:
case 2447:
case 2294:
case 4046:
case 3200:
case 1470:
case 2194:
case 3100:
case 2501:
case 35:
case 1943:
case 945:
case 1965:
case 3681:
case 3969:
case 2876:
case 3972:
case 566:
case 2777:
case 932:
case 2346:
case 1623:
case 3331:
case 1507:
case 1304:
case 3553:
case 484:
case 1020:
case 3796:
case 3830:
case 3812:
case 299:
case 1167:
case 2916:
case 1825:
case 2033:
case 3170:
case 505:
case 735:
case 3035:
case 707:
case 1039:
case 1844:
case 1267:
case 2806:
case 3734:
case 1701:
case 2968:
case 4019:
case 1755:
case 2136:
case 2697:
case 2707:
case 2322:
case 2261:
case 3092:
case 2380:
case 1374:
case 584:
case 3676:
case 3839:
case 2568:
case 3044:
case 167:
case 1835:
case 1251:
case 1012:
case 3388:
case 2743:
case 3724:
case 2971:
case 4032:
case 3745:
case 2765:
case 2682:
case 1749:
case 924:
case 1958:
case 3611:
case 1977:
case 2226:
case 914:
case 2278:
case 1105:
case 633:
case 2157:
case 1462:
case 1892:
case 3475:
case 2972:
case 3949:
case 2969:
case 3876:
case 1945:
case 1963:
case 1924:
case 1011:
case 3194:
case 851:
case 2897:
case 4066:
case 3447:
case 198:
case 428:
case 2796:
case 3555:
case 1891:
case 2553:
case 2017:
case 449:
case 418:
case 2606:
case 2318:
case 1644:
case 307:
case 3346:
case 3777:
case 3586:
case 592:
case 1436:
case 3758:
case 1760:
case 950:
case 1692:
case 2750:
case 343:
case 134:
case 3901:
case 891:
case 1563:
case 1385:
case 3389:
case 521:
case 29:
case 511:
case 657:
case 3549:
case 2882:
case 552:
case 1478:
case 616:
case 2162:
case 1457:
case 2321:
case 1114:
case 2262:
case 3091:
case 2405:
case 3108:
case 2953:
case 1959:
case 1635:
case 3639:
case 187:
case 3955:
case 593:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1752998402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,];
var gg_b = "1752998402/";

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
