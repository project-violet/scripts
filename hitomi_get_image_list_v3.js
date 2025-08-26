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
case 761:
case 671:
case 415:
case 656:
case 4095:
case 1242:
case 688:
case 1237:
case 2544:
case 1216:
case 815:
case 2211:
case 3536:
case 694:
case 1627:
case 3517:
case 1143:
case 3767:
case 742:
case 3976:
case 886:
case 2092:
case 1318:
case 1373:
case 726:
case 569:
case 979:
case 4079:
case 3772:
case 2431:
case 2383:
case 2661:
case 3981:
case 3726:
case 1666:
case 3841:
case 2532:
case 2369:
case 1458:
case 3188:
case 2967:
case 950:
case 3687:
case 265:
case 53:
case 442:
case 927:
case 3292:
case 758:
case 14:
case 426:
case 1234:
case 2547:
case 2781:
case 1370:
case 3558:
case 2722:
case 1891:
case 1921:
case 1982:
case 2926:
case 2896:
case 1842:
case 4000:
case 3096:
case 557:
case 2972:
case 1771:
case 2380:
case 2631:
case 1226:
case 1173:
case 1118:
case 2282:
case 1864:
case 483:
case 1:
case 2204:
case 2697:
case 883:
case 1272:
case 2183:
case 672:
case 723:
case 435:
case 3390:
case 998:
case 1267:
case 3716:
case 3737:
case 3566:
case 1081:
case 984:
case 3007:
case 3955:
case 2553:
case 835:
case 1076:
case 1154:
case 1614:
case 1867:
case 3059:
case 3286:
case 2180:
case 735:
case 2207:
case 3305:
case 2694:
case 3501:
case 334:
case 16:
case 1424:
case 462:
case 1741:
case 3734:
case 3388:
case 2755:
case 2821:
case 2991:
case 2882:
case 3393:
case 2169:
case 423:
case 596:
case 823:
case 2804:
case 1872:
case 245:
case 783:
case 3487:
case 1401:
case 2937:
case 3021:
case 3539:
case 1763:
case 183:
case 3362:
case 2299:
case 3751:
case 3995:
case 1680:
case 76:
case 3413:
case 4081:
case 3729:
case 3830:
case 1439:
case 2505:
case 3903:
case 3478:
case 2440:
case 1938:
case 2030:
case 2324:
case 3377:
case 4076:
case 1049:
case 296:
case 368:
case 2618:
case 190:
case 2136:
case 3230:
case 2117:
case 2673:
case 141:
case 3620:
case 1510:
case 2590:
case 1683:
case 531:
case 1197:
case 2609:
case 1698:
case 123:
case 3099:
case 2428:
case 3900:
case 2443:
case 162:
case 351:
case 46:
case 7:
case 376:
case 3833:
case 2654:
case 3465:
case 1789:
case 3635:
case 2899:
case 3225:
case 2327:
case 2703:
case 115:
case 1095:
case 565:
case 2101:
case 2060:
case 3815:
case 3580:
case 1106:
case 293:
case 3860:
case 2358:
case 1548:
case 3613:
case 1523:
case 2124:
case 2640:
case 3678:
case 3852:
case 1079:
case 4055:
case 2256:
case 3038:
case 1480:
case 3347:
case 2245:
case 3708:
case 1003:
case 3719:
case 3448:
case 2470:
case 1733:
case 186:
case 3263:
case 2089:
case 819:
case 3435:
case 2985:
case 532:
case 2454:
case 2856:
case 3665:
case 280:
case 3289:
case 3056:
case 2127:
case 2628:
case 126:
case 719:
case 373:
case 3045:
case 3863:
case 1975:
case 300:
case 1520:
case 142:
case 1535:
case 3344:
case 1331:
case 269:
case 2919:
case 2336:
case 2749:
case 3420:
case 352:
case 2908:
case 161:
case 1000:
case 511:
case 2473:
case 1730:
case 891:
case 3244:
case 1231:
case 28:
case 3058:
case 1682:
case 952:
case 2236:
case 4035:
case 2217:
case 440:
case 3360:
case 2858:
case 2672:
case 30:
case 1297:
case 1604:
case 491:
case 1753:
case 507:
case 3352:
case 2702:
case 295:
case 1774:
case 2168:
case 522:
case 2814:
case 2416:
case 1901:
case 3389:
case 3847:
case 546:
case 3832:
case 3014:
case 136:
case 3125:
case 1894:
case 2442:
case 2784:
case 408:
case 3133:
case 2592:
case 2541:
case 3247:
case 1555:
case 3676:
case 3232:
case 1750:
case 1966:
case 2961:
case 1512:
case 3622:
case 1294:
case 3363:
case 1607:
case 1831:
case 740:
case 1185:
case 3455:
case 2817:
case 2434:
case 2787:
case 375:
case 664:
case 2044:
case 774:
case 4048:
case 3706:
case 3412:
case 4023:
case 3862:
case 504:
case 2368:
case 3850:
case 1459:
case 492:
case 2642:
case 892:
case 2616:
case 2138:
case 2062:
case 951:
case 729:
case 3274:
case 543:
case 2227:
case 1958:
case 1806:
case 2472:
case 4010:
case 460:
case 3115:
case 2801:
case 1914:
case 3797:
case 185:
case 3152:
case 3877:
case 521:
case 2426:
case 1744:
case 3001:
case 860:
case 2266:
case 1482:
case 3160:
case 1206:
case 3853:
case 2586:
case 3066:
case 3612:
case 1522:
case 578:
case 125:
case 2571:
case 1861:
case 2375:
case 3277:
case 2053:
case 2224:
case 2634:
case 3655:
case 777:
case 3794:
case 1151:
case 210:
case 1917:
case 2156:
case 1732:
case 3422:
case 3027:
case 1407:
case 3481:
case 3333:
case 3163:
case 789:
case 3476:
case 792:
case 2997:
case 2827:
case 49:
case 278:
case 3288:
case 3757:
case 192:
case 3599:
case 3600:
case 816:
case 2239:
case 1134:
case 3141:
case 416:
case 655:
case 833:
case 89:
case 281:
case 3192:
case 2954:
case 2533:
case 177:
case 2485:
case 3890:
case 2408:
case 485:
case 3371:
case 3575:
case 1656:
case 2973:
case 510:
case 160:
case 1645:
case 4087:
case 3386:
case 1998:
case 1828:
case 2090:
case 885:
case 3770:
case 2307:
case 1983:
case 2748:
case 2419:
case 324:
case 618:
case 2723:
case 3290:
case 3603:
case 1969:
case 785:
case 398:
case 1228:
case 243:
case 825:
case 1638:
case 2359:
case 1468:
case 4002:
case 1013:
case 3888:
case 3039:
case 716:
case 3923:
case 2382:
case 2321:
case 3948:
case 2970:
case 3773:
case 79:
case 2088:
case 1980:
case 1372:
case 221:
case 1840:
case 2093:
case 733:
case 1705:
case 914:
case 1270:
case 530:
case 174:
case 1035:
case 299:
case 2619:
case 1456:
case 2107:
case 191:
case 1699:
case 2451:
case 1500:
case 3186:
case 2280:
case 3083:
case 413:
case 3740:
case 2778:
case 1164:
case 1818:
case 3965:
case 1873:
case 2713:
case 1793:
case 3556:
case 3392:
case 2928:
case 2898:
case 1020:
case 3545:
case 387:
case 2869:
case 2182:
case 2121:
case 1273:
case 1126:
case 3649:
case 108:
case 3069:
case 713:
case 1172:
case 2589:
case 2104:
case 1209:
case 379:
case 2560:
case 1870:
case 1595:
case 1391:
case 3743:
case 3080:
case 222:
case 2396:
case 595:
case 3728:
case 2552:
case 1316:
case 1023:
case 3978:
case 2940:
case 1048:
case 2311:
case 1939:
case 2880:
case 342:
case 100:
case 2573:
case 2279:
case 2768:
case 3851:
case 437:
case 68:
case 2509:
case 1665:
case 1435:
case 1583:
case 3725:
case 2690:
case 414:
case 3730:
case 45:
case 3000:
case 152:
case 1260:
case 2029:
case 1153:
case 1344:
case 3483:
case 3331:
case 3535:
case 4011:
case 2933:
case 2554:
case 1177:
case 3523:
case 1613:
case 2895:
case 538:
case 1785:
case 2570:
case 247:
case 3106:
case 75:
case 148:
case 1580:
case 714:
case 2693:
case 1815:
case 315:
case 737:
case 386:
case 3733:
case 2879:
case 1569:
case 1332:
case 3003:
case 1708:
case 2799:
case 1347:
case 2557:
case 1162:
case 358:
case 3480:
case 2803:
case 1150:
case 1949:
case 2085:
case 3698:
case 3361:
case 2963:
case 434:
case 3715:
case 3131:
case 2249:
case 341:
case 3956:
case 834:
case 4059:
case 1230:
case 2543:
case 817:
case 2302:
case 4021:
case 3789:
case 4004:
case 151:
case 1410:
case 2384:
case 2738:
case 1900:
case 323:
case 1132:
case 2960:
case 2756:
case 1995:
case 717:
case 2745:
case 3208:
case 555:
case 2952:
case 3578:
case 1350:
case 244:
case 1362:
case 3513:
case 1623:
case 1147:
case 383:
case 3763:
case 1539:
case 925:
case 2493:
case 168:
case 3049:
case 518:
case 3938:
case 2488:
case 2387:
case 3285:
case 267:
case 3439:
case 1830:
case 4007:
case 3306:
case 734:
case 134:
case 570:
case 2281:
case 503:
case 2222:
case 2506:
case 681:
case 2462:
case 2276:
case 4075:
case 3170:
case 678:
case 2123:
case 544:
case 1271:
case 1021:
case 3401:
case 876:
case 3340:
case 2313:
case 218:
case 2026:
case 3157:
case 3264:
case 567:
case 3741:
case 1734:
case 1004:
case 476:
case 2072:
case 929:
case 3584:
case 2453:
case 776:
case 3118:
case 3617:
case 1527:
case 339:
case 604:
case 3226:
case 2644:
case 2310:
case 1791:
case 2135:
case 3076:
case 2992:
case 2822:
case 1742:
case 621:
case 1955:
case 1007:
case 3081:
case 2474:
case 1737:
case 2561:
case 2365:
case 1390:
case 2711:
case 1241:
case 3357:
case 2178:
case 2677:
case 34:
case 1514:
case 473:
case 3624:
case 2246:
case 1764:
case 3959:
case 873:
case 1687:
case 1188:
case 3601:
case 800:
case 2212:
case 1193:
case 682:
case 3771:
case 1096:
case 452:
case 2091:
case 3842:
case 1011:
case 506:
case 940:
case 2650:
case 3982:
case 2662:
case 2323:
case 991:
case 3921:
case 2037:
case 2348:
case 3370:
case 1517:
case 1536:
case 2531:
case 2335:
case 3237:
case 3354:
case 3242:
case 1684:
case 2597:
case 448:
case 908:
case 3417:
case 3666:
case 2986:
case 1726:
case 1892:
case 2444:
case 2721:
case 2320:
case 2704:
case 1772:
case 2971:
case 663:
case 2812:
case 319:
case 2034:
case 3318:
case 3046:
case 622:
case 1976:
case 179:
case 3209:
case 2905:
case 2220:
case 1649:
case 2057:
case 2630:
case 3579:
case 187:
case 1495:
case 2489:
case 611:
case 3939:
case 2625:
case 1913:
case 1978:
case 2070:
case 1403:
case 3023:
case 3254:
case 1728:
case 3438:
case 70:
case 1080:
case 3668:
case 1743:
case 3595:
case 2993:
case 875:
case 1479:
case 102:
case 3445:
case 3699:
case 391:
case 3854:
case 2633:
case 775:
case 3035:
case 374:
case 2223:
case 2176:
case 3270:
case 2248:
case 3788:
case 1545:
case 4014:
case 3334:
case 3020:
case 150:
case 2346:
case 3675:
case 2018:
case 1910:
case 2009:
case 3468:
case 3638:
case 184:
case 198:
case 631:
case 3191:
case 1754:
case 3969:
case 1603:
case 4066:
case 2652:
case 1718:
case 3840:
case 1449:
case 2878:
case 1695:
case 939:
case 3372:
case 3980:
case 3078:
case 1893:
case 1888:
case 2798:
case 3326:
case 377:
case 1935:
case 1192:
case 2519:
case 2155:
case 209:
case 101:
case 389:
case 1288:
case 3475:
case 124:
case 2322:
case 1205:
case 3983:
case 1770:
case 2585:
case 3998:
case 3065:
case 4001:
case 4024:
case 360:
case 2780:
case 1371:
case 3499:
case 3576:
case 1655:
case 2641:
case 498:
case 3129:
case 1646:
case 3861:
case 484:
case 325:
case 1612:
case 1507:
case 1066:
case 898:
case 2100:
case 1853:
case 3206:
case 2714:
case 2802:
case 2564:
case 3747:
case 2471:
case 3002:
case 2944:
case 1422:
case 1027:
case 4039:
case 3732:
case 654:
case 3936:
case 61:
case 2486:
case 572:
case 3958:
case 649:
case 801:
case 3611:
case 1274:
case 962:
case 923:
case 2526:
case 1850:
case 2103:
case 597:
case 1189:
case 2572:
case 401:
case 333:
case 1160:
case 941:
case 3482:
case 1001:
case 2195:
case 205:
case 2006:
case 1152:
case 2717:
case 385:
case 1559:
case 2349:
case 824:
case 2887:
case 1115:
case 3404:
case 3806:
case 1024:
case 3762:
case 3108:
case 3294:
case 1622:
case 2686:
case 887:
case 3966:
case 479:
case 1232:
case 3351:
case 1676:
case 3555:
case 2953:
case 986:
case 750:
case 2671:
case 1133:
case 1017:
case 3329:
case 2031:
case 528:
case 3927:
case 2974:
case 915:
case 2701:
case 3777:
case 2300:
case 1844:
case 620:
case 3831:
case 1352:
case 1596:
case 3753:
case 2591:
case 10:
case 1360:
case 1761:
case 571:
case 1130:
case 3621:
case 2962:
case 3682:
case 1058:
case 1244:
case 3231:
case 680:
case 2516:
case 3894:
case 787:
case 1125:
case 2379:
case 336:
case 1832:
case 942:
case 669:
case 4083:
case 1847:
case 427:
case 1389:
case 635:
case 1884:
case 1486:
case 4040:
case 3145:
case 2422:
case 2027:
case 3931:
case 2481:
case 2250:
case 1471:
case 2476:
case 1564:
case 1802:
case 872:
case 1100:
case 501:
case 2066:
case 1287:
case 2612:
case 683:
case 3201:
case 996:
case 2277:
case 2646:
case 91:
case 954:
case 3464:
case 2330:
case 2115:
case 2253:
case 2024:
case 662:
case 949:
case 3077:
case 1349:
case 772:
case 4043:
case 1887:
case 3801:
case 623:
case 3994:
case 1932:
case 105:
case 1284:
case 2189:
case 2504:
case 641:
case 3368:
case 2850:
case 1526:
case 3138:
case 3467:
case 409:
case 2274:
case 598:
case 2521:
case 1202:
case 2844:
case 2446:
case 1300:
case 1724:
case 2455:
case 1441:
case 527:
case 550:
case 1974:
case 275:
case 3044:
case 1701:
case 93:
case 3787:
case 2036:
case 2017:
case 2412:
case 686:
case 4070:
case 3175:
case 3356:
case 1671:
case 728:
case 894:
case 2133:
case 1953:
case 471:
case 2247:
case 3345:
case 2676:
case 456:
case 871:
case 502:
case 1686:
case 2681:
case 3199:
case 2622:
case 2363:
case 2987:
case 3168:
case 1303:
case 3667:
case 788:
case 3416:
case 3702:
case 1727:
case 1094:
case 794:
case 428:
case 1379:
case 661:
case 4073:
case 3338:
case 771:
case 3784:
case 980:
case 3047:
case 3442:
case 756:
case 1766:
case 1537:
case 2244:
case 38:
case 2511:
case 587:
case 3217:
case 20:
case 1395:
case 1591:
case 642:
case 2596:
case 1993:
case 346:
case 2728:
case 2080:
case 322:
case 3940:
case 3159:
case 2403:
case 3880:
case 2913:
case 1625:
case 4031:
case 287:
case 911:
case 3869:
case 2495:
case 2649:
case 1220:
case 1452:
case 3283:
case 1905:
case 3104:
case 227:
case 4094:
case 3778:
case 1009:
case 1990:
case 3713:
case 3563:
case 3883:
case 2392:
case 2910:
case 1018:
case 2545:
case 1355:
case 1551:
case 3943:
case 2400:
case 3928:
case 575:
case 3898:
case 1054:
case 1248:
case 399:
case 1529:
case 1181:
case 3107:
case 3608:
case 202:
case 2186:
case 64:
case 3280:
case 3451:
case 2888:
case 2039:
case 1798:
case 1040:
case 1783:
case 2923:
case 3720:
case 3304:
case 1430:
case 1660:
case 3088:
case 1652:
case 3093:
case 1878:
case 2449:
case 321:
case 1265:
case 2603:
case 705:
case 3196:
case 3005:
case 1425:
case 197:
case 1689:
case 3735:
case 366:
case 172:
case 3957:
case 3359:
case 2371:
case 2575:
case 1865:
case 1043:
case 77:
case 2890:
case 2920:
case 1376:
case 3909:
case 3090:
case 2386:
case 224:
case 3723:
case 1585:
case 1433:
case 4006:
case 3307:
case 3748:
case 1322:
case 1663:
case 2288:
case 1508:
case 2599:
case 378:
case 1213:
case 2141:
case 1155:
case 2935:
case 3954:
case 3485:
case 1477:
case 859:
case 2004:
case 770:
case 4008:
case 3746:
case 3991:
case 3882:
case 703:
case 1026:
case 3804:
case 3406:
case 118:
case 1313:
case 3339:
case 3712:
case 4019:
case 3937:
case 2021:
case 345:
case 2524:
case 1647:
case 689:
case 4085:
case 2286:
case 3180:
case 1632:
case 1450:
case 234:
case 1281:
case 2912:
case 312:
case 943:
case 3086:
case 1561:
case 2390:
case 1474:
case 2007:
case 2716:
case 1796:
case 2955:
case 3071:
case 867:
case 2886:
case 2484:
case 3553:
case 3259:
case 1135:
case 1822:
case 3807:
case 1881:
case 904:
case 444:
case 803:
case 3221:
case 3282:
case 1453:
case 3183:
case 403:
case 1432:
case 2558:
case 1707:
case 3896:
case 2105:
case 3776:
case 25:
case 214:
case 2096:
case 982:
case 3369:
case 2193:
case 764:
case 3532:
case 365:
case 674:
case 1594:
case 2514:
case 1178:
case 2241:
case 3547:
case 907:
case 1653:
case 3497:
case 3092:
case 1034:
case 1971:
case 1444:
case 2892:
case 3383:
case 3431:
case 2922:
case 3661:
case 806:
case 2981:
case 1782:
case 2841:
case 3398:
case 2684:
case 2190:
case 1110:
case 1335:
case 2767:
case 3211:
case 1674:
case 922:
case 1554:
case 1933:
case 1800:
case 1029:
case 3409:
case 4037:
case 2215:
case 4016:
case 3749:
case 2260:
case 2252:
case 2420:
case 2583:
case 3454:
case 838:
case 3845:
case 3063:
case 380:
case 3127:
case 1102:
case 995:
case 3238:
case 1573:
case 2045:
case 1051:
case 4034:
case 3314:
case 2150:
case 106:
case 3245:
case 2708:
case 320:
case 1930:
case 2889:
case 2569:
case 357:
case 2423:
case 2332:
case 3089:
case 514:
case 164:
case 55:
case 2263:
case 1605:
case 930:
case 1688:
case 2580:
case 1200:
case 537:
case 3457:
case 1895:
case 2613:
case 3358:
case 1570:
case 147:
case 2852:
case 3124:
case 2678:
case 2177:
case 1738:
case 685:
case 818:
case 2099:
case 3779:
case 3268:
case 159:
case 3929:
case 2635:
case 3703:
case 2225:
case 4026:
case 1302:
case 418:
case 3033:
case 3618:
case 1528:
case 3117:
case 2075:
case 3951:
case 2353:
case 2620:
case 1249:
case 3673:
case 633:
case 3875:
case 349:
case 1085:
case 3609:
case 2413:
case 755:
case 2478:
case 31:
case 1849:
case 354:
case 3505:
case 3301:
case 1387:
case 3275:
case 2377:
case 3030:
case 1493:
case 396:
case 268:
case 2648:
case 2147:
case 2233:
case 3025:
case 144:
case 3114:
case 2350:
case 2751:
case 4064:
case 534:
case 170:
case 2068:
case 1960:
case 2995:
case 3593:
case 1748:
case 2983:
case 3433:
case 3585:
case 2065:
case 2843:
case 2828:
case 1090:
case 2998:
case 1909:
case 1918:
case 2010:
case 3376:
case 2645:
case 617:
case 3028:
case 3043:
case 2656:
case 3865:
case 3146:
case 1629:
case 2240:
case 3278:
case 710:
case 3769:
case 1485:
case 1533:
case 1954:
case 3155:
case 2134:
case 1239:
case 634:
case 2364:
case 2475:
case 525:
case 289:
case 3508:
case 121:
case 2840:
case 3878:
case 3652:
case 3660:
case 3430:
case 353:
case 810:
case 2372:
case 3813:
case 1321:
case 3615:
case 1382:
case 2078:
case 1970:
case 3040:
case 585:
case 3798:
case 1359:
case 2549:
case 2638:
case 2137:
case 2228:
case 1111:
case 1735:
case 397:
case 59:
case 1196:
case 2809:
case 614:
case 1928:
case 2788:
case 2257:
case 2334:
case 3018:
case 1883:
case 3346:
case 895:
case 4032:
case 1563:
case 495:
case 3820:
case 2818:
case 1269:
case 240:
case 72:
case 2854:
case 3835:
case 1608:
case 1107:
case 199:
case 3176:
case 3248:
case 2035:
case 274:
case 4044:
case 3625:
case 1311:
case 1765:
case 78:
case 2939:
case 2023:
case 1159:
case 2316:
case 1940:
case 122:
case 2668:
case 3988:
case 2167:
case 42:
case 1552:
case 2342:
case 146:
case 513:
case 1710:
case 3823:
case 1298:
case 2209:
case 1589:
case 3415:
case 830:
case 107:
case 3905:
case 1283:
case 208:
case 2126:
case 371:
case 1121:
case 1182:
case 2579:
case 2496:
case 2894:
case 1784:
case 236:
case 3094:
case 1906:
case 2774:
case 195:
case 1437:
case 1814:
case 1667:
case 1168:
case 763:
case 882:
case 3542:
case 899:
case 746:
case 1858:
case 673:
case 600:
case 3395:
case 722:
case 1217:
case 1236:
case 18:
case 3516:
case 1626:
case 499:
case 3766:
case 822:
case 1787:
case 2897:
case 3031:
case 2927:
case 846:
case 782:
case 1836:
case 3441:
case 1817:
case 3300:
case 3097:
case 3492:
case 2831:
case 422:
case 2185:
case 2607:
case 2108:
case 2512:
case 1199:
case 591:
case 407:
case 2762:
case 540:
case 3686:
case 2966:
case 2750:
case 906:
case 2555:
case 1541:
case 3534:
case 3953:
case 2546:
case 807:
case 1356:
case 4090:
case 2087:
case 2421:
case 3736:
case 1426:
case 1994:
case 3006:
case 2261:
case 3567:
case 2914:
case 1801:
case 529:
case 743:
case 285:
case 3349:
case 1472:
case 3947:
case 2806:
case 676:
case 2958:
case 1062:
case 1637:
case 3526:
case 1616:
case 2459:
case 478:
case 29:
case 2696:
case 881:
case 233:
case 3564:
case 4088:
case 668:
case 2084:
case 1156:
case 1074:
case 2002:
case 1931:
case 2407:
case 2151:
case 970:
case 1145:
case 2917:
case 903:
case 781:
case 560:
case 443:
case 466:
case 804:
case 967:
case 1224:
case 2861:
case 1201:
case 589:
case 592:
case 3287:
case 225:
case 866:
case 3061:
case 843:
case 2206:
case 404:
case 196:
case 1657:
case 3493:
case 1030:
case 812:
case 3488:
case 4086:
case 2285:
case 412:
case 154:
case 56:
case 11:
case 235:
case 2306:
case 3989:
case 3960:
case 3756:
case 3952:
case 3745:
case 1868:
case 1025:
case 2513:
case 3915:
case 745:
case 1033:
case 1703:
case 445:
case 2808:
case 3490:
case 359:
case 1268:
case 262:
case 2819:
case 1428:
case 223:
case 731:
case 3738:
case 1609:
case 3085:
case 1590:
case 2715:
case 2361:
case 1875:
case 2683:
case 3963:
case 2885:
case 2956:
case 2760:
case 539:
case 3249:
case 1951:
case 1136:
case 1618:
case 290:
case 411:
case 2394:
case 1838:
case 364:
case 675:
case 1089:
case 765:
case 286:
case 1470:
case 3879:
case 120:
case 4092:
case 3799:
case 2251:
case 811:
case 2079:
case 306:
case 3803:
case 1256:
case 1358:
case 347:
case 3570:
case 2523:
case 3925:
case 3693:
case 1052:
case 2106:
case 193:
case 3775:
case 2095:
case 13:
case 1060:
case 432:
case 2829:
case 261:
case 2730:
case 732:
case 3295:
case 2498:
case 2331:
case 2535:
case 3933:
case 519:
case 1919:
case 169:
case 242:
case 1238:
case 60:
case 1643:
case 3279:
case 3518:
case 1628:
case 1127:
case 180:
case 3509:
case 1845:
case 2851:
case 465:
case 457:
case 1398:
case 2834:
case 2012:
case 3855:
case 3986:
case 4089:
case 111:
case 956:
case 1383:
case 2907:
case 3444:
case 1431:
case 3846:
case 3971:
case 2373:
case 1041:
case 3320:
case 1497:
case 2046:
case 1092:
case 994:
case 2318:
case 3674:
case 526:
case 2216:
case 4015:
case 2237:
case 3110:
case 83:
case 687:
case 586:
case 3042:
case 73:
case 1380:
case 2771:
case 2837:
case 3091:
case 2414:
case 1896:
case 1494:
case 3348:
case 1781:
case 2982:
case 3323:
case 3016:
case 2921:
case 558:
case 3037:
case 2891:
case 3432:
case 3113:
case 880:
case 1547:
case 1139:
case 3255:
case 3178:
case 24:
case 3246:
case 602:
case 928:
case 757:
case 515:
case 1532:
case 1606:
case 4063:
case 1369:
case 2076:
case 81:
case 3881:
case 854:
case 3992:
case 997:
case 3822:
case 4030:
case 2343:
case 3796:
case 2022:
case 2427:
case 896:
case 3876:
case 749:
case 523:
case 41:
case 972:
case 3561:
case 3365:
case 131:
case 1183:
case 698:
case 2584:
case 2272:
case 3453:
case 1697:
case 1204:
case 2864:
case 2466:
case 1574:
case 1282:
case 2118:
case 2617:
case 3120:
case 3644:
case 1631:
case 2226:
case 4025:
case 2173:
case 1550:
case 2340:
case 1916:
case 1937:
case 2157:
case 2872:
case 318:
case 1406:
case 1804:
case 3026:
case 2911:
case 1746:
case 2826:
case 2424:
case 2996:
case 26:
case 2741:
case 2587:
case 3222:
case 449:
case 1859:
case 3450:
case 3506:
case 71:
case 1180:
case 754:
case 3123:
case 3647:
case 583:
case 2170:
case 796:
case 601:
case 2614:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756191601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,];
var gg_b = "1756191601/";

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
