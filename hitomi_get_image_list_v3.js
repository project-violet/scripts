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
case 63:
case 1558:
case 139:
case 2006:
case 757:
case 2668:
case 600:
case 2030:
case 3161:
case 3513:
case 557:
case 1618:
case 3476:
case 1172:
case 2136:
case 2738:
case 3651:
case 783:
case 889:
case 947:
case 2158:
case 2756:
case 3374:
case 2105:
case 3555:
case 3093:
case 2832:
case 3744:
case 583:
case 3419:
case 511:
case 2112:
case 3173:
case 1587:
case 1866:
case 3792:
case 711:
case 3724:
case 2431:
case 1024:
case 2816:
case 441:
case 681:
case 625:
case 3171:
case 2256:
case 1139:
case 2949:
case 3466:
case 1652:
case 1293:
case 556:
case 3059:
case 2187:
case 1512:
case 2678:
case 2389:
case 2879:
case 3659:
case 2184:
case 3858:
case 3805:
case 2863:
case 3450:
case 1251:
case 871:
case 3132:
case 3519:
case 3800:
case 3411:
case 1210:
case 2265:
case 3836:
case 1052:
case 3752:
case 1334:
case 2770:
case 1702:
case 1405:
case 3002:
case 282:
case 747:
case 2861:
case 1624:
case 629:
case 1850:
case 2340:
case 3576:
case 1400:
case 2472:
case 2775:
case 4037:
case 1584:
case 3218:
case 2980:
case 1855:
case 1710:
case 1598:
case 3010:
case 2765:
case 3887:
case 3377:
case 284:
case 911:
case 89:
case 1003:
case 1644:
case 3703:
case 3252:
case 2871:
case 746:
case 297:
case 1412:
case 2760:
case 2325:
case 1487:
case 465:
case 3701:
case 3691:
case 1001:
case 885:
case 3116:
case 956:
case 4086:
case 2635:
case 2943:
case 3812:
case 17:
case 451:
case 2270:
case 2796:
case 3227:
case 2630:
case 660:
case 679:
case 2068:
case 3556:
case 2130:
case 2755:
case 780:
case 3262:
case 2544:
case 1385:
case 1875:
case 473:
case 1273:
case 2135:
case 2750:
case 3616:
case 1478:
case 1633:
case 3191:
case 2802:
case 302:
case 172:
case 4049:
case 1761:
case 1945:
case 892:
case 466:
case 1072:
case 603:
case 955:
case 2036:
case 3063:
case 1763:
case 2427:
case 3679:
case 3982:
case 1631:
case 2934:
case 2058:
case 1506:
case 1271:
case 1530:
case 3322:
case 1109:
case 2250:
case 894:
case 3868:
case 3460:
case 1261:
case 2012:
case 3394:
case 1343:
case 501:
case 949:
case 2853:
case 2255:
case 2403:
case 2208:
case 838:
case 2447:
case 3465:
case 3762:
case 2851:
case 1341:
case 2524:
case 1039:
case 2815:
case 137:
case 2418:
case 3357:
case 3632:
case 4029:
case 2509:
case 2401:
case 174:
case 3354:
case 945:
case 2178:
case 1435:
case 634:
case 2290:
case 364:
case 2346:
case 2687:
case 3231:
case 1430:
case 1152:
case 698:
case 4043:
case 2295:
case 2986:
case 2527:
case 1639:
case 4007:
case 1838:
case 2719:
case 407:
case 2444:
case 2552:
case 3102:
case 555:
case 2891:
case 3199:
case 3673:
case 4041:
case 3830:
case 3438:
case 755:
case 2612:
case 561:
case 3233:
case 1031:
case 3731:
case 2424:
case 4080:
case 3110:
case 2859:
case 3596:
case 1349:
case 2795:
case 2605:
case 2492:
case 4021:
case 2501:
case 2409:
case 406:
case 2276:
case 2518:
case 663:
case 2790:
case 843:
case 1989:
case 2636:
case 1118:
case 3016:
case 1716:
case 1269:
case 959:
case 3560:
case 3733:
case 362:
case 3661:
case 676:
case 3565:
case 31:
case 2503:
case 1913:
case 3936:
case 1154:
case 2225:
case 341:
case 3277:
case 508:
case 125:
case 2963:
case 3637:
case 3958:
case 2220:
case 1955:
case 3129:
case 1302:
case 2614:
case 414:
case 181:
case 2283:
case 2740:
case 1911:
case 3327:
case 320:
case 3104:
case 1950:
case 1664:
case 3546:
case 286:
case 292:
case 175:
case 1674:
case 2365:
case 412:
case 3777:
case 1077:
case 2720:
case 3347:
case 287:
case 238:
case 2971:
case 2781:
case 2360:
case 113:
case 294:
case 3526:
case 2422:
case 2725:
case 542:
case 3301:
case 3267:
case 2457:
case 253:
case 2245:
case 4093:
case 3912:
case 2843:
case 1353:
case 100:
case 895:
case 2396:
case 2804:
case 2588:
case 3185:
case 754:
case 3121:
case 1391:
case 2628:
case 4010:
case 2829:
case 3446:
case 2969:
case 2542:
case 2454:
case 351:
case 40:
case 1976:
case 1142:
case 2289:
case 3774:
case 2356:
case 793:
case 3086:
case 1237:
case 944:
case 691:
case 1667:
case 1064:
case 1122:
case 3309:
case 1966:
case 62:
case 1826:
case 2014:
case 2617:
case 752:
case 2979:
case 3274:
case 1286:
case 3141:
case 2648:
case 317:
case 2789:
case 1938:
case 1054:
case 2376:
case 688:
case 637:
case 1332:
case 718:
case 2148:
case 3641:
case 1517:
case 1249:
case 2182:
case 2993:
case 3540:
case 2319:
case 3930:
case 1729:
case 3906:
case 404:
case 2474:
case 94:
case 1369:
case 1167:
case 1704:
case 1694:
case 4071:
case 622:
case 3004:
case 2226:
case 3607:
case 3797:
case 1889:
case 3331:
case 250:
case 315:
case 4061:
case 1749:
case 3049:
case 1528:
case 2959:
case 1642:
case 2464:
case 103:
case 3623:
case 1316:
case 4063:
case 3581:
case 3297:
case 3814:
case 1204:
case 672:
case 110:
case 2577:
case 366:
case 3520:
case 3685:
case 2308:
case 828:
case 3021:
case 1845:
case 590:
case 2902:
case 1970:
case 3085:
case 1785:
case 1482:
case 2350:
case 271:
case 4079:
case 3222:
case 1840:
case 790:
case 1448:
case 1243:
case 95:
case 3817:
case 2999:
case 2313:
case 2834:
case 3445:
case 41:
case 3882:
case 3372:
case 458:
case 2467:
case 4016:
case 1363:
case 1088:
case 1241:
case 1417:
case 3425:
case 1373:
case 221:
case 3604:
case 3794:
case 1743:
case 897:
case 3043:
case 1280:
case 3007:
case 2953:
case 126:
case 3420:
case 878:
case 1285:
case 2477:
case 1996:
case 464:
case 3362:
case 3137:
case 1514:
case 3483:
case 3288:
case 2910:
case 3041:
case 1825:
case 4069:
case 240:
case 2915:
case 3242:
case 1960:
case 307:
case 1057:
case 1223:
case 285:
case 1313:
case 2042:
case 958:
case 227:
case 2723:
case 1467:
case 704:
case 2363:
case 2088:
case 2241:
case 3952:
case 3305:
case 2174:
case 3358:
case 2417:
case 1355:
case 933:
case 1574:
case 3434:
case 1308:
case 548:
case 1311:
case 4090:
case 45:
case 301:
case 418:
case 1999:
case 2243:
case 2361:
case 2448:
case 232:
case 2207:
case 3626:
case 2965:
case 2514:
case 2371:
case 2654:
case 2960:
case 2820:
case 3877:
case 3646:
case 3387:
case 234:
case 2223:
case 2883:
case 2022:
case 380:
case 2164:
case 2094:
case 2743:
case 19:
case 2221:
case 964:
case 1953:
case 4076:
case 345:
case 3537:
case 1477:
case 1114:
case 699:
case 3486:
case 762:
case 1319:
case 2582:
case 1474:
case 2729:
case 2369:
case 2622:
case 758:
case 189:
case 68:
case 2097:
case 1226:
case 2694:
case 2704:
case 2167:
case 2332:
case 2657:
case 533:
case 1376:
case 1886:
case 1567:
case 948:
case 3384:
case 349:
case 2956:
case 839:
case 695:
case 3944:
case 2249:
case 3909:
case 1128:
case 1726:
case 3183:
case 3398:
case 2229:
case 902:
case 764:
case 3120:
case 2688:
case 2379:
case 150:
case 3125:
case 4055:
case 564:
case 1837:
case 1246:
case 1390:
case 3181:
case 2976:
case 930:
case 3404:
case 1338:
case 697:
case 3681:
case 1289:
case 90:
case 3580:
case 2677:
case 3429:
case 1356:
case 3521:
case 2074:
case 2393:
case 2237:
case 2786:
case 2919:
case 3897:
case 3214:
case 1804:
case 279:
case 3306:
case 1969:
case 4065:
case 1454:
case 408:
case 1979:
case 1682:
case 2286:
case 2737:
case 628:
case 1849:
case 4070:
case 2990:
case 2157:
case 1594:
case 1789:
case 3089:
case 1557:
case 357:
case 2194:
case 512:
case 2122:
case 682:
case 3714:
case 1014:
case 3449:
case 2826:
case 229:
case 3640:
case 56:
case 712:
case 3717:
case 2908:
case 1370:
case 1488:
case 3040:
case 1740:
case 1283:
case 914:
case 493:
case 2664:
case 1375:
case 1885:
case 3228:
case 824:
case 2950:
case 1554:
case 3423:
case 186:
case 2399:
case 3045:
case 70:
case 1745:
case 1442:
case 3146:
case 3748:
case 872:
case 2913:
case 6:
case 1597:
case 3888:
case 2154:
case 225:
case 1082:
case 3782:
case 3485:
case 2734:
case 3421:
case 3842:
case 346:
case 836:
case 3126:
case 1028:
case 1973:
case 837:
case 888:
case 1457:
case 2353:
case 4038:
case 3894:
case 23:
case 3549:
case 1783:
case 3083:
case 3962:
case 3441:
case 1396:
case 1365:
case 2310:
case 3857:
case 138:
case 213:
case 1360:
case 3443:
case 2315:
case 3248:
case 3081:
case 3025:
case 1841:
case 2127:
case 3298:
case 1444:
case 3493:
case 3019:
case 1719:
case 1266:
case 199:
case 907:
case 566:
case 1891:
case 1552:
case 2216:
case 621:
case 3175:
case 1612:
case 2304:
case 2435:
case 1178:
case 3076:
case 1687:
case 685:
case 1290:
case 3491:
case 1084:
case 2856:
case 3784:
case 3599:
case 3974:
case 860:
case 2406:
case 773:
case 480:
case 640:
case 3502:
case 2430:
case 1986:
case 2639:
case 3515:
case 2269:
case 3824:
case 2118:
case 3459:
case 2033:
case 3066:
case 3655:
case 1766:
case 1219:
case 3510:
case 3608:
case 3809:
case 3196:
case 3611:
case 2103:
case 2031:
case 3553:
case 318:
case 401:
case 2147:
case 723:
case 2779:
case 1605:
case 1795:
case 2349:
case 1937:
case 3165:
case 1859:
case 1276:
case 3613:
case 523:
case 2989:
case 919:
case 3284:
case 1790:
case 1518:
case 3090:
case 567:
case 906:
case 3013:
case 1713:
case 455:
case 3591:
case 3852:
case 1036:
case 2535:
case 3700:
case 1000:
case 507:
case 3705:
case 650:
case 3402:
case 2506:
case 3758:
case 1058:
case 3156:
case 236:
case 3055:
case 3666:
case 1130:
case 3008:
case 2321:
case 973:
case 1106:
case 1544:
case 2940:
case 825:
case 915:
case 2478:
case 3967:
case 131:
case 2273:
case 2945:
case 2870:
case 2341:
case 195:
case 3977:
case 2468:
case 1592:
case 2860:
case 83:
case 3258:
case 3205:
case 2771:
case 1524:
case 2981:
case 1418:
case 3803:
case 3676:
case 3787:
case 1684:
case 3236:
case 1509:
case 689:
case 2773:
case 2896:
case 2109:
case 3559:
case 719:
case 3415:
case 1447:
case 923:
case 1208:
case 2124:
case 1255:
case 3619:
case 390:
case 506:
case 967:
case 4046:
case 3410:
case 1211:
case 3801:
case 2983:
case 0:
case 22:
case 1921:
case 917:
case 2458:
case 196:
case 2253:
case 2405:
case 2702:
case 2692:
case 3463:
case 1340:
case 2850:
case 4089:
case 291:
case 3075:
case 1775:
case 2811:
case 2436:
case 1980:
case 2808:
case 1345:
case 3348:
case 832:
case 3569:
case 2215:
case 1184:
case 2251:
case 1923:
case 1078:
case 1265:
case 3988:
case 3872:
case 3382:
case 876:
case 3862:
case 2133:
case 834:
case 1275:
case 2487:
case 2299:
case 965:
case 1943:
case 877:
case 3994:
case 2018:
case 1635:
case 1531:
case 2753:
case 3579:
case 27:
case 1873:
case 3768:
case 1606:
case 1796:
case 3195:
case 1765:
case 3656:
case 1462:
case 2598:
case 3065:
case 2710:
case 826:
case 2644:
case 2003:
case 1320:
case 411:
case 1760:
case 2412:
case 2715:
case 909:
case 3839:
case 541:
case 916:
case 3190:
case 3957:
case 1325:
case 2751:
case 1738:
case 3660:
case 970:
case 4083:
case 2946:
case 3056:
case 1158:
case 717:
case 447:
case 2793:
case 2044:
case 1832:
case 368:
case 2647:
case 4081:
case 2505:
case 1668:
case 1869:
case 3155:
case 1006:
case 2558:
case 3706:
case 3108:
case 2484:
case 2601:
case 2536:
case 905:
case 1035:
case 3432:
case 3997:
case 2819:
case 2139:
case 1256:
case 2498:
case 4045:
case 2652:
case 1949:
case 2895:
case 1187:
case 1238:
case 2759:
case 3831:
case 1389:
case 551:
case 1678:
case 2512:
case 765:
case 3675:
case 803:
case 1112:
case 709:
case 2866:
case 2587:
case 2926:
case 686:
case 692:
case 446:
case 516:
case 509:
case 3314:
case 3670:
case 1539:
case 2627:
case 1816:
case 2024:
case 3571:
case 2615:
case 3738:
case 1954:
case 3136:
case 900:
case 2550:
case 3100:
case 1561:
case 1469:
case 2555:
case 3105:
case 2610:
case 2508:
case 1665:
case 2884:
case 453:
case 2419:
case 3832:
case 2744:
case 2163:
case 168:
case 529:
case 2653:
case 2224:
case 1730:
case 3668:
case 1155:
case 3929:
case 1696:
case 3006:
case 729:
case 2161:
case 2513:
case 212:
case 2476:
case 2209:
case 3904:
case 867:
case 3572:
case 438:
case 487:
case 3256:
case 492:
case 646:
case 3562:
case 2466:
case 981:
case 3187:
case 4017:
case 1416:
case 193:
case 3389:
case 3879:
case 3678:
case 2490:
case 1675:
case 4082:
case 3112:
case 2173:
case 1235:
case 579:
case 2495:
case 2792:
case 1833:
case 1314:
case 3816:
case 1230:
case 2724:
case 3431:
case 3861:
case 1317:
case 382:
case 396:
case 2727:
case 1119:
case 53:
case 3985:
case 2201:
case 1532:
case 1075:
case 700:
case 3980:
case 2413:
case 2805:
case 1348:
case 142:
case 929:
case 2659:
case 1461:
case 1176:
case 3863:
case 3078:
case 775:
case 3923:
case 2836:
case 1988:
case 1872:
case 1382:
case 2519:
case 713:
case 2247:
case 819:
case 2203:
case 2752:
case 2455:
case 1922:
case 1862:
case 1328:
case 1994:
case 3943:
case 611:
case 2590:
case 3635:
case 2718:
case 3907:
case 2116:
case 3270:
case 1471:
case 581:
case 3439:
case 20:
case 2812:
case 2595:
case 230:
case 1096:
case 3198:
case 2377:
case 1195:
case 3941:
case 3765:
case 3462:
case 1656:
case 2747:
case 108:
case 1060:
case 2015:
case 1839:
case 1516:
case 3381:
case 1957:
case 3871:
case 1190:
case 2051:
case 3713:
case 1013:
case 2948:
case 1591:
case 1736:
case 3000:
case 2772:
case 1700:
case 1287:
case 2982:
case 2193:
case 598:
case 734:
case 3427:
case 2679:
case 2878:
case 2063:
case 2388:
case 820:
case 1402:
case 1695:
case 777:
case 2239:
case 1758:
case 1156:
case 3755:
case 3452:
case 3130:
case 3698:
case 1008:
case 2917:
case 3899:
case 3106:
case 3544:
case 1011:
case 3711:
case 526:
case 2538:
case 331:
case 1050:
case 2616:
case 1212:
case 202:
case 2191:
case 763:
case 1977:
case 3592:
case 14:
case 3815:
case 727:
case 2739:
case 1453:
case 2071:
case 1205:
case 3524:
case 3418:
case 2357:
case 204:
case 3401:
case 2159:
case 3684:
case 3810:
case 3509:
case 2928:
case 3250:
case 1451:
case 2322:
case 3853:
case 776:
case 38:
case 1712:
case 3447:
case 3208:
case 3403:
case 1818:
case 805:
case 1410:
case 1493:
case 2835:
case 3266:
case 934:
case 865:
case 2456:
case 1170:
case 3891:
case 3552:
case 645:
case 510:
case 2673:
case 680:
case 440:
case 2806:
case 2199:
case 2233:
case 1175:
case 851:
case 2397:
case 2438:
case 503:
case 3893:
case 2575:
case 1076:
case 3776:
case 2354:
case 926:
case 3687:
case 3346:
case 3290:
case 3084:
case 421:
case 703:
case 816:
case 2570:
case 2231:
case 2671:
case 601:
case 2560:
case 817:
case 1515:
case 2016:
case 1650:
case 1964:
case 1824:
case 1459:
case 1551:
case 2733:
case 1892:
case 3766:
case 1655:
case 1066:
case 2914:
case 2565:
case 1608:
case 1510:
case 1809:
case 1196:
case 963:
case 2153:
case 1611:
case 21:
case 258:
case 927:
case 118:
case 2079:
case 15:
case 2663:
case 3492:
case 659:
case 3937:
case 2596:
case 1165:
case 3409:
case 3636:
case 2115:
case 1090:
case 3518:
case 3790:
case 976:
case 1717:
case 3017:
case 3880:
case 2129:
case 2327:
case 220:
case 1040:
case 3283:
case 3375:
case 3885:
case 2767:
case 2546:
case 392:
case 654:
case 1480:
case 3281:
case 241:
case 2900:
case 693:
case 1888:
case 1378:
case 2936:
case 1689:
case 3823:
case 2277:
case 1782:
case 3220:
case 1421:
case 2958:
case 146:
case 1529:
case 535:
case 1126:
case 1728:
case 2301:
case 804:
case 2912:
case 72:
case 147:
case 353:
case 3457:
case 2318:
case 3843:
case 1217:
case 791:
case 1083:
case 3783:
case 1962:
case 3240:
case 3396:
case 269:
case 2777:
case 205:
case 1020:
case 4035:
case 3360:
case 3494:
case 1081:
case 1407:
case 3422:
case 4030:
case 652:
case 394:
case 2987:
case 2123:
case 3932:
case 3497:
case 3289:
case 1429:
case 265:
case 2774:
case 1521:
case 1585:
case 2344:
case 1854:
case 1620:
case 497:
case 1897:
case 1214:
case 3804:
case 3588:
case 216:
case 1683:
case 209:
case 3542:
case 484:
case 864:
case 3628:
case 935:
case 111:
case 478:
case 1335:
case 2274:
case 183:
case 3682:
case 2141:
case 2037:
case 2426:
case 3522:
case 92:
case 1543:
case 2764:
case 2107:
case 833:
case 2143:
case 1933:
case 2309:
case 3617:
case 1541:
case 2392:
case 3014:
case 1140:
case 1486:
case 3319:
case 1534:
case 2906:
case 988:
case 2029:
case 690:
case 2930:
case 495:
case 1145:
case 389:
case 3226:
case 2607:
case 2643:
case 2754:
case 3886:
case 3746:
case 223:
case 1384:
case 149:
case 2134:
case 2641:
case 922:
case 64:
case 2581:
case 4005:
case 2814:
case 2333:
case 2680:
case 3726:
case 2297:
case 1026:
case 1437:
case 3577:
case 1398:
case 2621:
case 155:
case 1924:
case 4036:
case 2331:
case 3395:
case 350:
case 3959:
case 2254:
case 3246:
case 1181:
case 3464:
case 2445:
case 2742:
case 2257:
case 1300:
case 774:
case 65:
case 618:
case 2788:
case 2649:
case 1952:
case 2848:
case 1305:
case 1358:
case 206:
case 3355:
case 1434:
case 1867:
case 1586:
case 3311:
case 522:
case 3350:
case 371:
case 2817:
case 2080:
case 1626:
case 340:
case 2041:
case 830:
case 2483:
case 724:
case 2339:
case 1947:
case 1903:
case 3564:
case 207:
case 524:
case 3915:
case 1646:
case 1387:
case 385:
case 1901:
case 2722:
case 572:
case 736:
case 2481:
case 1918:
case 2604:
case 1312:
case 2043:
case 2420:
case 3953:
case 536:
case 2629:
case 3477:
case 2968:
case 4084:
case 1021:
case 78:
case 376:
case 106:
case 3970:
case 2586:
case 2867:
case 61:
case 3785:
case 1085:
case 201:
case 58:
case 3975:
case 3840:
case 1222:
case 332:
case 3207:
case 2626:
case 3780:
case 842:
case 1080:
case 3448:
case 1294:
case 1817:
case 1257:
case 327:
case 1742:
case 1445:
case 3042:
case 1882:
case 2300:
case 1372:
case 2336:
case 1978:
case 3723:
case 1186:
case 3363:
case 3088:
case 1440:
case 1788:
case 3417:
case 4033:
case 3174:
case 1848:
case 2952:
case 1649:
case 280:
case 1425:
case 1722:
case 3883:
case 3373:
case 2312:
case 3094:
case 3743:
case 1604:
case 2918:
case 1481:
case 3164:
case 3697:
case 1007:
case 808:
case 1420:
case 3221:
case 1629:
case 2537:
case 1137:
case 1483:
case 3514:
case 3741:
case 3965:
case 1288:
case 1041:
case 2903:
case 3371:
case 3881:
case 398:
case 2947:
case 3654:
case 107:
case 2189:
case 377:
case 999:
case 3223:
case 844:
case 3938:
case 167:
case 1545:
case 2384:
case 2874:
case 604:
case 2046:
case 4062:
case 98:
case 3956:
case 1641:
case 1134:
case 3517:
case 249:
case 2944:
case 422:
case 3582:
case 437:
case 868:
case 1930:
case 1029:
case 474:
case 1906:
case 852:
case 3548:
case 3167:
case 995:
case 4039:
case 1607:
case 3379:
case 2120:
case 1583:
case 931:
case 3177:
case 854:
case 3528:
case 436:
case 3642:
case 2181:
case 3316:
case 261:
case 893:
case 799:
case 1489:
case 2026:
case 1297:
case 1680:
case 1814:
case 1525:
case 2909:
case 255:
case 1621:
case 310:
case 166:
case 599:
case 2183:
case 2992:
case 1520:
case 4072:
case 424:
case 2864:
case 1685:
case 2924:
case 2214:
case 1185:
case 2897:
case 3919:
case 997:
case 379:
case 360:
case 109:
case 2306:
case 1121:
case 1264:
case 3391:
case 2335:
case 211:
case 4003:
case 3976:
case 3142:
case 2625:
case 1984:
case 5:
case 4001:
case 1774:
case 2521:
case 3677:
case 256:
case 3846:
case 2620:
case 3188:
case 1086:
case 2854:
case 3237:
case 3393:
case 7:
case 1344:
case 2585:
case 257:
case 928:
case 1764:
case 3122:
case 2645:
case 4052:
case 2933:
case 1392:
case 2541:
case 1998:
case 329:
case 85:
case 2931:
case 491:
case 1274:
case 3995:
case 3737:
case 3359:
case 1426:
case 117:
case 2089:
case 3990:
case 614:
case 3913:
case 2748:
case 2146:
case 1936:
case 2689:
case 2378:
case 1900:
case 141:
case 784:
case 597:
case 578:
case 325:
case 4009:
case 584:
case 2421:
case 3734:
case 2842:
case 1129:
case 3302:
case 3908:
case 2717:
case 381:
case 2040:
case 3911:
case 3067:
case 3664:
case 2045:
case 3399:
case 1546:
case 105:
case 3674:
case 375:
case 1777:
case 2282:
case 2939:
case 1686:
case 1303:
case 2407:
case 728:
case 313:
case 439:
case 1301:
case 2728:
case 2126:
case 1267:
case 612:
case 1318:
case 796:
case 247:
case 84:
case 33:
case 66:
case 596:
case 2822:
case 1354:
case 3435:
case 811:
case 607:
case 2844:
case 2784:
case 1570:
case 4022:
case 3430:
case 550:
case 3152:
case 3406:
case 3279:
case 4094:
case 1671:
case 3838:
case 2019:
case 477:
case 1835:
case 4057:
case 985:
case 3127:
case 3329:
case 1102:
case 856:
case 1456:
case 3662:
case 1199:
case 3216:
case 3769:
case 1673:
case 1438:
case 3304:
case 1397:
case 2175:
case 1663:
case 3147:
case 2553:
case 1731:
case 3103:
case 3031:
case 971:
case 3349:
case 2095:
case 1151:
case 2090:
case 2160:
case 1115:
case 2284:
case 4088:
case 2824:
case 2964:
case 3269:
case 3716:
case 1016:
case 1560:
case 1733:
case 3101:
case 589:
case 162:
case 2551:
case 2459:
case 2196:
case 2510:
case 2798:
case 1565:
case 2608:
case 1914:
case 4042:
case 619:
case 2066:
case 427:
case 2611:
case 1153:
case 1556:
case 666:
case 846:
case 336:
case 2666:
case 2011:
case 3875:
case 721:
case 2050:
case 2827:
case 1538:
case 3478:
case 3870:
case 3380:
case 1191:
case 372:
case 521:
case 2212:
case 410:
case 2852:
case 1948:
case 2013:
case 1342:
case 2499:
case 2287:
case 1772:
case 673:
case 2700:
case 2138:
case 3763:
case 1878:
case 1388:
case 3631:
case 1982:
case 3506:
case 540:
case 615:
case 2705:
case 3271:
case 1470:
case 1322:
case 3109:
case 1669:
case 2451:
case 3773:
case 2415:
case 2712:
case 1460:
case 3261:
case 571:
case 322:
case 4054:
case 3124:
case 771:
case 3192:
case 2410:
case 3062:
case 3468:
case 3263:
case 2258:
case 1739:
case 3920:
case 24:
case 3860:
case 2676:
case 337:
case 667:
case 2236:
case 1159:
case 1272:
case 2200:
case 2461:
case 3215:
case 1659:
case 242:
case 2569:
case 1805:
case 2778:
case 2176:
case 3251:
case 617:
case 1132:
case 1519:
case 538:
case 2872:
case 2382:
case 1800:
case 4064:
case 3210:
case 1411:
case 1836:
case 1752:
case 1455:
case 3052:
case 1203:
case 3334:
case 1247:
case 943:
case 1002:
case 2070:
case 3405:
case 3702:
case 3692:
case 753:
case 3458:
case 3624:
case 3850:
case 2119:
case 1727:
case 3027:
case 2463:
case 3811:
case 2075:
case 2532:
case 1099:
case 3584:
case 3808:
case 1169:
case 2656:
case 1010:
case 3598:
case 2195:
case 665:
case 1566:
case 1887:
case 1377:
case 208:
case 1179:
case 3644:
case 1703:
case 3003:
case 1252:
case 2957:
case 2516:
case 2839:
case 3412:
case 3715:
case 2060:
case 2473:
case 460:
case 479:
case 2278:
case 880:
case 3487:
case 3001:
case 2328:
case 1691:
case 1701:
case 4074:
case 2862:
case 2922:
case 586:
case 592:
case 1116:
case 1590:
case 10:
case 792:
case 786:
case 2471:
case 3202:
case 616:
case 130:
case 1227:
case 2096:
case 2166:
case 609:
case 16:
case 994:
case 413:
case 2108:
case 339:
case 2730:
case 670:
case 112:
case 475:
case 3791:
case 3484:
case 1513:
case 4077:
case 3819:
case 2997:
case 2150:
case 2432:
case 2735:
case 43:
case 2954:
case 2660:
case 1615:
case 2038:
case 3946:
case 1651:
case 400:
case 2469:
case 2561:
case 2113:
case 1508:
case 1610:
case 605:
case 268:
case 3647:
case 3386:
case 3876:
case 1163:
case 3793:
case 3044:
case 1419:
case 3291:
case 1364:
case 1709:
case 1173:
case 3926:
case 3092:
case 2314:
case 2670:
case 1792:
case 1495:
case 3024:
case 1724:
case 3627:
case 992:
case 3890:
case 3139:
case 1466:
case 1244:
case 3498:
case 855:
case 1059:
case 3759:
case 114:
case 861:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1747634401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,];
var gg_b = "1747634401/";

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
