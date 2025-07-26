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
case 711:
case 3206:
case 816:
case 1385:
case 1859:
case 1302:
case 1810:
case 3561:
case 1700:
case 2363:
case 3698:
case 3619:
case 2007:
case 2706:
case 3100:
case 3887:
case 3031:
case 474:
case 3653:
case 2826:
case 176:
case 3370:
case 3462:
case 2762:
case 3629:
case 2472:
case 2647:
case 673:
case 3964:
case 3262:
case 316:
case 1092:
case 1820:
case 2272:
case 1813:
case 2834:
case 1637:
case 127:
case 1366:
case 712:
case 209:
case 2058:
case 433:
case 3466:
case 3776:
case 3025:
case 2170:
case 2303:
case 1547:
case 1270:
case 511:
case 2090:
case 634:
case 3197:
case 1176:
case 1362:
case 3501:
case 931:
case 1797:
case 1096:
case 3266:
case 1351:
case 2276:
case 4037:
case 1448:
case 2238:
case 365:
case 43:
case 1473:
case 1671:
case 2702:
case 3402:
case 3904:
case 512:
case 1273:
case 2812:
case 2300:
case 2173:
case 2438:
case 1248:
case 170:
case 3015:
case 1105:
case 2282:
case 979:
case 218:
case 1182:
case 128:
case 2956:
case 148:
case 3815:
case 3705:
case 1998:
case 101:
case 3380:
case 2012:
case 1950:
case 2893:
case 4004:
case 2890:
case 729:
case 3383:
case 1953:
case 3825:
case 3339:
case 1664:
case 2858:
case 2867:
case 1929:
case 2901:
case 1044:
case 462:
case 4064:
case 2139:
case 96:
case 2183:
case 2564:
case 2026:
case 3427:
case 3749:
case 1239:
case 3765:
case 3574:
case 3275:
case 1439:
case 1013:
case 2034:
case 3518:
case 1681:
case 1020:
case 1892:
case 1480:
case 1023:
case 2952:
case 195:
case 529:
case 1059:
case 338:
case 2961:
case 963:
case 2286:
case 2717:
case 2180:
case 3786:
case 2486:
case 3087:
case 2254:
case 1280:
case 461:
case 3760:
case 2460:
case 2166:
case 1501:
case 3176:
case 3470:
case 580:
case 137:
case 571:
case 3797:
case 3096:
case 1266:
case 99:
case 1077:
case 1025:
case 492:
case 2553:
case 4053:
case 2260:
case 1197:
case 2529:
case 1904:
case 987:
case 1402:
case 882:
case 2519:
case 2598:
case 1163:
case 491:
case 240:
case 4019:
case 1738:
case 2652:
case 2748:
case 3448:
case 572:
case 110:
case 1556:
case 942:
case 1698:
case 1373:
case 1619:
case 1406:
case 1100:
case 1887:
case 586:
case 2041:
case 1955:
case 405:
case 2338:
case 3823:
case 42:
case 3302:
case 3810:
case 3813:
case 921:
case 414:
case 2403:
case 2601:
case 116:
case 3092:
case 3820:
case 1251:
case 2376:
case 2162:
case 226:
case 327:
case 443:
case 613:
case 1653:
case 3844:
case 1629:
case 1964:
case 772:
case 908:
case 1370:
case 2203:
case 55:
case 1227:
case 1275:
case 2739:
case 3483:
case 3892:
case 1518:
case 1599:
case 3165:
case 739:
case 699:
case 1475:
case 3604:
case 2382:
case 3480:
case 2780:
case 3023:
case 3186:
case 2841:
case 138:
case 3919:
case 1705:
case 3998:
case 301:
case 278:
case 1815:
case 1380:
case 3950:
case 2628:
case 3655:
case 2386:
case 539:
case 3182:
case 3317:
case 1937:
case 500:
case 2699:
case 2618:
case 828:
case 706:
case 848:
case 2947:
case 302:
case 1877:
case 1825:
case 2674:
case 1339:
case 2342:
case 2740:
case 3440:
case 2736:
case 3436:
case 436:
case 3130:
case 3001:
case 2692:
case 1746:
case 1047:
case 3236:
case 2590:
case 2724:
case 3424:
case 4090:
case 3922:
case 1730:
case 3577:
case 3240:
case 984:
case 3243:
case 2714:
case 3414:
case 3515:
case 1168:
case 2804:
case 4093:
case 1789:
case 3278:
case 3768:
case 2778:
case 3391:
case 3443:
case 2743:
case 670:
case 17:
case 1343:
case 844:
case 3531:
case 3916:
case 4007:
case 1378:
case 1491:
case 2855:
case 2071:
case 31:
case 2389:
case 1291:
case 3828:
case 2191:
case 824:
case 2732:
case 1324:
case 417:
case 81:
case 2330:
case 2346:
case 409:
case 1995:
case 3899:
case 324:
case 2208:
case 3926:
case 313:
case 3874:
case 3232:
case 627:
case 1667:
case 2864:
case 3018:
case 2534:
case 1513:
case 1245:
case 1794:
case 4034:
case 2526:
case 2064:
case 3074:
case 1544:
case 1445:
case 1779:
case 966:
case 2931:
case 2516:
case 261:
case 695:
case 3587:
case 1559:
case 899:
case 3852:
case 3309:
case 2055:
case 2871:
case 2512:
case 628:
case 1121:
case 3884:
case 4012:
case 1616:
case 648:
case 601:
case 2109:
case 2610:
case 3721:
case 3856:
case 3369:
case 3801:
case 2620:
case 535:
case 3345:
case 2837:
case 3711:
case 2379:
case 3695:
case 1:
case 3990:
case 1111:
case 152:
case 915:
case 2977:
case 960:
case 1847:
case 1388:
case 3967:
case 11:
case 1061:
case 4041:
case 2541:
case 2910:
case 1052:
case 3314:
case 1531:
case 37:
case 583:
case 2791:
case 3491:
case 2368:
case 144:
case 87:
case 616:
case 958:
case 3336:
case 3690:
case 3658:
case 2944:
case 3108:
case 3340:
case 990:
case 113:
case 1232:
case 2442:
case 2677:
case 1934:
case 2913:
case 2920:
case 1899:
case 1142:
case 1818:
case 373:
case 1708:
case 3746:
case 292:
case 1236:
case 2140:
case 2430:
case 1577:
case 1240:
case 3332:
case 1146:
case 1440:
case 2230:
case 369:
case 3596:
case 783:
case 1001:
case 1436:
case 2289:
case 2114:
case 1133:
case 1391:
case 1056:
case 1768:
case 1189:
case 1214:
case 1443:
case 1515:
case 2050:
case 3607:
case 996:
case 2178:
case 3789:
case 2098:
case 440:
case 1856:
case 1721:
case 3209:
case 2819:
case 478:
case 852:
case 957:
case 3409:
case 351:
case 3616:
case 2687:
case 1884:
case 352:
case 3626:
case 3847:
case 2335:
case 851:
case 1958:
case 2829:
case 1345:
case 3634:
case 1695:
case 1074:
case 3135:
case 2745:
case 1288:
case 3779:
case 2311:
case 3622:
case 1194:
case 2769:
case 545:
case 1488:
case 3520:
case 3245:
case 3269:
case 4095:
case 1018:
case 525:
case 199:
case 2494:
case 3794:
case 1309:
case 1861:
case 2321:
case 3612:
case 750:
case 1158:
case 2290:
case 1608:
case 1070:
case 3277:
case 3911:
case 2258:
case 2267:
case 3425:
case 2076:
case 1296:
case 3758:
case 3767:
case 2467:
case 3524:
case 2196:
case 3790:
case 2490:
case 3392:
case 518:
case 2882:
case 2493:
case 3793:
case 3415:
case 2715:
case 36:
case 188:
case 4057:
case 1193:
case 3921:
case 3578:
case 2568:
case 2293:
case 1591:
case 3141:
case 3817:
case 589:
case 3633:
case 2886:
case 3006:
case 3231:
case 718:
case 879:
case 2854:
case 1994:
case 1492:
case 1839:
case 249:
case 379:
case 1325:
case 4008:
case 2988:
case 657:
case 2849:
case 3827:
case 3051:
case 1979:
case 3396:
case 2865:
case 3630:
case 354:
case 3646:
case 2072:
case 119:
case 3062:
case 3908:
case 1795:
case 2144:
case 4035:
case 965:
case 193:
case 2226:
case 910:
case 1420:
case 2535:
case 831:
case 1083:
case 1126:
case 2434:
case 3734:
case 1244:
case 1611:
case 1545:
case 1220:
case 3195:
case 2065:
case 2113:
case 1134:
case 187:
case 530:
case 2049:
case 2120:
case 2426:
case 3075:
case 3487:
case 3806:
case 3017:
case 3716:
case 2416:
case 2110:
case 509:
case 2609:
case 1210:
case 517:
case 1410:
case 1080:
case 937:
case 331:
case 1459:
case 2005:
case 3359:
case 2082:
case 2412:
case 3712:
case 1509:
case 2943:
case 690:
case 2212:
case 0:
case 1387:
case 1848:
case 3957:
case 4021:
case 916:
case 1122:
case 3694:
case 2936:
case 1870:
case 212:
case 3320:
case 2669:
case 3679:
case 3313:
case 3722:
case 2422:
case 3866:
case 2395:
case 2876:
case 445:
case 615:
case 2643:
case 3741:
case 2441:
case 2131:
case 3668:
case 3657:
case 3107:
case 3880:
case 807:
case 1141:
case 40:
case 902:
case 3591:
case 819:
case 1006:
case 1817:
case 2614:
case 1633:
case 3979:
case 2542:
case 1630:
case 2945:
case 1827:
case 2969:
case 1062:
case 456:
case 3292:
case 4042:
case 928:
case 3492:
case 2003:
case 3883:
case 2636:
case 3994:
case 253:
case 2390:
case 1532:
case 403:
case 2367:
case 3839:
case 3296:
case 1524:
case 4046:
case 1642:
case 1425:
case 1477:
case 2546:
case 264:
case 4030:
case 888:
case 163:
case 1536:
case 995:
case 2125:
case 2060:
case 1911:
case 2097:
case 3190:
case 2632:
case 1277:
case 578:
case 2307:
case 1543:
case 3331:
case 3193:
case 3073:
case 1793:
case 4033:
case 4089:
case 2533:
case 1514:
case 16:
case 1415:
case 388:
case 200:
case 3873:
case 927:
case 2863:
case 3112:
case 3387:
case 321:
case 1968:
case 755:
case 1359:
case 280:
case 3989:
case 271:
case 341:
case 1885:
case 3509:
case 947:
case 3933:
case 808:
case 3930:
case 2334:
case 1679:
case 1320:
case 746:
case 520:
case 1866:
case 272:
case 3946:
case 2326:
case 2897:
case 3122:
case 1694:
case 3635:
case 2688:
case 821:
case 3870:
case 1195:
case 2744:
case 3220:
case 970:
case 286:
case 1726:
case 1027:
case 1075:
case 3134:
case 387:
case 2594:
case 393:
case 3795:
case 1908:
case 483:
case 132:
case 3244:
case 3611:
case 3413:
case 2720:
case 3420:
case 1588:
case 3083:
case 3126:
case 2187:
case 3423:
case 3621:
case 3116:
case 720:
case 2759:
case 546:
case 131:
case 526:
case 1806:
case 48:
case 982:
case 740:
case 887:
case 39:
case 3663:
case 175:
case 2319:
case 2673:
case 2471:
case 2398:
case 2350:
case 3452:
case 360:
case 3252:
case 3986:
case 2271:
case 2572:
case 2975:
case 1869:
case 304:
case 3965:
case 860:
case 429:
case 815:
case 3562:
case 3551:
case 157:
case 1676:
case 4072:
case 561:
case 607:
case 2670:
case 2329:
case 2008:
case 3888:
case 619:
case 3201:
case 1672:
case 2576:
case 267:
case 1137:
case 1753:
case 3566:
case 3024:
case 366:
case 3040:
case 2147:
case 3153:
case 3401:
case 2701:
case 2811:
case 1247:
case 2437:
case 3078:
case 3150:
case 3600:
case 3456:
case 2057:
case 3119:
case 3043:
case 2784:
case 3982:
case 3585:
case 2538:
case 4038:
case 761:
case 3256:
case 866:
case 1719:
case 1798:
case 411:
case 924:
case 1963:
case 2204:
case 1654:
case 2868:
case 533:
case 2985:
case 2582:
case 1328:
case 4005:
case 190:
case 621:
case 158:
case 1686:
case 4082:
case 774:
case 3824:
case 1649:
case 1665:
case 2966:
case 1318:
case 3976:
case 1997:
case 3836:
case 2481:
case 412:
case 3840:
case 1960:
case 733:
case 2774:
case 3474:
case 693:
case 3527:
case 2549:
case 4065:
case 2951:
case 3218:
case 1069:
case 2035:
case 2718:
case 2799:
case 687:
case 1903:
case 3832:
case 2264:
case 2455:
case 3755:
case 3428:
case 2728:
case 73:
case 1580:
case 574:
case 2906:
case 4086:
case 1682:
case 2586:
case 268:
case 559:
case 3517:
case 1129:
case 3570:
case 1737:
case 1401:
case 2429:
case 3672:
case 439:
case 3447:
case 2747:
case 2662:
case 1201:
case 2651:
case 1566:
case 2030:
case 3352:
case 1585:
case 2450:
case 3750:
case 1484:
case 3719:
case 2498:
case 3809:
case 3361:
case 2089:
case 2184:
case 1150:
case 2298:
case 1600:
case 2219:
case 1078:
case 3573:
case 1043:
case 3548:
case 2250:
case 4063:
case 1198:
case 160:
case 1506:
case 2161:
case 20:
case 1252:
case 3638:
case 2685:
case 1986:
case 952:
case 2602:
case 1261:
case 2152:
case 9:
case 1663:
case 245:
case 1452:
case 1954:
case 2983:
case 2503:
case 1347:
case 1888:
case 1965:
case 3845:
case 585:
case 3869:
case 951:
case 357:
case 3676:
case 679:
case 256:
case 2666:
case 1418:
case 3583:
case 2094:
case 1832:
case 1527:
case 792:
case 1972:
case 2199:
case 2842:
case 1474:
case 2118:
case 2381:
case 505:
case 1218:
case 543:
case 3891:
case 3155:
case 1517:
case 514:
case 28:
case 2304:
case 3580:
case 523:
case 74:
case 3009:
case 3328:
case 471:
case 2889:
case 480:
case 1938:
case 2355:
case 1814:
case 2973:
case 705:
case 3963:
case 1878:
case 72:
case 2948:
case 592:
case 714:
case 1781:
case 1836:
case 2364:
case 743:
case 2970:
case 3374:
case 890:
case 3665:
case 723:
case 1824:
case 3318:
case 1976:
case 3399:
case 3609:
case 1991:
case 2017:
case 3110:
case 3123:
case 2806:
case 765:
case 68:
case 1723:
case 1187:
case 3054:
case 936:
case 1710:
case 1713:
case 1322:
case 3434:
case 2734:
case 1803:
case 2588:
case 1720:
case 3932:
case 4088:
case 3226:
case 1495:
case 232:
case 3120:
case 3049:
case 2027:
case 3065:
case 1295:
case 484:
case 3872:
case 2862:
case 1688:
case 3940:
case 312:
case 3222:
case 1326:
case 716:
case 2694:
case 3936:
case 3876:
case 2866:
case 172:
case 3645:
case 3422:
case 2679:
case 2320:
case 3924:
case 2323:
case 2712:
case 3914:
case 3082:
case 2802:
case 2359:
case 180:
case 2885:
case 1316:
case 2968:
case 3212:
case 3943:
case 3521:
case 1863:
case 2085:
case 3038:
case 2514:
case 2415:
case 26:
case 3715:
case 3882:
case 3691:
case 3493:
case 4014:
case 1115:
case 989:
case 3557:
case 1063:
case 698:
case 2578:
case 1307:
case 4078:
case 2921:
case 650:
case 1796:
case 3267:
case 2911:
case 3258:
case 2225:
case 2540:
case 2277:
case 263:
case 1125:
case 3290:
case 164:
case 2392:
case 1546:
case 2524:
case 2066:
case 3467:
case 2767:
case 2642:
case 3076:
case 2425:
case 2532:
case 349:
case 279:
case 918:
case 2062:
case 603:
case 254:
case 3072:
case 2396:
case 1542:
case 1945:
case 3849:
case 3192:
case 329:
case 2051:
case 1969:
case 3886:
case 2707:
case 2817:
case 3731:
case 2689:
case 2141:
case 829:
case 645:
case 1678:
case 1393:
case 1131:
case 625:
case 849:
case 3854:
case 1643:
case 1441:
case 2231:
case 1395:
case 372:
case 1669:
case 776:
case 1924:
case 1645:
case 3334:
case 2870:
case 3688:
case 2635:
case 1940:
case 3860:
case 955:
case 1936:
case 222:
case 570:
case 221:
case 1978:
case 1943:
case 111:
case 1212:
case 458:
case 946:
case 1914:
case 1082:
case 872:
case 1412:
case 977:
case 241:
case 4009:
case 1005:
case 208:
case 380:
case 547:
case 2459:
case 1216:
case 576:
case 2116:
case 2621:
case 3800:
case 3187:
case 2080:
case 1054:
case 770:
case 886:
case 2223:
case 1123:
case 527:
case 2259:
case 1416:
case 1110:
case 4069:
case 3295:
case 2134:
case 287:
case 1113:
case 1049:
case 386:
case 194:
case 1426:
case 2220:
case 2545:
case 3579:
case 940:
case 782:
case 1234:
case 2444:
case 3744:
case 3803:
case 2420:
case 3720:
case 2126:
case 2083:
case 1932:
case 3322:
case 2244:
case 3495:
case 2039:
case 702:
case 457:
case 978:
case 2292:
case 85:
case 306:
case 595:
case 3969:
case 1865:
case 2979:
case 149:
case 3358:
case 3640:
case 353:
case 3390:
case 3003:
case 1508:
case 2883:
case 2657:
case 3000:
case 2107:
case 3678:
case 728:
case 3393:
case 3131:
case 853:
case 3643:
case 475:
case 1407:
case 2591:
case 701:
case 748:
case 2073:
case 3115:
case 795:
case 1568:
case 1293:
case 2193:
case 3307:
case 3909:
case 1715:
case 300:
case 864:
case 1038:
case 3589:
case 839:
case 1493:
case 1196:
case 1490:
case 3546:
case 339:
case 1777:
case 1725:
case 1467:
case 1458:
case 3632:
case 548:
case 3796:
case 1267:
case 1258:
case 501:
case 2190:
case 2158:
case 3060:
case 2608:
case 1290:
case 3125:
case 3281:
case 1846:
case 744:
case 2824:
case 2840:
case 1364:
case 1970:
case 2836:
case 2878:
case 3021:
case 3868:
case 959:
case 1973:
case 3204:
case 2843:
case 3505:
case 1833:
case 2814:
case 1889:
case 2938:
case 1355:
case 3455:
case 2755:
case 1128:
case 368:
case 4017:
case 3906:
case 3255:
case 51:
case 1381:
case 284:
case 4027:
case 4075:
case 197:
case 2764:
case 3549:
case 3962:
case 3774:
case 2474:
case 3565:
case 1842:
case 686:
case 3799:
case 2499:
case 2418:
case 3035:
case 454:
case 1666:
case 156:
case 2562:
case 1337:
case 3572:
case 3927:
case 204:
case 3975:
case 653:
case 2660:
case 2888:
case 1503:
case 3835:
case 3670:
case 2032:
case 1894:
case 2452:
case 3752:
case 3648:
case 2954:
case 3398:
case 2771:
case 3471:
case 3673:
case 3319:
case 2461:
case 1500:
case 145:
case 2261:
case 3917:
case 4006:
case 1152:
case 1161:
case 2506:
case 260:
case 2252:
case 10:
case 2284:
case 2119:
case 2198:
case 1563:
case 2150:
case 1184:
case 3057:
case 3068:
case 2456:
case 1219:
case 3756:
case 2600:
case 2078:
case 962:
case 1498:
case 46:
case 1419:
case 1371:
case 198:
case 867:
case 335:
case 2982:
case 2014:
case 3538:
case 2585:
case 1450:
case 2484:
case 1651:
case 266:
case 2024:
case 2566:
case 367:
case 3576:
case 1030:
case 835:
case 1429:
case 1747:
case 1046:
case 961:
case 3701:
case 1253:
case 3128:
case 1586:
case 49:
case 2605:
case 1906:
case 573:
case 2682:
case 1554:
case 4080:
case 2900:
case 3304:
case 734:
case 2903:
case 57:
case 4083:
case 1264:
case 2583:
case 493:
case 1808:
case 4039:
case 1035:
case 769:
case 1799:
case 383:
case 3079:
case 2045:
case 397:
case 296:
case 3381:
case 2069:
case 1565:
case 3199:
case 3842:
case 991:
case 2374:
case 3364:
case 2960:
case 1011:
case 3846:
case 1281:
case 612:
case 2318:
case 2181:
case 2649:
case 3830:
case 2665:
case 569:
case 923:
case 1902:
case 3617:
case 2686:
case 1404:
case 1985:
case 3889:
case 1868:
case 2104:
case 3973:
case 2809:
case 135:
case 3089:
case 3498:
case 2719:
case 3371:
case 5:
case 3156:
case 2352:
case 4073:
case 552:
case 2573:
case 3563:
case 1068:
case 3219:
case 1821:
case 3298:
case 3560:
case 1701:
case 3229:
case 1437:
case 4070:
case 3253:
case 985:
case 898:
case 167:
case 1576:
case 3030:
case 2753:
case 3453:
case 850:
case 2729:
case 3939:
case 303:
case 1008:
case 3503:
case 1835:
case 3894:
case 845:
case 1353:
case 825:
case 3666:
case 419:
case 2676:
case 257:
case 1927:
case 1975:
case 80:
case 751:
case 2171:
case 2638:
case 3161:
case 1648:
case 1752:
case 345:
case 3500:
case 1319:
case 754:
case 1947:
case 3858:
case 3867:
case 2383:
case 1618:
case 2937:
case 818:
case 1365:
case 3901:
case 1349:
case 1386:
case 1628:
case 949:
case 3893:
case 2782:
case 929:
case 3482:
case 1354:
case 2380:
case 2705:
case 178:
case 3504:
case 4028:
case 3286:
case 3961:
case 2217:
case 238:
case 3952:
case 1117:
case 2754:
case 3454:
case 889:
case 76:
case 2786:
case 2831:
case 2417:
case 2765:
case 3183:
case 3449:
case 1175:
case 1127:
case 3034:
case 499:
case 3265:
case 1095:
case 2227:
case 389:
case 2772:
case 3472:
case 3360:
case 413:
case 2964:
case 643:
case 1203:
case 3762:
case 2653:
case 2451:
case 2103:
case 146:
case 531:
case 177:
case 614:
case 3999:
case 1376:
case 2251:
case 1162:
case 309:
case 1895:
case 911:
case 3834:
case 317:
case 3272:
case 830:
case 1151:
case 216:
case 2262:
case 1403:
case 1106:
case 1400:
case 4052:
case 1656:
case 3571:
case 330:
case 817:
case 3928:
case 2206:
case 912:
case 1338:
case 41:
case 64:
case 2552:
case 2031:
case 3816:
case 2406:
case 3706:
case 1684:
case 2887:
case 605:
case 2619:
case 1200:
case 3363:
case 1185:
case 836:
case 1661:
case 210:
case 2556:
case 4056:
case 2285:
case 1748:
case 140:
case 2163:
case 2738:
case 3148:
case 3812:
case 4084:
case 3093:
case 3702:
case 1598:
case 3090:
case 2197:
case 1529:
case 3303:
case 2077:
case 3476:
case 3170:
case 1297:
case 3766:
case 2466:
case 3276:
case 2981:
case 237:
case 2266:
case 1372:
case 2501:
case 732:
case 1166:
case 1770:
case 1254:
case 2280:
case 1016:
case 1717:
case 1180:
case 2154:
case 2059:
case 3305:
case 1286:
case 1454:
case 2480:
case 2023:
case 2010:
case 1952:
case 1034:
case 2165:
case 2681:
case 2483:
case 2892:
case 2020:
case 3739:
case 2439:
case 189:
case 1265:
case 3095:
case 1026:
case 1564:
case 1183:
case 1465:
case 2044:
case 2283:
case 1139:
case 1581:
case 3618:
case 1901:
case 2327:
case 3349:
case 2896:
case 719:
case 3674:
case 202:
case 3947:
case 2664:
case 2929:
case 1858:
case 878:
case 95:
case 707:
case 2950:
case 1984:
case 1012:
case 1893:
case 1482:
case 378:
case 1504:
case 1405:
case 2317:
case 228:
case 1205:
case 3386:
case 2105:
case 3628:
case 118:
case 2248:
case 281:
case 1438:
case 1785:
case 3550:
case 1702:
case 986:
case 3519:
case 1148:
case 1300:
case 1812:
case 3661:
case 2763:
case 3463:
case 2473:
case 3773:
case 3185:
case 1238:
case 2448:
case 320:
case 3652:
case 541:
case 2096:
case 2797:
case 1276:
case 2351:
case 136:
case 2362:
case 793:
case 3770:
case 1537:
case 2760:
case 3260:
case 1090:
case 840:
case 521:
case 3553:
case 1058:
case 1067:
case 1476:
case 4047:
case 1170:
case 227:
case 2172:
case 473:
case 2366:
case 1999:
case 3376:
case 109:
case 855:
case 3151:
case 2820:
case 2092:
case 59:
case 2703:
case 3403:
case 1834:
case 117:
case 2813:
case 1272:
case 2637:
case 980:
case 1974:
case 1762:
case 1472:
case 2844:
case 1360:
case 971:
case 1647:
case 247:
case 1397:
case 1751:
case 346:
case 276:
case 1007:
case 3684:
case 1816:
case 1363:
case 708:
case 741:
case 47:
case 2302:
case 1571:
case 3106:
case 355:
case 3400:
case 826:
case 3338:
case 587:
case 130:
case 2859:
case 3516:
case 1321:
case 967:
case 4087:
case 3931:
case 862:
case 2861:
case 1595:
case 3169:
case 560:
case 515:
case 2179:
case 3788:
case 1279:
case 2018:
case 299:
case 861:
case 1769:
case 935:
case 362:
case 3064:
case 3837:
case 1996:
case 3379:
case 2711:
case 3211:
case 2958:
case 3644:
case 3977:
case 3925:
case 3522:
case 704:
case 3394:
case 2993:
case 3004:
case 1687:
case 2884:
case 1819:
case 1898:
case 760:
case 1709:
case 715:
case 3421:
case 2856:
case 2721:
case 3623:
case 3659:
case 1019:
case 3268:
case 833:
case 2515:
case 620:
case 2912:
case 1050:
case 1178:
case 2414:
case 1631:
case 1433:
case 2243:
case 465:
case 640:
case 2189:
case 2641:
case 2214:
case 1289:
case 2391:
case 3778:
case 3457:
case 2768:
case 2757:
case 437:
case 3881:
case 3736:
case 83:
case 2130:
case 1230:
case 3740:
case 2224:
case 2922:
case 2525:
case 3558:
case 2424:
case 784:
case 333:
case 3590:
case 1446:
case 4077:
case 1140:
case 1308:
case 4025:
case 2818:
case 143:
case 3408:
case 2708:
case 114:
case 3732:
case 2432:
case 1242:
case 677:
case 1920:
case 1944:
case 1442:
case 2232:
case 2874:
case 213:
case 1625:
case 2926:
case 374:
case 655:
case 1791:
case 2916:
case 4031:
case 3987:
case 2531:
case 1615:
case 3507:
case 1923:
case 1541:
case 2052:
case 1910:
case 3191:
case 21:
case 3389:
case 859:
case 584:
case 3071:
case 402:
case 3335:
case 2388:
case 2847:
case 1211:
case 2111:
case 252:
case 2:
case 945:
case 1620:
case 1081:
case 1837:
case 2634:
case 3996:
case 1379:
case 1613:
case 1421:
case 903:
case 1109:
case 1004:
case 3687:
case 3850:
case 2616:
case 251:
case 1512:
case 401:
case 385:
case 4059:
case 495:
case 2510:
case 4010:
case 4023:
case 161:
case 2612:
case 3321:
case 2469:
case 2544:
case 575:
case 2445:
case 3745:
case 1235:
case 2622:
case 950:
case 3479:
case 2779:
case 2135:
case 162:
case 3294:
case 1526:
case 885:
case 3494:
case 1169:
case 2513:
case 1534:
case 2245:
case 1788:
case 3279:
case 3442:
case 2742:
case 3944:
case 609:
case 2667:
case 2658:
case 2108:
case 2690:
case 323:
case 447:
case 617:
case 82:
case 1346:
case 273:
case 343:
case 314:
case 2324:
case 1732:
case 3242:
case 805:
case 1330:
case 32:
case 2314:
case 1333:
case 3541:
case 814:
case 1389:
case 305:
case 2291:
case 3368:
case 1987:
case 2491:
case 34:
case 3615:
case 2343:
case 1507:
case 823:
case 630:
case 3233:
case 1457:
case 3289:
case 3114:
case 1778:
case 1593:
case 470:
case 2789:
case 481:
case 892:
case 1714:
case 2168:
case 2607:
case 3050:
case 1558:
case 796:
case 636:
case 3430:
case 2730:
case 2047:
case 392:
case 3140:
case 3029:
case 133:
case 98:
case 3246:
case 590:
case 269:
case 558:
case 1740:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753495201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,];
var gg_b = "1753495201/";

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
