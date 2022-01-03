// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

var window = 1;
var document = 1;
var name = 1;
var location = 1;
var customElements = 1;
var history = 1;
var locationbar = 1;
var menubar = 1;
var personalbar = 1;
var scrollbars = 1;
var statusbar = 1;
var toolbar = 1;
var status = 1;
var closed = 1;
var frames = 1;
var length = 1;
var top = 1;
var opener = 1;
var parent = 1;
var frameElement = 1;
var navigator = 1;
var origin = 1;
var external = 1;
var screen = 1;
var innerWidth = 1;
var innerHeight = 1;
var scrollX = 1;
var pageXOffset = 1;
var scrollY = 1;
var pageYOffset = 1;
var visualViewport = 1;
var screenX = 1;
var screenY = 1;
var outerWidth = 1;
var outerHeight = 1;
var devicePixelRatio = 1;
var clientInformation = 1;
var screenLeft = 1;
var screenTop = 1;
var defaultStatus = 1;
var defaultstatus = 1;
var styleMedia = 1;
var onsearch = 1;
var isSecureContext = 1;
var performance = 1;
var onappinstalled = 1;
var onbeforeinstallprompt = 1;
var crypto = 1;
var indexedDB = 1;
var webkitStorageInfo = 1;
var sessionStorage = 1;
var localStorage = 1;
var onbeforexrselect = 1;
var onabort = 1;
var onblur = 1;
var oncancel = 1;
var oncanplay = 1;
var oncanplaythrough = 1;
var onchange = 1;
var onclick = 1;
var onclose = 1;
var oncontextmenu = 1;
var oncuechange = 1;
var ondblclick = 1;
var ondrag = 1;
var ondragend = 1;
var ondragenter = 1;
var ondragleave = 1;
var ondragover = 1;
var ondragstart = 1;
var ondrop = 1;
var ondurationchange = 1;
var onemptied = 1;
var onended = 1;
var onerror = 1;
var onfocus = 1;
var onformdata = 1;
var oninput = 1;
var oninvalid = 1;
var onkeydown = 1;
var onkeypress = 1;
var onkeyup = 1;
var onload = 1;
var onloadeddata = 1;
var onloadedmetadata = 1;
var onloadstart = 1;
var onmousedown = 1;
var onmouseenter = 1;
var onmouseleave = 1;
var onmousemove = 1;
var onmouseout = 1;
var onmouseover = 1;
var onmouseup = 1;
var onmousewheel = 1;
var onpause = 1;
var onplay = 1;
var onplaying = 1;
var onprogress = 1;
var onratechange = 1;
var onreset = 1;
var onresize = 1;
var onscroll = 1;
var onseeked = 1;
var onseeking = 1;
var onselect = 1;
var onstalled = 1;
var onsubmit = 1;
var onsuspend = 1;
var ontimeupdate = 1;
var ontoggle = 1;
var onvolumechange = 1;
var onwaiting = 1;
var onwebkitanimationend = 1;
var onwebkitanimationiteration = 1;
var onwebkitanimationstart = 1;
var onwebkittransitionend = 1;
var onwheel = 1;
var onauxclick = 1;
var ongotpointercapture = 1;
var onlostpointercapture = 1;
var onpointerdown = 1;
var onpointermove = 1;
var onpointerup = 1;
var onpointercancel = 1;
var onpointerover = 1;
var onpointerout = 1;
var onpointerenter = 1;
var onpointerleave = 1;
var onselectstart = 1;
var onselectionchange = 1;
var onanimationend = 1;
var onanimationiteration = 1;
var onanimationstart = 1;
var ontransitionrun = 1;
var ontransitionstart = 1;
var ontransitionend = 1;
var ontransitioncancel = 1;
var onafterprint = 1;
var onbeforeprint = 1;
var onbeforeunload = 1;
var onhashchange = 1;
var onlanguagechange = 1;
var onmessage = 1;
var onmessageerror = 1;
var onoffline = 1;
var ononline = 1;
var onpagehide = 1;
var onpageshow = 1;
var onpopstate = 1;
var onrejectionhandled = 1;
var onstorage = 1;
var onunhandledrejection = 1;
var onunload = 1;
var alert = 1;
var atob = 1;
var blur = 1;
var btoa = 1;
var cancelAnimationFrame = 1;
var cancelIdleCallback = 1;
var captureEvents = 1;
var clearInterval = 1;
var clearTimeout = 1;
var close = 1;
var confirm = 1;
var createImageBitmap = 1;
var fetch = 1;
var find = 1;
var focus = 1;
var getComputedStyle = 1;
var getSelection = 1;
var matchMedia = 1;
var moveBy = 1;
var moveTo = 1;
var open = 1;
var postMessage = 1;
var print = 1;
var prompt = 1;
var queueMicrotask = 1;
var releaseEvents = 1;
var reportError = 1;
var requestAnimationFrame = 1;
var requestIdleCallback = 1;
var resizeBy = 1;
var resizeTo = 1;
var scroll = 1;
var scrollBy = 1;
var scrollTo = 1;
var setInterval = 1;
var setTimeout = 1;
var stop = 1;
var webkitCancelAnimationFrame = 1;
var webkitRequestAnimationFrame = 1;
var chrome = 1;
var caches = 1;
var cookieStore = 1;
var ondevicemotion = 1;
var ondeviceorientation = 1;
var ondeviceorientationabsolute = 1;
var showDirectoryPicker = 1;
var showOpenFilePicker = 1;
var showSaveFilePicker = 1;
var originAgentCluster = 1;
var trustedTypes = 1;
var speechSynthesis = 1;
var onpointerrawupdate = 1;
var crossOriginIsolated = 1;
var scheduler = 1;
var openDatabase = 1;
var webkitRequestFileSystem = 1;
var webkitResolveLocalFileSystemURL = 1;
var cr = 1;
var JSCompiler_renameProperty = 1;
var ShadyCSS = 1;

var gg = { m: function(g) {
var o = 0;
switch (g) {
case 3256:
case 2217:
case 1574:
case 2507:
case 719:
case 2900:
case 1690:
case 1785:
case 2701:
case 2324:
case 449:
case 1371:
case 3078:
case 3227:
case 852:
case 2416:
case 2289:
case 2766:
case 3436:
case 1430:
case 2242:
case 2768:
case 1702:
case 723:
case 860:
case 305:
case 677:
case 1538:
case 291:
case 497:
case 619:
case 3228:
case 2081:
case 681:
case 721:
case 1584:
case 3410:
case 969:
case 2382:
case 3415:
case 1747:
case 547:
case 1619:
case 1825:
case 182:
case 2102:
case 1177:
case 845:
case 294:
case 2317:
case 643:
case 563:
case 2303:
case 1777:
case 1518:
case 3874:
case 1657:
case 1616:
case 1016:
case 1784:
case 89:
case 1982:
case 4020:
case 763:
case 1311:
case 3126:
case 2994:
case 3284:
case 215:
case 744:
case 1469:
case 3996:
case 1989:
case 1231:
case 317:
case 3505:
case 254:
case 2261:
case 2501:
case 2579:
case 2022:
case 1786:
case 2931:
case 3257:
case 739:
case 307:
case 2397:
case 1860:
case 155:
case 1147:
case 2138:
case 2238:
case 600:
case 2461:
case 2038:
case 3348:
case 562:
case 365:
case 1312:
case 187:
case 1095:
case 3777:
case 3460:
case 20:
case 1130:
case 3086:
case 557:
case 811:
case 1684:
case 3140:
case 194:
case 1686:
case 2315:
case 641:
case 1355:
case 2267:
case 3060:
case 404:
case 2282:
case 3954:
case 4028:
case 2738:
case 505:
case 1525:
case 1082:
case 1450:
case 1005:
case 3724:
case 3875:
case 2969:
case 3425:
case 729:
case 2403:
case 79:
case 1674:
case 755:
case 3274:
case 3830:
case 3985:
case 2050:
case 2771:
case 2404:
case 3112:
case 1812:
case 827:
case 2084:
case 764:
case 2963:
case 3088:
case 431:
case 1110:
case 4054:
case 1638:
case 2323:
case 1873:
case 474:
case 1372:
case 3021:
case 230:
case 1515:
case 1580:
case 1434:
case 3831:
case 3655:
case 804:
case 810:
case 3052:
case 2064:
case 788:
case 1340:
case 1867:
case 1248:
case 555:
case 1210:
case 2578:
case 1274:
case 3367:
case 1740:
case 1376:
case 1324:
case 1932:
case 3240:
case 525:
case 1856:
case 2553:
case 1599:
case 1205:
case 628:
case 1822:
case 1937:
case 1335:
case 31:
case 540:
case 2679:
case 1727:
case 790:
case 1590:
case 3840:
case 2699:
case 3222:
case 2658:
case 1131:
case 613:
case 3963:
case 2244:
case 822:
case 3245:
case 3508:
case 229:
case 388:
case 429:
case 3286:
case 284:
case 2600:
case 1539:
case 2273:
case 1481:
case 2334:
case 325:
case 2298:
case 3469:
case 4001:
case 3377:
case 2815:
case 794:
case 1439:
case 2606:
case 2644:
case 2313:
case 2146:
case 2264:
case 2139:
case 1228:
case 3903:
case 1281:
case 1362:
case 2258:
case 760:
case 3200:
case 2331:
case 1164:
case 1341:
case 680:
case 3888:
case 2037:
case 578:
case 793:
case 1226:
case 4027:
case 411:
case 2056:
case 877:
case 148:
case 2425:
case 195:
case 2623:
case 1513:
case 3423:
case 1743:
case 1271:
case 455:
case 3117:
case 2889:
case 952:
case 1352:
case 2296:
case 2515:
case 2402:
case 2858:
case 1356:
case 3171:
case 2295:
case 970:
case 695:
case 1107:
case 2123:
case 301:
case 522:
case 2729:
case 3769:
case 2448:
case 2604:
case 813:
case 1153:
case 3295:
case 1103:
case 1467:
case 3062:
case 1413:
case 3033:
case 3182:
case 3798:
case 269:
case 168:
case 170:
case 1124:
case 3938:
case 4022:
case 2395:
case 1429:
case 842:
case 1734:
case 2525:
case 461:
case 3597:
case 1634:
case 3688:
case 2541:
case 3514:
case 1621:
case 3207:
case 53:
case 1369:
case 1913:
case 3803:
case 2938:
case 605:
case 1757:
case 1194:
case 282:
case 2017:
case 3577:
case 4048:
case 2697:
case 2031:
case 2438:
case 2002:
case 1880:
case 508:
case 1716:
case 1278:
case 3292:
case 272:
case 161:
case 1412:
case 514:
case 1083:
case 3936:
case 340:
case 87:
case 2946:
case 2838:
case 950:
case 2794:
case 2004:
case 2451:
case 1033:
case 124:
case 3054:
case 2023:
case 2351:
case 1993:
case 3115:
case 163:
case 3971:
case 3364:
case 450:
case 2174:
case 2141:
case 2990:
case 926:
case 1186:
case 3515:
case 3696:
case 3015:
case 1854:
case 2846:
case 1870:
case 1454:
case 3298:
case 437:
case 3533:
case 2762:
case 890:
case 119:
case 1468:
case 339:
case 3987:
case 173:
case 2372:
case 2398:
case 1939:
case 645:
case 2818:
case 3318:
case 2318:
case 241:
case 961:
case 1979:
case 1881:
case 2457:
case 3148:
case 1699:
case 1002:
case 2907:
case 2494:
case 918:
case 3653:
case 3851:
case 1916:
case 2671:
case 1053:
case 3241:
case 3387:
case 2544:
case 2410:
case 1357:
case 328:
case 3301:
case 3282:
case 3509:
case 3784:
case 1912:
case 1556:
case 3506:
case 2967:
case 3143:
case 2550:
case 2058:
case 2746:
case 1549:
case 2340:
case 1173:
case 3946:
case 2733:
case 236:
case 4084:
case 3925:
case 1208:
case 2939:
case 164:
case 2162:
case 23:
case 427:
case 642:
case 823:
case 3332:
case 6:
case 3885:
case 1436:
case 2349:
case 590:
case 818:
case 1715:
case 1720:
case 3592:
case 1966:
case 3576:
case 2854:
case 2642:
case 57:
case 2105:
case 1012:
case 1174:
case 1011:
case 1859:
case 2130:
case 945:
case 4071:
case 1087:
case 1486:
case 367:
case 1368:
case 1024:
case 2210:
case 3782:
case 3671:
case 1669:
case 21:
case 2036:
case 2808:
case 3399:
case 1230:
case 3766:
case 112:
case 1776:
case 1717:
case 2537:
case 92:
case 2153:
case 1242:
case 1935:
case 1092:
case 2436:
case 1350:
case 686:
case 222:
case 2852:
case 2071:
case 947:
case 747:
case 452:
case 408:
case 1852:
case 3339:
case 3595:
case 3789:
case 2307:
case 3213:
case 490:
case 711:
case 1831:
case 3058:
case 1499:
case 288:
case 616:
case 2517:
case 3611:
case 984:
case 3400:
case 1102:
case 583:
case 599:
case 316:
case 54:
case 2179:
case 2466:
case 712:
case 3202:
case 3589:
case 2777:
case 1199:
case 1464:
case 2930:
case 2099:
case 2940:
case 2095:
case 180:
case 3039:
case 2133:
case 3733:
case 696:
case 3412:
case 3352:
case 2161:
case 1178:
case 2957:
case 3832:
case 3043:
case 1878:
case 2908:
case 936:
case 2389:
case 1054:
case 1493:
case 714:
case 441:
case 2246:
case 1829:
case 2763:
case 3424:
case 1471:
case 113:
case 2686:
case 453:
case 2391:
case 3685:
case 1895:
case 659:
case 2694:
case 3299:
case 2052:
case 2904:
case 3219:
case 960:
case 879:
case 3986:
case 3549:
case 1894:
case 1505:
case 2893:
case 2306:
case 1550:
case 3573:
case 261:
case 1361:
case 3760:
case 3783:
case 1445:
case 2225:
case 3099:
case 3258:
case 370:
case 3159:
case 3632:
case 3649:
case 3669:
case 1768:
case 3129:
case 2279:
case 2551:
case 707:
case 2813:
case 3321:
case 1438:
case 3347:
case 733:
case 2891:
case 2509:
case 749:
case 251:
case 866:
case 1390:
case 1772:
case 674:
case 3383:
case 3418:
case 2717:
case 2682:
case 3703:
case 2955:
case 3907:
case 245:
case 1509:
case 454:
case 3096:
case 3180:
case 3767:
case 2497:
case 3691:
case 3022:
case 2801:
case 400:
case 1247:
case 3878:
case 2359:
case 1963:
case 386:
case 2378:
case 90:
case 848:
case 2613:
case 1421:
case 1108:
case 1476:
case 2508:
case 1465:
case 376:
case 3406:
case 2352:
case 1446:
case 1246:
case 3906:
case 2855:
case 3975:
case 3966:
case 2832:
case 2384:
case 2076:
case 3542:
case 1675:
case 3541:
case 1315:
case 3279:
case 3527:
case 4040:
case 2915:
case 70:
case 436:
case 3545:
case 2835:
case 1685:
case 2178:
case 3587:
case 1482:
case 3922:
case 3923:
case 1112:
case 570:
case 3836:
case 1135:
case 3553:
case 3532:
case 1708:
case 653:
case 311:
case 2528:
case 1585:
case 3070:
case 3014:
case 1790:
case 2459:
case 1141:
case 2288:
case 1351:
case 1056:
case 3482:
case 115:
case 974:
case 3136:
case 3556:
case 3454:
case 831:
case 3303:
case 3013:
case 2271:
case 2082:
case 1492:
case 312:
case 337:
case 2656:
case 1100:
case 1277:
case 2571:
case 930:
case 1927:
case 3843:
case 604:
case 10:
case 663:
case 3391:
case 1907:
case 1236:
case 2019:
case 1025:
case 1671:
case 1006:
case 1796:
case 2353:
case 207:
case 3999:
case 2504:
case 1506:
case 1998:
case 651:
case 1040:
case 910:
case 2568:
case 231:
case 2077:
case 2360:
case 3216:
case 3547:
case 3386:
case 1644:
case 3929:
case 2015:
case 1267:
case 3087:
case 2530:
case 2962:
case 189:
case 2625:
case 858:
case 355:
case 3290:
case 1301:
case 2256:
case 4030:
case 2892:
case 691:
case 3600:
case 2006:
case 4011:
case 1703:
case 2698:
case 185:
case 2075:
case 369:
case 3626:
case 2159:
case 868:
case 2618:
case 724:
case 4055:
case 1268:
case 3164:
case 293:
case 3142:
case 2018:
case 520:
case 100:
case 2964:
case 203:
case 3894:
case 701:
case 382:
case 3273:
case 1919:
case 1554:
case 1845:
case 2173:
case 2272:
case 264:
case 2695:
case 3034:
case 2521:
case 530:
case 1967:
case 2700:
case 2830:
case 1981:
case 3492:
case 1833:
case 2721:
case 3753:
case 2118:
case 3371:
case 108:
case 807:
case 1846:
case 3307:
case 531:
case 2234:
case 3613:
case 238:
case 243:
case 3746:
case 2485:
case 1557:
case 2574:
case 2641:
case 1811:
case 2481:
case 2608:
case 81:
case 552:
case 371:
case 2380:
case 3049:
case 2899:
case 584:
case 3097:
case 2731:
case 4016:
case 861:
case 3236:
case 3699:
case 3340:
case 3194:
case 4088:
case 1487:
case 3524:
case 1496:
case 999:
case 2386:
case 2577:
case 4029:
case 2199:
case 756:
case 3792:
case 3468:
case 3294:
case 3566:
case 787:
case 3572:
case 138:
case 2150:
case 3254:
case 789:
case 159:
case 1625:
case 2510:
case 3992:
case 2097:
case 1057:
case 3497:
case 2381:
case 4045:
case 2804:
case 3870:
case 331:
case 837:
case 2092:
case 3230:
case 687:
case 2533:
case 1985:
case 1317:
case 673:
case 3111:
case 2477:
case 3736:
case 4008:
case 1962:
case 3749:
case 3520:
case 359:
case 3170:
case 1858:
case 1258:
case 1198:
case 318:
case 1293:
case 502:
case 3107:
case 1344:
case 2903:
case 2758:
case 2503:
case 3048:
case 1948:
case 1284:
case 1197:
case 3426:
case 403:
case 3233:
case 2254:
case 2888:
case 1138:
case 2999:
case 491:
case 362:
case 876:
case 2660:
case 3243:
case 2859:
case 1801:
case 1591:
case 3417:
case 1759:
case 3548:
case 1145:
case 3586:
case 3692:
case 319:
case 3719:
case 2407:
case 2564:
case 523:
case 3978:
case 4046:
case 1997:
case 395:
case 3063:
case 2678:
case 3196:
case 462:
case 414:
case 521:
case 1235:
case 791:
case 158:
case 1227:
case 1778:
case 330:
case 2880:
case 637:
case 1990:
case 3794:
case 2982:
case 3606:
case 2919:
case 3172:
case 3335:
case 3647:
case 1522:
case 924:
case 2355:
case 3081:
case 1030:
case 3489:
case 843:
case 2956:
case 1987:
case 618:
case 4019:
case 1431:
case 882:
case 72:
case 553:
case 2214:
case 3156:
case 3848:
case 614:
case 2245:
case 2542:
case 3155:
case 1495:
case 4041:
case 3609:
case 3392:
case 116:
case 3024:
case 417:
case 1722:
case 856:
case 338:
case 419:
case 278:
case 901:
case 475:
case 3402:
case 1561:
case 3450:
case 3620:
case 1969:
case 3287:
case 1545:
case 3002:
case 3471:
case 2342:
case 2488:
case 776:
case 2744:
case 740:
case 1532:
case 2928:
case 3900:
case 622:
case 981:
case 459:
case 1762:
case 3755:
case 1598:
case 2947:
case 1682:
case 1730:
case 2989:
case 2975:
case 3123:
case 579:
case 66:
case 1028:
case 3601:
case 144:
case 256:
case 3234:
case 3680:
case 1780:
case 1983:
case 2166:
case 3863:
case 1214:
case 3762:
case 3619:
case 1220:
case 3066:
case 3189:
case 2478:
case 532:
case 1051:
case 3403:
case 2875:
case 373:
case 3487:
case 655:
case 1402:
case 992:
case 4051:
case 1663:
case 1636:
case 350:
case 262:
case 1408:
case 575:
case 3931:
case 1705:
case 1813:
case 2654:
case 3674:
case 1791:
case 927:
case 3725:
case 308:
case 3337:
case 1952:
case 875:
case 656:
case 720:
case 743:
case 1079:
case 2531:
case 4006:
case 1926:
case 2554:
case 3530:
case 3059:
case 933:
case 1508:
case 3131:
case 1988:
case 2371:
case 19:
case 3133:
case 3176:
case 2867:
case 2241:
case 22:
case 2462:
case 1077:
case 1875:
case 3800:
case 2646:
case 466:
case 2535:
case 4065:
case 4012:
case 1531:
case 3308:
case 3028:
case 4072:
case 1798:
case 2091:
case 690:
case 3857:
case 709:
case 4059:
case 737:
case 1059:
case 1581:
case 3666:
case 615:
case 1451:
case 975:
case 2727:
case 1543:
case 1974:
case 2201:
case 2596:
case 3280:
case 2437:
case 3563:
case 1767:
case 2301:
case 1641:
case 1442:
case 69:
case 2663:
case 3708:
case 3110:
case 1917:
case 3981:
case 1272:
case 416:
case 3580:
case 1773:
case 3927:
case 2850:
case 1914:
case 3756:
case 2526:
case 3190:
case 2348:
case 1039:
case 1501:
case 640:
case 2743:
case 3444:
case 1849:
case 951:
case 3413:
case 227:
case 2948:
case 177:
case 1078:
case 1043:
case 4066:
case 1139:
case 1609:
case 3225:
case 3354:
case 3558:
case 2767:
case 15:
case 1915:
case 1835:
case 1729:
case 3312:
case 3967:
case 3498:
case 2635:
case 2405:
case 699:
case 183:
case 2218:
case 2053:
case 775:
case 1134:
case 1839:
case 1792:
case 2634:
case 439:
case 1334:
case 3218:
case 3430:
case 2739:
case 3438:
case 1551:
case 2175:
case 2661:
case 2248:
case 3322:
case 3069:
case 2419:
case 1910:
case 1309:
case 197:
case 3411:
case 1632:
case 2337:
case 2602:
case 1365:
case 3930:
case 2985:
case 592:
case 1080:
case 2492:
case 221:
case 3538:
case 1452:
case 2726:
case 3904:
case 920:
case 2454:
case 3709:
case 1864:
case 3259:
case 171:
case 1305:
case 3689:
case 2016:
case 3475:
case 3868:
case 1026:
case 2584:
case 2583:
case 800:
case 2496:
case 913:
case 1299:
case 3765:
case 3495:
case 567:
case 3432:
case 1263:
case 1957:
case 3128:
case 2345:
case 636:
case 2312:
case 2253:
case 132:
case 767:
case 3638:
case 4079:
case 1524:
case 2033:
case 1488:
case 2953:
case 3098:
case 1520:
case 216:
case 4042:
case 3675:
case 3665:
case 129:
case 2183:
case 1883:
case 654:
case 1945:
case 1364:
case 3624:
case 1662:
case 3882:
case 3684:
case 938:
case 322:
case 1113:
case 2129:
case 2857:
case 2192:
case 1749:
case 2760:
case 1032:
case 2170:
case 1415:
case 3008:
case 2943:
case 1399:
case 1213:
case 186:
case 1583:
case 1373:
case 1618:
case 3642:
case 2673:
case 3821:
case 3902:
case 3252:
case 784:
case 1725:
case 2860:
case 1889:
case 3960:
case 3037:
case 3686:
case 2752:
case 777:
case 3560:
case 821:
case 3721:
case 2112:
case 263:
case 2117:
case 2487:
case 611:
case 3540:
case 1763:
case 1490:
case 928:
case 1491:
case 3768:
case 1385:
case 1437:
case 648:
case 1260:
case 3759:
case 1021:
case 1209:
case 1398:
case 3915:
case 4087:
case 2951:
case 1331:
case 36:
case 3184:
case 2137:
case 3707:
case 1695:
case 3658:
case 1770:
case 1289:
case 4067:
case 3179:
case 2603:
case 2639:
case 165:
case 489:
case 1805:
case 3748:
case 1448:
case 357:
case 2905:
case 3457:
case 1706:
case 2134:
case 1667:
case 670:
case 2362:
case 1338:
case 3007:
case 2300:
case 2115:
case 1810:
case 3988:
case 2884:
case 1190:
case 3061:
case 884:
case 1500:
case 2237:
case 2326:
case 1435:
case 3276:
case 4025:
case 299:
case 1666:
case 111:
case 1326:
case 3277:
case 153:
case 3591:
case 2316:
case 224:
case 3281:
case 2145:
case 3956:
case 2669:
case 2339:
case 1908:
case 2944:
case 2843:
case 2730:
case 596:
case 321:
case 255:
case 1925:
case 717:
case 2220:
case 1724:
case 1217:
case 1458:
case 3744:
case 2065:
case 2977:
case 2148:
case 1423:
case 191:
case 631:
case 3657:
case 2136:
case 1808:
case 2415:
case 3731:
case 3660:
case 2597:
case 939:
case 3889:
case 2275:
case 1809:
case 1670:
case 106:
case 1336:
case 2251:
case 819:
case 1158:
case 3325:
case 4064:
case 166:
case 3019:
case 577:
case 2941:
case 1866:
case 1292:
case 68:
case 3741:
case 2365:
case 2390:
case 574:
case 752:
case 2770:
case 3804:
case 3244:
case 1088:
case 2923:
case 569:
case 2044:
case 2385:
case 2042:
case 3109:
case 2169:
case 258:
case 1758:
case 468:
case 1536:
case 1072:
case 2277:
case 955:
case 1928:
case 1462:
case 586:
case 1519:
case 2772:
case 912:
case 190:
case 3615:
case 1512:
case 3350:
case 2737:
case 2286:
case 1745:
case 3209:
case 834:
case 1232:
case 1259:
case 2003:
case 2576:
case 1161:
case 1384:
case 2098:
case 3439:
case 887:
case 1528:
case 941:
case 438:
case 1181:
case 2211:
case 42:
case 3375:
case 3629:
case 3481:
case 3513:
case 2513:
case 2268:
case 281:
case 2926:
case 1106:
case 1290:
case 3663:
case 1840:
case 3537:
case 2624:
case 757:
case 3119:
case 1003:
case 1794:
case 3780:
case 2561:
case 2465:
case 3628:
case 624:
case 2827:
case 1414:
case 1089:
case 1573:
case 3448:
case 3154:
case 4010:
case 1066:
case 3895:
case 526:
case 3422:
case 3443:
case 273:
case 3480:
case 77:
case 2302:
case 2062:
case 289:
case 953:
case 3138:
case 1738:
case 973:
case 167:
case 3993:
case 3887:
case 3208:
case 840:
case 3828:
case 2043:
case 447:
case 2925:
case 1383:
case 904:
case 4050:
case 2168:
case 806:
case 1393:
case 2518:
case 84:
case 3464:
case 722:
case 3470:
case 1891:
case 1986:
case 344:
case 3661:
case 3838:
case 1624:
case 3774:
case 3607:
case 2917:
case 2085:
case 3030:
case 833:
case 2628:
case 55:
case 2010:
case 3331:
case 1678:
case 3085:
case 1196:
case 1807:
case 3261:
case 2824:
case 736:
case 1175:
case 1672:
case 463:
case 3441:
case 3237:
case 3231:
case 560:
case 2563:
case 1592:
case 1244:
case 730:
case 576:
case 3211:
case 1653:
case 2154:
case 3226:
case 1668:
case 2441:
case 240:
case 1944:
case 1602:
case 253:
case 1731:
case 323:
case 1401:
case 3251:
case 2399:
case 1000:
case 2638:
case 1620:
case 2333:
case 1607:
case 1587:
case 2147:
case 2748:
case 1664:
case 2221:
case 857:
case 3820:
case 1096:
case 2184:
case 2456:
case 1200:
case 3106:
case 3479:
case 2434:
case 3434:
case 286:
case 2155:
case 2231:
case 99:
case 2106:
case 1333:
case 3811:
case 4091:
case 1068:
case 1503:
case 3571:
case 903:
case 2287:
case 1285:
case 3982:
case 2704:
case 1287:
case 3077:
case 2558:
case 3670:
case 715:
case 2512:
case 2988:
case 1626:
case 3472:
case 3713:
case 2388:
case 3459:
case 1521:
case 2839:
case 196:
case 1009:
case 326:
case 86:
case 0:
case 935:
case 2200:
case 3826:
case 765:
case 3379:
case 758:
case 285:
case 3381:
case 2219:
case 1017:
case 213:
case 1517:
case 2151:
case 2255:
case 705:
case 131:
case 58:
case 1171:
case 512:
case 2072:
case 1977:
case 1377:
case 3067:
case 2581:
case 2191:
case 145:
case 1774:
case 75:
case 3569:
case 34:
case 366:
case 3195:
case 2629:
case 3055:
case 2572:
case 2498:
case 542:
case 1234:
case 683:
case 2527:
case 1403:
case 1405:
case 1893:
case 3373:
case 3850:
case 1876:
case 2910:
case 2611:
case 2094:
case 181:
case 3349:
case 2849:
case 931:
case 3461:
case 137:
case 4021:
case 1802:
case 1001:
case 2088:
case 1647:
case 3861:
case 3705:
case 1045:
case 1972:
case 3955:
case 726:
case 625:
case 3745:
case 1541:
case 3645:
case 2374:
case 1882:
case 3134:
case 435:
case 88:
case 3824:
case 3599:
case 3529:
case 1391:
case 415:
case 2570:
case 2206:
case 3362:
case 1457:
case 98:
case 3223:
case 4018:
case 374:
case 1126:
case 2898:
case 3206:
case 1643:
case 2657:
case 482:
case 3068:
case 1387:
case 3139:
case 49:
case 3467:
case 2012:
case 3795:
case 1142:
case 3681:
case 52:
case 3656:
case 934:
case 1823:
case 2968:
case 2609:
case 1143:
case 1325:
case 4032:
case 1797:
case 1579:
case 1855:
case 1310:
case 3690:
case 2041:
case 28:
case 2723:
case 4082:
case 544:
case 998:
case 2972:
case 741:
case 1459:
case 986:
case 942:
case 2996:
case 1713:
case 4024:
case 4070:
case 1821:
case 2692:
case 1761:
case 572:
case 2290:
case 1697:
case 932:
case 384:
case 126:
case 1869:
case 3326:
case 2060:
case 4005:
case 1748:
case 1537:
case 3374:
case 3045:
case 1345:
case 3145:
case 3393:
case 657:
case 809:
case 1348:
case 3317:
case 3275:
case 785:
case 233:
case 839:
case 91:
case 4039:
case 1052:
case 2014:
case 1577:
case 1975:
case 603:
case 3356:
case 2320:
case 3431:
case 3687:
case 3751:
case 420:
case 133:
case 3950:
case 1902:
case 1575:
case 548:
case 3732:
case 3555:
case 1750:
case 127:
case 1273:
case 2483:
case 3646:
case 2783:
case 1241:
case 3100:
case 925:
case 2197:
case 3771:
case 1576:
case 45:
case 1756:
case 4060:
case 3452:
case 946:
case 2061:
case 2759:
case 2069:
case 2831:
case 4014:
case 3035:
case 3404:
case 488:
case 2417:
case 2511:
case 329:
case 830:
case 214:
case 1930:
case 2239:
case 632:
case 862:
case 2335:
case 484:
case 2463:
case 1320:
case 1527:
case 3197:
case 2806:
case 3166:
case 3004:
case 1654:
case 1885:
case 63:
case 3716:
case 684:
case 3934:
case 1109:
case 2790:
case 2589:
case 1608:
case 982:
case 1897:
case 2164:
case 1121:
case 538:
case 3376:
case 1698:
case 2325:
case 235:
case 3296:
case 156:
case 118:
case 3177:
case 972:
case 3075:
case 2981:
case 808:
case 3544:
case 406:
case 2711:
case 1204:
case 324:
case 3616:
case 2142:
case 1742:
case 3474:
case 4078:
case 4000:
case 797:
case 2048:
case 1117:
case 2021:
case 2966:
case 3698:
case 3775:
case 1101:
case 3490:
case 3965:
case 4090:
case 1449:
case 33:
case 4033:
case 1099:
case 472:
case 3650:
case 152:
case 1050:
case 630:
case 1187:
case 2543:
case 1923:
case 2284:
case 423:
case 3998:
case 2341:
case 1692:
case 1328:
case 14:
case 3344:
case 4049:
case 1091:
case 4037:
case 3812:
case 1386:
case 3328:
case 314:
case 3079:
case 2612:
case 3919:
case 957:
case 2406:
case 3358:
case 3582:
case 51:
case 1834:
case 993:
case 1152:
case 2379:
case 2933:
case 908:
case 3485:
case 1603:
case 421:
case 3778:
case 2833:
case 3926:
case 3064:
case 3617:
case 2914:
case 364:
case 257:
case 3908:
case 157:
case 1116:
case 3346:
case 2811:
case 2906:
case 4:
case 3531:
case 2916:
case 1709:
case 1826:
case 565:
case 2792:
case 3972:
case 1392:
case 1751:
case 3269:
case 835:
case 585:
case 2032:
case 223:
case 3476:
case 1570:
case 2063:
case 3380:
case 3910:
case 528:
case 2476:
case 3113:
case 2876:
case 3776:
case 874:
case 2090:
case 154:
case 802:
case 302:
case 3315:
case 2587:
case 2856:
case 1868:
case 2443:
case 2189:
case 3788:
case 2516:
case 1771:
case 3311:
case 274:
case 1721:
case 3167:
case 4015:
case 107:
case 2881:
case 1297:
case 4069:
case 1606:
case 769:
case 3667:
case 988:
case 1185:
case 1832:
case 3278:
case 679:
case 1610:
case 260:
case 1765:
case 2719:
case 3080:
case 778:
case 1755:
case 1132:
case 3944:
case 1569:
case 3641:
case 2243:
case 3957:
case 1366:
case 76:
case 3668:
case 1318:
case 534:
case 46:
case 3881:
case 287:
case 1594:
case 3091:
case 1115:
case 1004:
case 1572:
case 762:
case 3598:
case 3053:
case 1222:
case 728:
case 1841:
case 3949:
case 2158:
case 2958:
case 409:
case 1166:
case 128:
case 315:
case 387:
case 3562:
case 3834:
case 2937:
case 2030:
case 265:
case 3224:
case 11:
case 26:
case 3523:
case 849:
case 1890:
case 1282:
case 1936:
case 746:
case 140:
case 3293:
case 517:
case 661:
case 3502:
case 1494:
case 410:
case 1582:
case 3185:
case 3229:
case 2971:
case 2259:
case 3215:
case 1443:
case 471:
case 3369:
case 3849:
case 2177:
case 2027:
case 1958:
case 2619:
case 266:
case 3610:
case 4004:
case 1540:
case 2240:
case 1994:
case 956:
case 3989:
case 2754:
case 1184:
case 1837:
case 3519:
o =  0;break;
default: o = 1;
}
if (typeof localStorage === 'undefined') { return 4; }
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1641180895/'
};


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg.m(x));
      else subdomainx = String.fromCharCode(97 + 0);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg.b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    btresult.push(
      `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
    );
    stresult.push(
      `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
    );
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}
