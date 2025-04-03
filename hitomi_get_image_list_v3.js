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
case 2013:
case 3937:
case 2383:
case 677:
case 1155:
case 848:
case 2191:
case 1103:
case 3401:
case 1531:
case 3425:
case 1924:
case 3783:
case 293:
case 81:
case 612:
case 841:
case 3683:
case 2859:
case 419:
case 3841:
case 2083:
case 2730:
case 197:
case 2663:
case 667:
case 1120:
case 1826:
case 3428:
case 2284:
case 3450:
case 2858:
case 2052:
case 1569:
case 1437:
case 3076:
case 250:
case 2288:
case 3429:
case 2993:
case 3424:
case 1159:
case 1154:
case 952:
case 2676:
case 175:
case 2855:
case 165:
case 2218:
case 2477:
case 2803:
case 2432:
case 3752:
case 1057:
case 2352:
case 2285:
case 1928:
case 3376:
case 3231:
case 347:
case 3340:
case 171:
case 3609:
case 1087:
case 1114:
case 3782:
case 1119:
case 1667:
case 698:
case 3612:
case 2885:
case 168:
case 3696:
case 2009:
case 2762:
case 2004:
case 2012:
case 2203:
case 2740:
case 2382:
case 2255:
case 2304:
case 2640:
case 517:
case 716:
case 3947:
case 524:
case 2312:
case 3796:
case 1910:
case 178:
case 562:
case 1541:
case 907:
case 1184:
case 1387:
case 3040:
case 1189:
case 1767:
case 2220:
case 310:
case 3868:
case 3682:
case 3704:
case 3709:
case 161:
case 3062:
case 2884:
case 1226:
case 2889:
case 4074:
case 2992:
case 3621:
case 4079:
case 1115:
case 3869:
case 2916:
case 1473:
case 2254:
case 3480:
case 3708:
case 1807:
case 3241:
case 2021:
case 3171:
case 1188:
case 639:
case 803:
case 1997:
case 2986:
case 402:
case 833:
case 609:
case 2305:
case 2819:
case 583:
case 2802:
case 2433:
case 3637:
case 1861:
case 702:
case 1179:
case 966:
case 1377:
case 4015:
case 931:
case 1043:
case 1174:
case 303:
case 177:
case 2930:
case 3913:
case 2072:
case 54:
case 4088:
case 518:
case 1624:
case 1835:
case 263:
case 1629:
case 3983:
case 25:
case 2139:
case 112:
case 4018:
case 1594:
case 3356:
case 3545:
case 167:
case 2875:
case 2457:
case 732:
case 2963:
case 976:
case 697:
case 938:
case 1343:
case 901:
case 1077:
case 3737:
case 1506:
case 1175:
case 3093:
case 4019:
case 1598:
case 3827:
case 3299:
case 1245:
case 1750:
case 416:
case 2693:
case 3952:
case 1625:
case 2976:
case 3544:
case 2523:
case 1178:
case 3181:
case 2551:
case 1595:
case 2:
case 2135:
case 1650:
case 1628:
case 2879:
case 2874:
case 451:
case 3909:
case 2274:
case 1405:
case 3904:
case 3535:
case 1421:
case 2279:
case 671:
case 1967:
case 606:
case 198:
case 2073:
case 1710:
case 3996:
case 1042:
case 3747:
case 1333:
case 1060:
case 3561:
case 1680:
case 1033:
case 2490:
case 1342:
case 920:
case 1408:
case 222:
case 2962:
case 458:
case 1845:
case 3227:
case 678:
case 3899:
case 661:
case 2047:
case 348:
case 1412:
case 3467:
case 3534:
case 3539:
case 719:
case 2275:
case 1527:
case 2616:
case 4003:
case 4055:
case 935:
case 3092:
case 139:
case 2487:
case 3898:
case 2786:
case 1797:
case 905:
case 2066:
case 2148:
case 3908:
case 109:
case 2716:
case 341:
case 4058:
case 3666:
case 1482:
case 2522:
case 207:
case 1298:
case 1983:
case 949:
case 2811:
case 312:
case 2743:
case 2200:
case 3724:
case 1356:
case 3594:
case 488:
case 560:
case 2677:
case 713:
case 145:
case 367:
case 1772:
case 3506:
case 1737:
case 3077:
case 3838:
case 1436:
case 3249:
case 1295:
case 1672:
case 2223:
case 3179:
case 2024:
case 1548:
case 2029:
case 3174:
case 103:
case 1122:
case 2881:
case 2732:
case 237:
case 481:
case 3452:
case 2643:
case 4071:
case 3629:
case 1181:
case 2822:
case 878:
case 1544:
case 3595:
case 2028:
case 1549:
case 3701:
case 3725:
case 836:
case 3483:
case 2325:
case 3650:
case 3936:
case 1393:
case 647:
case 2025:
case 3245:
case 3728:
case 1299:
case 1294:
case 871:
case 3625:
case 3839:
case 2350:
case 59:
case 806:
case 1206:
case 3413:
case 2917:
case 104:
case 3342:
case 1647:
case 1100:
case 3610:
case 1894:
case 2633:
case 1899:
case 2380:
case 610:
case 2010:
case 526:
case 3421:
case 1535:
case 714:
case 3405:
case 1123:
case 2578:
case 2310:
case 2660:
case 398:
case 727:
case 2195:
case 1151:
case 875:
case 2733:
case 3042:
case 134:
case 3710:
case 1747:
case 3680:
case 2222:
case 897:
case 2579:
case 2462:
case 2574:
case 1908:
case 2440:
case 1392:
case 2990:
case 309:
case 2097:
case 141:
case 3482:
case 1666:
case 3261:
case 3844:
case 1895:
case 269:
case 3849:
case 542:
case 2851:
case 3238:
case 2199:
case 252:
case 1539:
case 1953:
case 11:
case 3527:
case 428:
case 3946:
case 339:
case 1092:
case 3797:
case 2211:
case 3568:
case 2515:
case 645:
case 2932:
case 1264:
case 1841:
case 590:
case 2977:
case 1269:
case 1713:
case 2070:
case 3158:
case 728:
case 2588:
case 1428:
case 922:
case 3826:
case 809:
case 633:
case 721:
case 3565:
case 1972:
case 2370:
case 40:
case 1613:
case 1363:
case 3155:
case 2585:
case 3103:
case 3924:
case 3531:
case 1425:
case 3770:
case 2493:
case 365:
case 553:
case 1265:
case 57:
case 1752:
case 2514:
case 427:
case 3950:
case 3928:
case 1376:
case 2657:
case 147:
case 235:
case 4051:
case 3569:
case 3472:
case 1507:
case 3437:
case 2271:
case 243:
case 2336:
case 3357:
case 375:
case 898:
case 2169:
case 2617:
case 1526:
case 604:
case 2164:
case 238:
case 1947:
case 1796:
case 730:
case 2486:
case 2933:
case 3017:
case 3541:
case 2559:
case 3387:
case 95:
case 1712:
case 3466:
case 1868:
case 110:
case 1709:
case 3114:
case 1340:
case 371:
case 368:
case 1696:
case 4011:
case 634:
case 700:
case 1865:
case 2717:
case 3447:
case 3746:
case 1753:
case 1966:
case 1705:
case 641:
case 1721:
case 1591:
case 781:
case 2503:
case 648:
case 2168:
case 554:
case 2046:
case 1605:
case 413:
case 3115:
case 1480:
case 2790:
case 1241:
case 1864:
case 1708:
case 3646:
case 2558:
case 3188:
case 2306:
case 748:
case 3524:
case 2543:
case 4063:
case 3529:
case 688:
case 2985:
case 1250:
case 319:
case 71:
case 2399:
case 2197:
case 1648:
case 2394:
case 3407:
case 625:
case 13:
case 1469:
case 3606:
case 1201:
case 1225:
case 2532:
case 2577:
case 3699:
case 2006:
case 681:
case 2915:
case 1749:
case 2989:
case 1744:
case 858:
case 2892:
case 127:
case 2098:
case 1431:
case 3525:
case 3501:
case 3969:
case 2816:
case 1907:
case 3964:
case 1465:
case 2395:
case 1323:
case 2110:
case 3798:
case 1897:
case 2471:
case 630:
case 1023:
case 1051:
case 3528:
case 2914:
case 2919:
case 3866:
case 1468:
case 3272:
case 593:
case 2398:
case 1300:
case 2902:
case 3078:
case 1081:
case 3837:
case 3580:
case 1661:
case 2128:
case 3266:
case 986:
case 2856:
case 2678:
case 4040:
case 1824:
case 4062:
case 2542:
case 1297:
case 1635:
case 1829:
case 283:
case 410:
case 2286:
case 3075:
case 1193:
case 1735:
case 2125:
case 2101:
case 2533:
case 2959:
case 2216:
case 2778:
case 2954:
case 99:
case 1547:
case 187:
case 2675:
case 3378:
case 3510:
case 816:
case 1761:
case 1638:
case 2774:
case 217:
case 2779:
case 621:
case 1322:
case 302:
case 224:
case 703:
case 2893:
case 594:
case 262:
case 1825:
case 1801:
case 3132:
case 2027:
case 960:
case 3374:
case 3379:
case 3273:
case 2955:
case 259:
case 970:
case 1441:
case 2903:
case 272:
case 3143:
case 113:
case 1850:
case 3727:
case 1828:
case 3426:
case 733:
case 1156:
case 2674:
case 3631:
case 2715:
case 1867:
case 3768:
case 3812:
case 2065:
case 1371:
case 188:
case 2788:
case 3896:
case 929:
case 1948:
case 2400:
case 3665:
case 2368:
case 63:
case 2618:
case 433:
case 2276:
case 832:
case 3906:
case 2840:
case 403:
case 3385:
case 60:
case 2688:
case 3015:
case 3994:
case 3449:
case 582:
case 2785:
case 2423:
case 3444:
case 1945:
case 3668:
case 3570:
case 3318:
case 1071:
case 2365:
case 3731:
case 614:
case 55:
case 2702:
case 573:
case 2064:
case 211:
case 1552:
case 2714:
case 3853:
case 3314:
case 3664:
case 3302:
case 1270:
case 3389:
case 3187:
case 3014:
case 3019:
case 1406:
case 3764:
case 3536:
case 3002:
case 3769:
case 130:
case 3213:
case 2364:
case 2167:
case 1944:
case 2789:
case 1494:
case 218:
case 3995:
case 1726:
case 1961:
case 1427:
case 1596:
case 2587:
case 2830:
case 1512:
case 2754:
case 2978:
case 3813:
case 953:
case 3439:
case 1935:
case 3434:
case 1504:
case 1582:
case 3883:
case 1870:
case 1246:
case 2659:
case 3641:
case 1176:
case 96:
case 2975:
case 434:
case 3221:
case 1626:
case 747:
case 2658:
case 3546:
case 3303:
case 121:
case 3282:
case 3355:
case 3461:
case 2262:
case 564:
case 3435:
case 2170:
case 1505:
case 1939:
case 4086:
case 1553:
case 3020:
case 2703:
case 2876:
case 2481:
case 819:
case 3320:
case 2655:
case 185:
case 3358:
case 448:
case 4016:
case 41:
case 613:
case 989:
case 2411:
case 574:
case 1508:
case 857:
case 3204:
case 1267:
case 2979:
case 4092:
case 1130:
case 3209:
case 2758:
case 52:
case 1385:
case 1252:
case 2563:
case 1015:
case 657:
case 1449:
case 1994:
case 3945:
case 1999:
case 3583:
case 1882:
case 813:
case 29:
case 1088:
case 2257:
case 1804:
case 1768:
case 3371:
case 619:
case 3513:
case 3236:
case 983:
case 1018:
case 2887:
case 2530:
case 4077:
case 2108:
case 1389:
case 1019:
case 1384:
case 1536:
case 3707:
case 1213:
case 330:
case 2109:
case 778:
case 537:
case 2307:
case 2104:
case 270:
case 972:
case 3944:
case 2112:
case 3499:
case 736:
case 2951:
case 771:
case 507:
case 1805:
case 260:
case 1821:
case 2182:
case 706:
case 1853:
case 3552:
case 1084:
case 917:
case 1319:
case 1314:
case 300:
case 924:
case 1448:
case 3846:
case 1998:
case 1283:
case 3870:
case 1883:
case 2911:
case 984:
case 3246:
case 1641:
case 2026:
case 2479:
case 2562:
case 3626:
case 1059:
case 4060:
case 2540:
case 3726:
case 1354:
case 1157:
case 2290:
case 1813:
case 1208:
case 940:
case 1741:
case 814:
case 569:
case 827:
case 3504:
case 2326:
case 1567:
case 3935:
case 385:
case 3691:
case 2113:
case 1358:
case 1296:
case 3836:
case 797:
case 2091:
case 632:
case 1212:
case 2475:
case 1209:
case 3130:
case 321:
case 1303:
case 602:
case 1355:
case 3163:
case 1282:
case 2391:
case 83:
case 3521:
case 3934:
case 1852:
case 3116:
case 535:
case 1606:
case 2045:
case 3225:
case 3748:
case 2971:
case 2402:
case 1694:
case 2348:
case 543:
case 1699:
case 2419:
case 1968:
case 2414:
case 1524:
case 1931:
case 1529:
case 253:
case 2489:
case 1794:
case 956:
case 2345:
case 505:
case 3648:
case 497:
case 3537:
case 1706:
case 1965:
case 3469:
case 3572:
case 1873:
case 3880:
case 3229:
case 3897:
case 2700:
case 3023:
case 1550:
case 2044:
case 2173:
case 2049:
case 1272:
case 3649:
case 2651:
case 655:
case 289:
case 2485:
case 314:
case 2723:
case 465:
case 3744:
case 992:
case 4057:
case 1501:
case 3431:
case 327:
case 520:
case 3465:
case 2349:
case 2600:
case 1698:
case 795:
case 3735:
case 1075:
case 2611:
case 471:
case 2403:
case 468:
case 1941:
case 2781:
case 254:
case 2038:
case 3011:
case 1510:
case 1378:
case 3761:
case 830:
case 1837:
case 229:
case 3573:
case 2035:
case 4017:
case 2061:
case 461:
case 3824:
case 3829:
case 3297:
case 3635:
case 544:
case 2454:
case 3280:
case 94:
case 2622:
case 3991:
case 1273:
case 2459:
case 1079:
case 918:
case 1074:
case 3850:
case 2339:
case 1597:
case 3156:
case 576:
case 2034:
case 2039:
case 3322:
case 2516:
case 501:
case 825:
case 777:
case 2592:
case 3801:
case 3825:
case 1379:
case 888:
case 911:
case 3080:
case 1149:
case 4026:
case 1347:
case 298:
case 1144:
case 790:
case 1581:
case 3310:
case 174:
case 2967:
case 1274:
case 3222:
case 396:
case 835:
case 2333:
case 2710:
case 3198:
case 3575:
case 1940:
case 2342:
case 521:
case 2408:
case 2033:
case 2780:
case 805:
case 3010:
case 789:
case 291:
case 1373:
case 3380:
case 3760:
case 3633:
case 694:
case 2409:
case 1692:
case 3397:
case 753:
case 379:
case 426:
case 77:
case 3194:
case 2238:
case 1487:
case 1786:
case 3800:
case 239:
case 2946:
case 146:
case 3106:
case 947:
case 209:
case 1716:
case 3574:
case 1148:
case 1686:
case 3462:
case 3579:
case 3851:
case 76:
case 369:
case 3823:
case 1792:
case 2482:
case 2174:
case 2332:
case 1656:
case 3024:
case 2377:
case 530:
case 2244:
case 3251:
case 2249:
case 163:
case 2629:
case 693:
case 3732:
case 0:
case 1072:
case 3881:
case 3476:
case 899:
case 844:
case 3632:
case 2724:
case 3200:
case 1139:
case 212:
case 2729:
case 173:
case 1372:
case 2343:
case 2838:
case 2077:
case 2506:
case 486:
case 2032:
case 1963:
case 1756:
case 1875:
case 1138:
case 2750:
case 866:
case 2245:
case 2598:
case 3001:
case 1500:
case 729:
case 3430:
case 32:
case 2413:
case 581:
case 182:
case 650:
case 2625:
case 470:
case 3328:
case 2834:
case 1693:
case 1793:
case 2483:
case 460:
case 1135:
case 2725:
case 2248:
case 2701:
case 1551:
case 3028:
case 2595:
case 1523:
case 4007:
case 3822:
case 1874:
case 3957:
case 838:
case 3463:
case 1879:
case 1161:
case 876:
case 2936:
case 3301:
case 3325:
case 4038:
case 513:
case 454:
case 2317:
case 3492:
case 271:
case 3942:
case 2114:
case 1382:
case 3717:
case 1012:
case 1203:
case 331:
case 3067:
case 82:
case 1009:
case 1762:
case 1662:
case 1888:
case 3787:
case 2910:
case 933:
case 4035:
case 338:
case 1309:
case 376:
case 429:
case 1107:
case 1304:
case 3169:
case 3367:
case 1258:
case 236:
case 1815:
case 2466:
case 2387:
case 2189:
case 278:
case 2541:
case 4061:
case 2017:
case 664:
case 149:
case 2184:
case 1442:
case 3046:
case 1992:
case 2226:
case 837:
case 2188:
case 1053:
case 1021:
case 786:
case 3558:
case 2646:
case 2807:
case 587:
case 3790:
case 1254:
case 646:
case 1305:
case 3690:
case 1321:
case 3165:
case 1353:
case 2746:
case 2447:
case 2997:
case 1986:
case 3346:
case 399:
case 1008:
case 344:
case 807:
case 1630:
case 1219:
case 1383:
case 2565:
case 934:
case 1202:
case 193:
case 663:
case 2531:
case 46:
case 3585:
case 1854:
case 2207:
case 3932:
case 726:
case 2670:
case 453:
case 2568:
case 65:
case 4048:
case 1289:
case 1571:
case 1663:
case 1313:
case 1730:
case 297:
case 2158:
case 2564:
case 2472:
case 4049:
case 2569:
case 50:
case 896:
case 1820:
case 1052:
case 3757:
case 91:
case 2154:
case 1676:
case 489:
case 2159:
case 3584:
case 2901:
case 2925:
case 2057:
case 88:
case 3519:
case 490:
case 3514:
case 1803:
case 1432:
case 1855:
case 1776:
case 265:
case 3036:
case 941:
case 1218:
case 53:
case 2928:
case 2796:
case 1787:
case 3312:
case 3662:
case 138:
case 2947:
case 3082:
case 3107:
case 1164:
case 3309:
case 1367:
case 1169:
case 3304:
case 1617:
case 2062:
case 3258:
case 2704:
case 2682:
case 68:
case 2868:
case 483:
case 3220:
case 394:
case 3396:
case 349:
case 74:
case 1559:
case 2612:
case 1960:
case 2362:
case 2782:
case 3096:
case 2831:
case 2609:
case 1942:
case 3255:
case 3382:
case 2973:
case 108:
case 1416:
case 3740:
case 3203:
case 166:
case 3004:
case 532:
case 3762:
case 3009:
case 2696:
case 3305:
case 2608:
case 1165:
case 417:
case 2410:
case 1346:
case 3802:
case 2966:
case 85:
case 2705:
case 2721:
case 1131:
case 2753:
case 995:
case 472:
case 3308:
case 2653:
case 3442:
case 2621:
case 3992:
case 1046:
case 2605:
case 652:
case 3889:
case 679:
case 459:
case 1520:
case 3053:
case 2171:
case 3005:
case 3021:
case 2241:
case 2864:
case 3254:
case 3916:
case 2869:
case 2713:
case 3854:
case 1932:
case 2841:
case 607:
case 440:
case 2683:
case 3284:
case 2428:
case 3289:
case 120:
case 3663:
case 1588:
case 1070:
case 3083:
case 3956:
case 3219:
case 3383:
case 846:
case 4094:
case 1370:
case 1518:
case 3013:
case 998:
case 1493:
case 393:
case 792:
case 1585:
case 3191:
case 484:
case 2363:
case 1519:
case 2752:
case 1514:
case 864:
case 2265:
case 1502:
case 3803:
case 1657:
case 247:
case 909:
case 2231:
case 2376:
case 105:
case 3285:
case 939:
case 4095:
case 3052:
case 423:
case 2268:
case 756:
case 3215:
case 1757:
case 3676:
case 1589:
case 874:
case 1141:
case 3443:
case 1336:
case 2652:
case 1271:
case 3288:
case 3993:
case 715:
case 638:
case 3962:
case 601:
case 456:
case 204:
case 2806:
case 2538:
case 2773:
case 723:
case 1917:
case 997:
case 1742:
case 18:
case 1010:
case 1380:
case 2982:
case 3511:
case 3373:
case 2899:
case 1760:
case 2227:
case 364:
case 1633:
case 1195:
case 2151:
case 3149:
case 1733:
case 2123:
case 1310:
case 374:
case 3581:
case 1660:
case 2909:
case 666:
case 1222:
case 2673:
case 2561:
case 4041:
case 608:
case 196:
case 2747:
case 1987:
case 2996:
case 234:
case 2392:
case 1990:
case 3278:
case 1281:
case 3148:
case 1574:
case 1462:
case 169:
case 3522:
case 699:
case 2316:
case 3792:
case 784:
case 1097:
case 2086:
case 965:
case 558:
case 492:
case 680:
case 2539:
case 975:
case 2953:
case 21:
case 2921:
case 2534:
case 1199:
case 3145:
case 1194:
case 179:
case 551:
case 1211:
case 3487:
case 2092:
case 1106:
case 346:
case 3616:
case 961:
case 4065:
case 2545:
case 2356:
case 1743:
case 3337:
case 35:
case 3134:
case 107:
case 2983:
case 2298:
case 1811:
case 978:
case 2737:
case 2436:
case 2772:
case 3457:
case 620:
case 3756:
case 3930:
case 2548:
case 203:
case 1024:
case 2672:
case 1223:
case 2295:
case 363:
case 2056:
case 906:
case 1732:
case 3037:
case 1881:
case 2122:
case 1777:
case 971:
case 3135:
case 3793:
case 2470:
case 411:
case 2549:
case 4069:
case 3551:
case 1822:
case 1050:
case 4064:
case 2544:
case 3874:
case 3879:
case 1463:
case 2393:
case 1325:
case 2294:
case 2299:
case 2827:
case 1430:
case 2093:
case 3500:
case 783:
case 3976:
case 2206:
case 382:
case 44:
case 2952:
case 2111:
case 3693:
case 1830:
case 2596:
case 2726:
case 2427:
case 1136:
case 156:
case 2504:
case 4010:
case 890:
case 342:
case 2509:
case 1759:
case 3981:
case 1754:
case 3290:
case 1422:
case 2176:
case 3026:
case 1659:
case 3152:
case 3911:
case 2870:
case 496:
case 1041:
case 957:
case 1517:
case 3479:
case 1863:
case 705:
case 3474:
case 617:
case 1620:
case 3391:
case 1755:
case 3217:
case 2791:
case 1703:
case 2939:
case 2521:
case 87:
case 662:
case 1170:
case 2505:
case 86:
case 672:
case 3287:
case 1411:
case 598:
case 479:
case 1603:
case 3922:
case 285:
case 2130:
case 3857:
case 3475:
case 1758:
case 720:
case 2508:
case 3091:
case 2836:
case 1685:
case 2236:
case 288:
case 2371:
case 407:
case 640:
case 3257:
case 386:
case 3530:
case 3887:
case 4024:
case 3671:
case 3563:
case 1068:
case 1840:
case 799:
case 2071:
case 281:
case 3153:
case 1365:
case 2583:
case 3105:
case 2945:
case 437:
case 2495:
case 1451:
case 111:
case 2552:
case 3182:
case 360:
case 1719:
case 1689:
case 3576:
case 1064:
case 4050:
case 1702:
case 512:
case 4028:
case 2270:
case 708:
case 2162:
case 731:
case 200:
case 3900:
case 766:
case 2607:
case 567:
case 902:
case 2140:
case 230:
case 701:
case 738:
case 2707:
case 623:
case 118:
case 2494:
case 1784:
case 1602:
case 2949:
case 3923:
case 2944:
case 3104:
case 1369:
case 3307:
case 1775:
case 3035:
case 401:
case 3420:
case 656:
case 2311:
case 2661:
case 1128:
case 2573:
case 72:
case 2738:
case 476:
case 1150:
case 2081:
case 2297:
case 2829:
case 183:
case 3061:
case 615:
case 1678:
case 1560:
case 1778:
case 3781:
case 3832:
case 1533:
case 1959:
case 3403:
case 1125:
case 870:
case 3611:
case 2193:
case 466:
case 408:
case 2926:
case 4067:
case 886:
case 1779:
case 1920:
case 1774:
case 3034:
case 3722:
case 536:
case 1027:
case 499:
case 2825:
case 578:
case 2801:
case 2634:
case 213:
case 1129:
case 1327:
case 568:
case 172:
case 2739:
case 955:
case 571:
case 2441:
case 3459:
case 707:
case 1955:
case 3454:
case 3242:
case 1674:
case 916:
case 3334:
case 3260:
case 3172:
case 3339:
case 3137:
case 2850:
case 3484:
case 3489:
case 2228:
case 565:
case 3166:
case 1306:
case 37:
case 1543:
case 779:
case 2880:
case 1918:
case 2572:
case 4070:
case 420:
case 2186:
case 1197:
case 20:
case 2201:
case 2748:
case 3045:
case 769:
case 1915:
case 3414:
case 2192:
case 575:
case 1577:
case 2645:
case 1532:
case 1098:
case 2431:
case 3593:
case 1892:
case 842:
case 390:
case 611:
case 1989:
case 2744:
case 2749:
case 3751:
case 3485:
case 2323:
case 3147:
case 2351:
case 3349:
case 796:
case 597:
case 3277:
case 3044:
case 3243:
case 2224:
case 435:
case 1471:
case 3488:
case 123:
case 1886:
case 78:
case 1902:
case 2649:
case 3623:
case 1398:
case 2644:
case 618:
case 2468:
case 443:
case 1914:
case 818:
case 1455:
case 3954:
case 981:
case 3959:
case 3533:
case 7:
case 1361:
case 84:
case 4012:
case 2510:
case 3675:
case 4004:
case 1035:
case 1458:
case 1420:
case 2580:
case 3150:
case 129:
case 811:
case 3286:
case 988:
case 1843:
case 449:
case 2375:
case 1061:
case 782:
case 3678:
case 3327:
case 3129:
case 3124:
case 75:
case 3903:
case 359:
case 1454:
case 626:
case 1622:
case 3674:
case 930:
case 1242:
case 3679:
case 1172:
case 1260:
case 1334:
case 1339:
case 1233:
case 1516:
case 2627:
case 1039:
case 3779:
case 3920:
case 1034:
case 3774:
case 2379:
case 1722:
case 763:
case 510:
case 2374:
case 3027:
case 3893:
case 3293:
case 257:
case 2606:
case 1045:
case 3094:
case 1414:
case 3915:
case 2699:
case 3577:
case 1402:
case 1348:
case 219:
case 1484:
case 1860:
case 1489:
case 892:
case 153:
case 3543:
case 2524:
case 17:
case 3306:
case 3918:
case 2706:
case 2965:
case 2407:
case 3394:
case 1556:
case 3197:
case 2528:
case 3095:
case 3180:
case 1049:
case 2550:
case 1044:
case 1700:
case 323:
case 1488:
case 2798:
case 3902:
case 2237:
case 189:
case 764:
case 450:
case 3919:
case 3256:
case 670:
case 1415:
case 3914:
case 2501:
case 660:
case 3892:
case 3989:
case 815:
case 2133:
case 2698:
case 1344:
case 3110:
case 1349:
case 1600:
case 1147:
case 3395:
case 1232:
case 1418:
case 2969:
case 1277:
case 474:
case 3654:
case 3422:
case 2641:
case 1026:
case 251:
case 1911:
case 1540:
case 2054:
case 90:
case 3517:
case 2221:
case 3863:
case 1479:
case 1562:
case 2205:
case 3975:
case 2253:
case 823:
case 2359:
case 422:
case 3587:
case 93:
case 629:
case 1326:
case 2567:
case 4047:
case 2439:
case 258:
case 2741:
case 315:
case 3978:
case 3754:
case 1981:
case 464:
case 1287:
case 3411:
case 884:
case 126:
case 2358:
case 1922:
case 2320:
case 1475:
case 3720:
case 3590:
case 2055:
case 2355:
case 2282:
case 3620:
case 504:
case 4066:
case 3658:
case 3481:
case 1478:
case 927:
case 3876:
case 3703:
case 392:
case 840:
case 2435:
case 3262:
case 1183:
case 3862:
case 3068:
case 2385:
case 2252:
case 2765:
case 3331:
case 3276:
case 2731:
case 3365:
case 2088:
case 3615:
case 1105:
case 66:
case 872:
case 2668:
case 2882:
case 4037:
case 2444:
case 2999:
case 2018:
case 2388:
case 3065:
case 2812:
case 862:
case 2768:
case 473:
case 1257:
case 2809:
case 653:
case 2631:
case 3368:
case 2665:
case 1108:
case 3400:
case 1530:
case 3031:
case 2213:
case 216:
case 2808:
case 2019:
case 3557:
case 3784:
case 913:
case 689:
case 3369:
case 1104:
case 3167:
case 3230:
case 3364:
case 1109:
case 34:
case 1307:
case 2853:
case 4:
case 311:
case 3719:
case 160:
case 1182:
case 3263:
case 1007:
case 3064:
case 3069:
case 3684:
case 2283:
case 2998:
case 2302:
case 1900:
case 2664:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743670801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,];
var gg_b = "1743670801/";

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
