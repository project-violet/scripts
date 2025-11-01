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
case 2719:
case 3447:
case 1861:
case 324:
case 1671:
case 1264:
case 434:
case 2392:
case 1606:
case 1730:
case 3062:
case 1816:
case 3150:
case 3028:
case 3584:
case 2337:
case 3294:
case 2865:
case 3505:
case 2355:
case 3653:
case 2169:
case 509:
case 2437:
case 2270:
case 223:
case 2051:
case 2492:
case 3719:
case 2447:
case 2473:
case 3455:
case 688:
case 1428:
case 3392:
case 858:
case 1895:
case 2062:
case 2724:
case 2028:
case 2584:
case 872:
case 546:
case 1047:
case 1199:
case 1576:
case 2294:
case 1328:
case 1362:
case 3865:
case 1740:
case 2505:
case 2373:
case 1288:
case 3446:
case 3169:
case 3782:
case 1852:
case 3522:
case 2808:
case 2958:
case 3437:
case 2336:
case 536:
case 323:
case 585:
case 3492:
case 1817:
case 3051:
case 1607:
case 566:
case 2700:
case 2636:
case 3071:
case 3531:
case 3503:
case 1628:
case 463:
case 2318:
case 1967:
case 2647:
case 314:
case 2353:
case 1872:
case 2673:
case 2541:
case 722:
case 1407:
case 3692:
case 2170:
case 3932:
case 738:
case 3997:
case 624:
case 120:
case 1714:
case 3826:
case 1018:
case 2453:
case 3475:
case 2418:
case 2269:
case 3996:
case 400:
case 551:
case 3636:
case 3700:
case 3978:
case 1406:
case 2531:
case 2006:
case 3863:
case 3318:
case 2375:
case 214:
case 3647:
case 3673:
case 3541:
case 1911:
case 2692:
case 2932:
case 3170:
case 464:
case 998:
case 2997:
case 2637:
case 175:
case 1966:
case 2194:
case 1535:
case 2646:
case 3453:
case 55:
case 1371:
case 1589:
case 1188:
case 1651:
case 3007:
case 3090:
case 3387:
case 763:
case 342:
case 906:
case 2486:
case 853:
case 2534:
case 1195:
case 2850:
case 3459:
case 448:
case 2900:
case 3263:
case 1723:
case 156:
case 2226:
case 515:
case 328:
case 2191:
case 4048:
case 3732:
case 1060:
case 2108:
case 3679:
case 1914:
case 3544:
case 3165:
case 438:
case 3797:
case 939:
case 2387:
case 601:
case 4093:
case 527:
case 1248:
case 1780:
case 1520:
case 2227:
case 1116:
case 3534:
case 2459:
case 259:
case 1272:
case 3778:
case 3900:
case 700:
case 16:
case 2263:
case 1161:
case 4038:
case 3226:
case 180:
case 684:
case 228:
case 782:
case 232:
case 1929:
case 949:
case 2487:
case 3108:
case 764:
case 1711:
case 1087:
case 854:
case 60:
case 662:
case 2797:
case 978:
case 3924:
case 734:
case 628:
case 3163:
case 632:
case 2721:
case 2379:
case 2581:
case 197:
case 2919:
case 20:
case 262:
case 3127:
case 1295:
case 1504:
case 1252:
case 2479:
case 201:
case 642:
case 3713:
case 4061:
case 3054:
case 1539:
case 3758:
case 412:
case 3265:
case 889:
case 1585:
case 13:
case 3660:
case 2510:
case 1217:
case 2126:
case 318:
case 2687:
case 1193:
case 2982:
case 892:
case 2924:
case 994:
case 384:
case 2163:
case 1261:
case 468:
case 3379:
case 1354:
case 3919:
case 517:
case 1148:
case 1674:
case 2127:
case 362:
case 743:
case 4017:
case 2686:
case 301:
case 2713:
case 2660:
case 3510:
case 570:
case 283:
case 218:
case 3291:
case 3982:
case 1454:
case 97:
case 1922:
case 1186:
case 1710:
case 2672:
case 2525:
case 3461:
case 2352:
case 1663:
case 3502:
case 2739:
case 2977:
case 2704:
case 2008:
case 168:
case 3749:
case 3901:
case 2395:
case 1017:
case 1781:
case 3638:
case 3998:
case 971:
case 1279:
case 2091:
case 3495:
case 2416:
case 710:
case 1061:
case 3672:
case 3785:
case 611:
case 1855:
case 3352:
case 3943:
case 1016:
case 3862:
case 3739:
case 1558:
case 1365:
case 497:
case 3008:
case 777:
case 825:
case 2254:
case 1837:
case 2693:
case 61:
case 2316:
case 3395:
case 2901:
case 44:
case 2851:
case 2976:
case 2998:
case 1984:
case 2361:
case 1846:
case 2871:
case 2338:
case 2956:
case 3472:
case 2661:
case 1709:
case 480:
case 3695:
case 2616:
case 4087:
case 3935:
case 2393:
case 276:
case 1286:
case 3448:
case 2523:
case 1875:
case 2783:
case 308:
case 3372:
case 1665:
case 554:
case 1179:
case 1093:
case 1596:
case 2438:
case 3957:
case 211:
case 3807:
case 3348:
case 1260:
case 46:
case 3154:
case 1426:
case 621:
case 1597:
case 3338:
case 1463:
case 1048:
case 3956:
case 2472:
case 2027:
case 3661:
case 1259:
case 2989:
case 3274:
case 720:
case 3806:
case 2695:
case 3616:
case 2935:
case 376:
case 3783:
case 3945:
case 1515:
case 179:
case 3438:
case 4:
case 2957:
case 2617:
case 311:
case 3567:
case 2348:
case 3493:
case 1287:
case 1931:
case 1691:
case 62:
case 2912:
case 1903:
case 4075:
case 3529:
case 3050:
case 3162:
case 795:
case 1369:
case 950:
case 296:
case 3271:
case 1155:
case 851:
case 182:
case 3206:
case 761:
case 3874:
case 1741:
case 1934:
case 1694:
case 519:
case 1469:
case 2688:
case 2151:
case 100:
case 240:
case 1137:
case 1500:
case 4053:
case 967:
case 657:
case 2789:
case 2162:
case 2050:
case 1147:
case 986:
case 2271:
case 1099:
case 1944:
case 1136:
case 866:
case 3756:
case 2664:
case 2206:
case 255:
case 2499:
case 330:
case 603:
case 1703:
case 2712:
case 1275:
case 3151:
case 1731:
case 1350:
case 340:
case 2399:
case 2757:
case 3069:
case 1370:
case 1650:
case 572:
case 3106:
case 846:
case 2464:
case 2939:
case 2699:
case 2743:
case 133:
case 1582:
case 1722:
case 38:
case 3228:
case 3262:
case 3540:
case 947:
case 143:
case 3094:
case 257:
case 1292:
case 2530:
case 885:
case 4036:
case 1470:
case 381:
case 991:
case 360:
case 4073:
case 1246:
case 529:
case 2070:
case 4047:
case 203:
case 1118:
case 2251:
case 1153:
case 1236:
case 2106:
case 204:
case 4092:
case 3777:
case 3743:
case 3699:
case 410:
case 73:
case 2228:
case 28:
case 640:
case 2540:
case 1247:
case 4046:
case 3364:
case 1088:
case 696:
case 3107:
case 260:
case 2488:
case 3070:
case 1175:
case 1669:
case 3235:
case 3771:
case 84:
case 1168:
case 2000:
case 930:
case 1569:
case 897:
case 1122:
case 2974:
case 4031:
case 3289:
case 2177:
case 335:
case 2143:
case 386:
case 709:
case 3990:
case 1624:
case 3706:
case 512:
case 3883:
case 940:
case 1014:
case 83:
case 3429:
case 1960:
case 3257:
case 2820:
case 345:
case 841:
case 2414:
case 665:
case 2771:
case 2329:
case 2235:
case 192:
case 1809:
case 470:
case 1619:
case 3177:
case 785:
case 235:
case 286:
case 2990:
case 2630:
case 2706:
case 691:
case 1203:
case 105:
case 2883:
case 69:
case 1682:
case 647:
case 1987:
case 3640:
case 3820:
case 1550:
case 1834:
case 1029:
case 245:
case 4041:
case 29:
case 1141:
case 8:
case 2019:
case 153:
case 522:
case 1382:
case 3135:
case 1755:
case 3885:
case 3340:
case 3839:
case 3728:
case 415:
case 3588:
case 1030:
case 3189:
case 265:
case 3157:
case 237:
case 787:
case 3804:
case 1979:
case 856:
case 2330:
case 2849:
case 3201:
case 3233:
case 635:
case 579:
case 1319:
case 291:
case 1482:
case 39:
case 3156:
case 1736:
case 1600:
case 3019:
case 1205:
case 1594:
case 2135:
case 2885:
case 2340:
case 2728:
case 2839:
case 2189:
case 2024:
case 880:
case 3145:
case 861:
case 337:
case 2614:
case 3330:
case 2298:
case 2276:
case 751:
case 1040:
case 1103:
case 2201:
case 3629:
case 2112:
case 4068:
case 1131:
case 3751:
case 2954:
case 650:
case 895:
case 154:
case 391:
case 1955:
case 216:
case 3962:
case 3843:
case 715:
case 1591:
case 27:
case 2552:
case 3623:
case 3302:
case 1615:
case 1805:
case 1421:
case 3249:
case 1025:
case 271:
case 599:
case 3013:
case 3754:
case 563:
case 3120:
case 1779:
case 1321:
case 487:
case 3402:
case 2833:
case 1632:
case 3561:
case 2611:
case 582:
case 1973:
case 3680:
case 2667:
case 3517:
case 2928:
case 2877:
case 37:
case 3325:
case 3239:
case 1822:
case 3552:
case 2623:
case 4081:
case 1358:
case 1565:
case 1678:
case 2249:
case 3876:
case 3898:
case 4010:
case 1002:
case 2058:
case 875:
case 3595:
case 2516:
case 2013:
case 2754:
case 1458:
case 626:
case 1413:
case 500:
case 3183:
case 3611:
case 2889:
case 1067:
case 1209:
case 544:
case 409:
case 3906:
case 2835:
case 2423:
case 1442:
case 1786:
case 1526:
case 1110:
case 3856:
case 725:
case 2467:
case 2774:
case 877:
case 2078:
case 2907:
case 4044:
case 1378:
case 1831:
case 2283:
case 1658:
case 2602:
case 1613:
case 1803:
case 1953:
case 3548:
case 1918:
case 3149:
case 2367:
case 3032:
case 810:
case 1342:
case 1234:
case 485:
case 3538:
case 1397:
case 1759:
case 1080:
case 1621:
case 2906:
case 2311:
case 3042:
case 2790:
case 3835:
case 1332:
case 1244:
case 3423:
case 2971:
case 158:
case 4034:
case 326:
case 2856:
case 2366:
case 3593:
case 3774:
case 2015:
case 3096:
case 3078:
case 3907:
case 616:
case 129:
case 2411:
case 3283:
case 3602:
case 1497:
case 1975:
case 2149:
case 3367:
case 2548:
case 2097:
case 2466:
case 908:
case 543:
case 2845:
case 2032:
case 1787:
case 2220:
case 4066:
case 339:
case 3763:
case 3444:
case 2121:
case 1223:
case 206:
case 2409:
case 1383:
case 2296:
case 1793:
case 136:
case 1574:
case 2434:
case 843:
case 2083:
case 2586:
case 2726:
case 4080:
case 694:
case 3297:
case 3681:
case 3020:
case 792:
case 472:
case 3559:
case 349:
case 1280:
case 959:
case 2727:
case 2800:
case 669:
case 3242:
case 1320:
case 1044:
case 1639:
case 2763:
case 1999:
case 3121:
case 2444:
case 844:
case 1685:
case 3296:
case 2215:
case 3409:
case 3434:
case 109:
case 3586:
case 510:
case 1814:
case 1604:
case 3726:
case 928:
case 1590:
case 2232:
case 2344:
case 932:
case 2113:
case 249:
case 2158:
case 1102:
case 4002:
case 2221:
case 754:
case 3609:
case 90:
case 962:
case 2178:
case 652:
case 678:
case 3115:
case 882:
case 151:
case 984:
case 1167:
case 2142:
case 419:
case 1304:
case 649:
case 2481:
case 1840:
case 1339:
case 3197:
case 269:
case 800:
case 2708:
case 3882:
case 2004:
case 1385:
case 3258:
case 639:
case 1404:
case 901:
case 1717:
case 575:
case 1761:
case 3221:
case 2819:
case 2609:
case 3579:
case 3644:
case 3178:
case 1180:
case 3824:
case 1716:
case 1830:
case 294:
case 1349:
case 166:
case 3085:
case 3481:
case 393:
case 2197:
case 3708:
case 2132:
case 3970:
case 2882:
case 3004:
case 1202:
case 3791:
case 3310:
case 520:
case 899:
case 863:
case 2994:
case 374:
case 2043:
case 2546:
case 1551:
case 719:
case 454:
case 3641:
case 1022:
case 1068:
case 2100:
case 1230:
case 3224:
case 1802:
case 2858:
case 1612:
case 2603:
case 2631:
case 2282:
case 3076:
case 3573:
case 923:
case 3547:
case 2322:
case 1343:
case 3001:
case 3965:
case 1377:
case 3484:
case 1952:
case 3422:
case 3077:
case 3468:
case 274:
case 1333:
case 2821:
case 3592:
case 838:
case 2384:
case 1961:
case 2224:
case 3537:
case 822:
case 1129:
case 1084:
case 3282:
case 2794:
case 2098:
case 1401:
case 879:
case 1240:
case 3322:
case 2001:
case 2536:
case 556:
case 1645:
case 2484:
case 407:
case 3770:
case 117:
case 1456:
case 3842:
case 3963:
case 3035:
case 1130:
case 405:
case 2815:
case 1041:
case 3927:
case 3303:
case 3622:
case 3668:
case 2553:
case 4029:
case 729:
case 3012:
case 1866:
case 868:
case 2341:
case 1214:
case 170:
case 1676:
case 1698:
case 1356:
case 1811:
case 3057:
case 1601:
case 1633:
case 2045:
case 1993:
case 398:
case 3403:
case 3431:
case 2926:
case 489:
case 1799:
case 1643:
case 2963:
case 914:
case 3441:
case 2089:
case 3815:
case 3605:
case 673:
case 2303:
case 1312:
case 54:
case 3518:
case 1948:
case 1823:
case 2575:
case 1435:
case 3341:
case 125:
case 541:
case 1229:
case 1335:
case 2057:
case 3045:
case 1571:
case 1389:
case 2403:
case 3926:
case 2431:
case 1112:
case 2103:
case 3482:
case 3319:
case 1954:
case 1614:
case 3979:
case 1157:
case 934:
case 832:
case 1298:
case 2324:
case 1885:
case 2773:
case 1135:
case 2205:
case 1588:
case 793:
case 1762:
case 3030:
case 769:
case 1839:
case 3268:
case 3570:
case 944:
case 576:
case 2600:
case 3131:
case 3881:
case 508:
case 943:
case 354:
case 2319:
case 2746:
case 2979:
case 1564:
case 137:
case 3284:
case 165:
case 2792:
case 3040:
case 1849:
case 474:
case 3594:
case 3773:
case 2755:
case 207:
case 2382:
case 3747:
case 2030:
case 1243:
case 1430:
case 4076:
case 19:
case 2570:
case 605:
case 3736:
case 3810:
case 1156:
case 3600:
case 4056:
case 883:
case 607:
case 2184:
case 2834:
case 818:
case 3300:
case 1198:
case 1599:
case 3753:
case 2775:
case 3718:
case 1883:
case 1212:
case 1101:
case 2203:
case 205:
case 653:
case 706:
case 1429:
case 963:
case 3241:
case 2959:
case 3400:
case 1630:
case 1235:
case 1771:
case 1329:
case 3986:
case 1289:
case 52:
case 2809:
case 3029:
case 3550:
case 1820:
case 900:
case 3231:
case 3775:
case 2718:
case 3203:
case 3987:
case 289:
case 498:
case 3959:
case 1177:
case 2400:
case 2624:
case 80:
case 4057:
case 964:
case 150:
case 749:
case 3105:
case 1974:
case 3619:
case 2122:
case 2569:
case 1466:
case 1097:
case 3918:
case 557:
case 1149:
case 3953:
case 2011:
case 1220:
case 3342:
case 1032:
case 406:
case 503:
case 948:
case 3396:
case 3378:
case 3023:
case 1856:
case 3110:
case 3786:
case 1971:
case 258:
case 272:
case 1015:
case 1480:
case 1366:
case 4083:
case 3478:
case 3496:
case 3209:
case 2080:
case 2397:
case 2244:
case 2332:
case 824:
case 1790:
case 1311:
case 1906:
case 2953:
case 3975:
case 1857:
case 439:
case 3527:
case 2234:
case 823:
case 3787:
case 2760:
case 1104:
case 1323:
case 2613:
case 2658:
case 1602:
case 3066:
case 1812:
case 2378:
case 2110:
case 2526:
case 126:
case 4020:
case 372:
case 504:
case 1593:
case 1774:
case 3841:
case 3621:
case 2478:
case 2209:
case 2496:
case 2067:
case 3397:
case 798:
case 58:
case 452:
case 3080:
case 3759:
case 1889:
case 478:
case 3332:
case 1042:
case 1835:
case 1185:
case 219:
case 2458:
case 1402:
case 3779:
case 4039:
case 3281:
case 540:
case 3134:
case 1754:
case 3946:
case 3884:
case 1623:
case 2822:
case 3508:
case 3109:
case 2565:
case 2144:
case 3615:
case 596:
case 3805:
case 814:
case 2358:
case 912:
case 2947:
case 2973:
case 3955:
case 530:
case 1877:
case 1928:
case 493:
case 469:
case 1843:
case 3413:
case 968:
case 319:
case 2697:
case 658:
case 1801:
case 1183:
case 494:
case 2632:
case 2281:
case 1833:
case 2992:
case 1876:
case 2025:
case 1951:
case 2946:
case 813:
case 1666:
case 3868:
case 2508:
case 1325:
case 17:
case 1239:
case 3144:
case 3565:
case 3358:
case 1285:
case 3313:
case 1021:
case 2210:
case 116:
case 629:
case 3973:
case 1680:
case 555:
case 2591:
case 3642:
case 2988:
case 3404:
case 747:
case 513:
case 47:
case 3620:
case 1634:
case 3081:
case 3225:
case 1197:
case 3840:
case 1049:
case 1258:
case 2202:
case 646:
case 1213:
case 3385:
case 2683:
case 4021:
case 3752:
case 3167:
case 194:
case 3795:
case 2830:
case 690:
case 2554:
case 855:
case 287:
case 3304:
case 471:
case 3010:
case 791:
case 3485:
case 636:
case 2761:
case 1115:
case 685:
case 3988:
case 840:
case 93:
case 3166:
case 2717:
case 2225:
case 2840:
case 2385:
case 941:
case 1708:
case 366:
case 2167:
case 251:
case 3554:
case 1824:
case 3830:
case 3180:
case 997:
case 830:
case 387:
case 2304:
case 2123:
case 2010:
case 1221:
case 4058:
case 1196:
case 2964:
case 1381:
case 1579:
case 896:
case 514:
case 1644:
case 1178:
case 3125:
case 651:
case 390:
case 4078:
case 3483:
case 3738:
case 2102:
case 149:
case 3829:
case 1113:
case 1344:
case 426:
case 1232:
case 209:
case 2420:
case 4042:
case 750:
case 336:
case 385:
case 523:
case 860:
case 881:
case 3223:
case 2999:
case 139:
case 2639:
case 3009:
case 3267:
case 1800:
case 2280:
case 1587:
case 65:
case 346:
case 2748:
case 2044:
case 2320:
case 3590:
case 2125:
case 666:
case 4015:
case 290:
case 956:
case 1309:
case 803:
case 2738:
case 687:
case 3102:
case 2034:
case 3211:
case 1434:
case 3420:
case 786:
case 3266:
case 735:
case 285:
case 3814:
case 1726:
case 3604:
case 1586:
case 767:
case 106:
case 2223:
case 4032:
case 1121:
case 3999:
case 3639:
case 1409:
case 524:
case 3685:
case 2267:
case 2009:
case 3280:
case 3748:
case 246:
case 3044:
case 3320:
case 1334:
case 501:
case 3633:
case 1057:
case 3811:
case 3601:
case 2140:
case 2389:
case 198:
case 2571:
case 2412:
case 370:
case 3214:
case 225:
case 1012:
case 726:
case 3356:
case 2457:
case 3676:
case 3938:
case 1303:
case 1878:
case 584:
case 1896:
case 2435:
case 2823:
case 1668:
case 1575:
case 2948:
case 1622:
case 1035:
case 2799:
case 2357:
case 317:
case 2677:
case 3345:
case 1089:
case 1124:
case 3507:
case 2993:
case 1769:
case 2601:
case 467:
case 3412:
case 435:
case 3571:
case 821:
case 270:
case 3506:
case 325:
case 1341:
case 518:
case 2866:
case 2698:
case 2676:
case 2041:
case 1815:
case 3435:
case 82:
case 1119:
case 3948:
case 3972:
case 2130:
case 2507:
case 3867:
case 1033:
case 1965:
case 3657:
case 2498:
case 1001:
case 1484:
case 2788:
case 2084:
case 617:
case 3802:
case 3612:
case 2129:
case 1547:
case 49:
case 77:
case 1573:
case 2961:
case 1384:
case 1641:
case 771:
case 2005:
case 327:
case 2376:
case 3230:
case 2398:
case 1224:
case 2656:
case 3477:
case 3022:
case 3635:
case 670:
case 2916:
case 3995:
case 174:
case 3689:
case 3551:
case 437:
case 1405:
case 811:
case 2377:
case 3645:
case 2343:
case 3498:
case 2657:
case 528:
case 1770:
case 3788:
case 1813:
case 1603:
case 3562:
case 3129:
case 2612:
case 3084:
case 2802:
case 1858:
case 1322:
case 910:
case 3401:
case 3825:
case 542:
case 3376:
case 2443:
case 1100:
case 2068:
case 3656:
case 2022:
case 2764:
case 2477:
case 559:
case 2635:
case 1546:
case 3916:
case 1043:
case 3333:
case 625:
case 1422:
case 81:
case 2551:
case 1219:
case 977:
case 430:
case 1475:
case 1646:
case 925:
case 569:
case 1194:
case 2651:
case 2589:
case 2729:
case 2371:
case 677:
case 2893:
case 1692:
case 2075:
case 1826:
case 275:
case 1997:
case 1006:
case 3662:
case 1531:
case 1655:
case 2980:
case 610:
case 1375:
case 3967:
case 2557:
case 1915:
case 1071:
case 711:
case 3307:
case 1418:
case 3535:
case 3651:
case 1007:
case 455:
case 1541:
case 3911:
case 2556:
case 3075:
case 2053:
case 375:
case 4050:
case 2628:
case 1942:
case 917:
case 3980:
case 1673:
case 708:
case 2872:
case 1353:
case 2967:
case 1318:
case 1827:
case 3557:
case 1636:
case 1700:
case 2164:
case 1996:
case 2545:
case 3299:
case 2923:
case 2848:
case 1891:
case 3577:
case 3046:
case 1913:
case 1958:
case 3925:
case 2740:
case 3092:
case 2362:
case 915:
case 2328:
case 1294:
case 72:
case 2852:
case 1808:
case 1618:
case 1653:
case 1347:
case 1373:
case 1584:
case 1028:
case 3606:
case 3730:
case 3264:
case 3055:
case 2576:
case 2598:
case 721:
case 2501:
case 2533:
case 2036:
case 506:
case 3671:
case 2462:
case 457:
case 1437:
case 2046:
case 3817:
case 210:
case 552:
case 123:
case 2925:
case 578:
case 404:
case 1522:
case 3852:
case 1169:
case 1675:
case 3288:
case 1355:
case 549:
case 3895:
case 2730:
case 3576:
case 3199:
case 3598:
case 1921:
case 277:
case 1455:
case 2861:
case 3036:
case 3533:
case 927:
case 481:
case 1719:
case 2671:
case 3462:
case 2351:
case 118:
case 183:
case 42:
case 2940:
case 1660:
case 2454:
case 3079:
case 341:
case 1870:
case 3138:
case 1758:
case 1713:
case 33:
case 331:
case 4091:
case 886:
case 1127:
case 2216:
case 966:
case 2172:
case 3690:
case 397:
case 987:
case 2261:
case 1163:
case 2217:
case 1126:
case 3454:
case 1982:
case 2193:
case 66:
case 1291:
case 3702:
case 2539:
case 2888:
case 1479:
case 1208:
case 2252:
case 1894:
case 598:
case 78:
case 2725:
case 1919:
case 3148:
case 781:
case 231:
case 850:
case 3864:
case 2504:
case 695:
case 3216:
case 10:
case 4065:
case 661:
case 680:
case 2930:
case 24:
case 2690:
case 1581:
case 1721:
case 1379:
case 3261:
case 2087:
case 2390:
case 631:
case 1869:
case 796:
case 1359:
case 295:
case 1544:
case 3914:
case 128:
case 41:
case 280:
case 3117:
case 261:
case 697:
case 2929:
case 3293:
case 2272:
case 159:
case 3086:
case 3723:
case 2490:
case 3899:
case 1090:
case 1387:
case 63:
case 4026:
case 2520:
case 3195:
case 1227:
case 2780:
case 3087:
case 3711:
case 1509:
case 2060:
case 2152:
case 395:
case 4027:
case 3766:
case 865:
case 2654:
case 361:
case 1226:
case 837:
case 256:
case 3929:
case 755:
case 1386:
case 1796:
case 1074:
case 1778:
case 3272:
case 946:
case 2723:
case 302:
case 36:
case 3161:
case 1360:
case 89:
case 2:
case 2474:
case 847:
case 2195:
case 3116:
case 1534:
case 408:
case 3780:
case 565:
case 1720:
case 1154:
case 3734:
case 3038:
case 929:
case 2287:
case 537:
case 1617:
case 1807:
case 2327:
case 248:
case 1372:
case 2608:
case 1957:
case 3596:
case 2515:
case 3578:
case 3179:
case 591:
case 3326:
case 238:
case 59:
case 788:
case 2427:
case 2072:
case 1935:
case 1566:
case 1695:
case 2744:
case 874:
case 668:
case 2048:
case 2463:
case 1290:
case 958:
case 972:
case 3709:
case 2532:
case 1511:
case 3287:
case 2038:
case 111:
case 3903:
case 2542:
case 3931:
case 2426:
case 3818:
case 3853:
case 1026:
case 3363:
case 3515:
case 612:
case 2665:
case 2326:
case 1274:
case 338:
case 3072:
case 1393:
case 1956:
case 3048:
case 3597:
case 432:
case 1871:
case 3532:
case 2709:
case 3259:
case 1661:
case 11:
case 2941:
case 1998:
case 462:
case 1976:
case 3781:
case 1851:
case 2465:
case 3521:
case 898:
case 3279:
case 2837:
case 1254:
case 919:
case 2187:
case 368:
case 3491:
case 3160:
case 3052:
case 1901:
case 1693:
case 2892:
case 1065:
case 3308:
case 3873:
case 1190:
case 1461:
case 2855:
case 1502:
case 3663:
case 2558:
case 3095:
case 1416:
case 3710:
case 3836:
case 550:
case 2905:
case 2061:
case 3627:
case 724:
case 2017:
case 2521:
case 3846:
case 2408:
case 1452:
case 3187:
case 268:
case 2052:
case 3626:
case 1704:
case 1395:
case 2308:
case 1352:
case 3855:
case 2873:
case 1672:
case 3365:
case 648:
case 3558:
case 1828:
case 1943:
case 418:
case 3016:
case 2095:
case 1317:
case 1174:
case 2922:
case 567:
case 1495:
case 2710:
case 3905:
case 586:
case 2186:
case 2391:
case 3061:
case 2627:
case 682:
case 1488:
case 3153:
case 3519:
case 2494:
case 849:
case 3292:
case 3981:
case 1776:
case 70:
case 1094:
case 1798:
case 160:
case 2784:
case 3237:
case 2088:
case 4051:
case 3722:
case 244:
case 1171:
case 2273:
case 2247:
case 104:
case 1904:
case 2246:
case 2153:
case 334:
case 3669:
case 2519:
case 2118:
case 4062:
case 103:
case 2292:
case 1364:
case 424:
case 243:
case 3088:
case 2237:
case 2064:
case 3273:
case 699:
case 2910:
case 1985:
case 2370:
case 907:
case 3236:
case 1699:
case 1743:
case 1939:
case 3192:
case 2670:
case 905:
case 3500:
case 2860:
case 299:
case 263:
case 3137:
case 1399:
case 3694:
case 3146:
case 2731:
case 300:
case 633:
case 2275:
case 3218:
case 1712:
case 382:
case 1499:
case 992:
case 894:
case 4007:
case 2136:
case 2450:
case 3909:
case 1874:
case 1162:
case 1050:
case 1128:
case 413:
case 1529:
case 3859:
case 2099:
case 3155:
case 364:
case 2147:
case 2192:
case 414:
case 644:
case 1207:
case 2500:
case 1069:
case 3860:
case 2887:
case 989:
case 4006:
case 399:
case 363:
case 2469:
case 893:
case 2694:
case 2146:
case 4071:
case 2934:
case 2253:
case 3703:
case 1514:
case 1756:
case 3450:
case 130:
case 3099:
case 1890:
case 3147:
case 2369:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1762020001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,];
var gg_b = "1762020001/";

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
