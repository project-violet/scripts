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
case 2611:
case 418:
case 859:
case 2320:
case 653:
case 3458:
case 225:
case 3626:
case 560:
case 1223:
case 208:
case 3022:
case 1238:
case 3014:
case 3124:
case 1077:
case 2060:
case 3450:
case 2328:
case 3044:
case 1865:
case 1461:
case 715:
case 1572:
case 846:
case 237:
case 1290:
case 180:
case 2812:
case 3907:
case 1654:
case 1603:
case 1161:
case 587:
case 816:
case 1628:
case 745:
case 3937:
case 3236:
case 1249:
case 3689:
case 569:
case 634:
case 892:
case 2850:
case 1744:
case 2586:
case 3777:
case 1208:
case 692:
case 563:
case 1341:
case 631:
case 167:
case 1285:
case 74:
case 2952:
case 1714:
case 1722:
case 6:
case 470:
case 1693:
case 650:
case 3150:
case 3997:
case 616:
case 777:
case 1297:
case 1996:
case 3919:
case 1380:
case 2246:
case 3900:
case 2283:
case 3463:
case 2004:
case 2875:
case 2053:
case 2471:
case 3985:
case 1305:
case 3908:
case 799:
case 1776:
case 793:
case 2067:
case 1070:
case 1237:
case 3949:
case 3175:
case 2327:
case 3802:
case 2492:
case 1884:
case 3386:
case 1906:
case 1207:
case 3990:
case 4092:
case 2605:
case 3832:
case 144:
case 3157:
case 2688:
case 3475:
case 266:
case 2981:
case 2094:
case 2192:
case 3343:
case 790:
case 2680:
case 2225:
case 2034:
case 2132:
case 2782:
case 1335:
case 4071:
case 3313:
case 2159:
case 4032:
case 3930:
case 2402:
case 3892:
case 1485:
case 1130:
case 1408:
case 428:
case 176:
case 989:
case 1881:
case 3729:
case 3667:
case 1705:
case 1123:
case 1788:
case 1400:
case 1138:
case 1013:
case 38:
case 2474:
case 1449:
case 3242:
case 40:
case 3095:
case 725:
case 501:
case 1682:
case 1256:
case 3604:
case 1190:
case 1086:
case 3653:
case 2727:
case 3106:
case 3566:
case 512:
case 2072:
case 3634:
case 3551:
case 1975:
case 1261:
case 3378:
case 826:
case 1795:
case 394:
case 542:
case 3406:
case 2984:
case 3713:
case 1185:
case 3258:
case 3005:
case 2836:
case 3088:
case 1438:
case 306:
case 3250:
case 3080:
case 1197:
case 4083:
case 433:
case 1534:
case 1651:
case 865:
case 3762:
case 941:
case 293:
case 2733:
case 3355:
case 1899:
case 2202:
case 3816:
case 121:
case 1464:
case 299:
case 2366:
case 3011:
case 124:
case 3121:
case 4016:
case 1137:
case 2614:
case 439:
case 944:
case 665:
case 3825:
case 2570:
case 3087:
case 3956:
case 3421:
case 2578:
case 555:
case 1437:
case 2379:
case 871:
case 914:
case 1711:
case 1322:
case 1840:
case 1314:
case 2125:
case 451:
case 2703:
case 1924:
case 290:
case 1912:
case 2232:
case 874:
case 2015:
case 2446:
case 936:
case 1848:
case 3263:
case 2259:
case 1553:
case 2965:
case 55:
case 1504:
case 3642:
case 765:
case 1428:
case 1433:
case 3046:
case 3415:
case 3709:
case 2764:
case 4041:
case 1103:
case 3253:
case 549:
case 3489:
case 2141:
case 1282:
case 2826:
case 935:
case 3083:
case 1656:
case 3267:
case 2021:
case 3748:
case 1557:
case 76:
case 1493:
case 93:
case 3373:
case 4011:
case 2815:
case 2737:
case 2187:
case 117:
case 354:
case 3979:
case 666:
case 3145:
case 1575:
case 3426:
case 1862:
case 2889:
case 540:
case 330:
case 774:
case 1128:
case 1783:
case 1133:
case 1661:
case 2977:
case 2276:
case 3025:
case 1454:
case 1403:
case 1120:
case 1010:
case 1968:
case 3739:
case 1746:
case 2584:
case 1843:
case 2405:
case 48:
case 164:
case 788:
case 837:
case 2488:
case 2700:
case 3268:
case 1558:
case 3491:
case 1359:
case 253:
case 2719:
case 2785:
case 1332:
case 3260:
case 2708:
case 903:
case 1934:
case 2480:
case 2214:
case 328:
case 2222:
case 1886:
case 581:
case 909:
case 825:
case 1427:
case 1251:
case 1994:
case 3472:
case 2244:
case 3101:
case 4095:
case 637:
case 2006:
case 3717:
case 1774:
case 2749:
case 62:
case 259:
case 2790:
case 726:
case 3805:
case 17:
case 1542:
case 3172:
case 3556:
case 3131:
case 2659:
case 3781:
case 2970:
case 386:
case 2723:
case 2188:
case 1904:
case 2738:
case 3982:
case 292:
case 59:
case 1953:
case 231:
case 2872:
case 2730:
case 2435:
case 1512:
case 250:
case 1524:
case 491:
case 216:
case 1870:
case 2867:
case 2929:
case 2300:
case 1771:
case 3347:
case 26:
case 998:
case 1878:
case 693:
case 1991:
case 3606:
case 2169:
case 3564:
case 2308:
case 2385:
case 3104:
case 1732:
case 2540:
case 699:
case 3507:
case 893:
case 1630:
case 1792:
case 457:
case 520:
case 2853:
case 3869:
case 182:
case 3226:
case 917:
case 677:
case 3927:
case 2804:
case 3494:
case 2057:
case 3467:
case 2986:
case 2287:
case 2834:
case 1685:
case 1521:
case 127:
case 852:
case 523:
case 1608:
case 3696:
case 890:
case 3537:
case 1901:
case 1619:
case 1293:
case 3194:
case 2398:
case 274:
case 3636:
case 3597:
case 1233:
case 135:
case 2913:
case 2176:
case 271:
case 3134:
case 2338:
case 3071:
case 472:
case 2552:
case 3059:
case 2063:
case 3404:
case 529:
case 3453:
case 2330:
case 1989:
case 2962:
case 3585:
case 3621:
case 4014:
case 3920:
case 4022:
case 3844:
case 3500:
case 2235:
case 2012:
case 100:
case 1325:
case 3928:
case 2114:
case 2122:
case 3933:
case 1596:
case 1637:
case 2295:
case 2042:
case 815:
case 746:
case 1151:
case 1945:
case 1536:
case 3201:
case 753:
case 3773:
case 3822:
case 288:
case 3340:
case 1466:
case 61:
case 2761:
case 2683:
case 716:
case 845:
case 3399:
case 1451:
case 3598:
case 961:
case 1316:
case 2444:
case 1479:
case 2337:
case 2581:
case 1073:
case 3590:
case 731:
case 3231:
case 1506:
case 1166:
case 2288:
case 103:
case 2205:
case 3530:
case 507:
case 1607:
case 3352:
case 84:
case 370:
case 3460:
case 2280:
case 1346:
case 3765:
case 2050:
case 3538:
case 3523:
case 2414:
case 3775:
case 591:
case 532:
case 3470:
case 1986:
case 1287:
case 2685:
case 1390:
case 2901:
case 3647:
case 2600:
case 1943:
case 3995:
case 49:
case 1398:
case 3516:
case 235:
case 171:
case 1338:
case 3935:
case 495:
case 1552:
case 1063:
case 2482:
case 3525:
case 2870:
case 3396:
case 1300:
case 2771:
case 3980:
case 1476:
case 301:
case 585:
case 2203:
case 2878:
case 2690:
case 1509:
case 2732:
case 1241:
case 312:
case 481:
case 304:
case 821:
case 2972:
case 3178:
case 3336:
case 1853:
case 1075:
case 3757:
case 282:
case 58:
case 2926:
case 2451:
case 2316:
case 2855:
case 2073:
case 858:
case 4066:
case 3609:
case 3321:
case 2664:
case 775:
case 440:
case 1288:
case 203:
case 3941:
case 1205:
case 2383:
case 3155:
case 946:
case 478:
case 3477:
case 1280:
case 2346:
case 77:
case 456:
case 1364:
case 1962:
case 9:
case 3851:
case 3750:
case 2065:
case 568:
case 1012:
case 1547:
case 200:
case 992:
case 1024:
case 1114:
case 2596:
case 3758:
case 2637:
case 2915:
case 1295:
case 1042:
case 2151:
case 3639:
case 934:
case 449:
case 1646:
case 2945:
case 1144:
case 2179:
case 2536:
case 2697:
case 1860:
case 4051:
case 2877:
case 188:
case 3652:
case 764:
case 2466:
case 3987:
case 1761:
case 1683:
case 3056:
case 1815:
case 1737:
case 3007:
case 2716:
case 841:
case 2040:
case 1411:
case 3820:
case 3342:
case 735:
case 2193:
case 407:
case 3721:
case 3312:
case 3922:
case 2133:
case 4020:
case 96:
case 2661:
case 2960:
case 387:
case 2009:
case 2454:
case 369:
case 641:
case 3162:
case 2968:
case 2746:
case 1584:
case 3350:
case 782:
case 4054:
case 3532:
case 3097:
case 2103:
case 3559:
case 2563:
case 2725:
case 971:
case 814:
case 611:
case 1141:
case 322:
case 2656:
case 3270:
case 1487:
case 1021:
case 614:
case 1111:
case 247:
case 1361:
case 360:
case 1790:
case 1036:
case 2127:
case 3443:
case 1632:
case 889:
case 572:
case 683:
case 2017:
case 2542:
case 988:
case 4027:
case 2967:
case 3486:
case 1723:
case 3827:
case 2904:
case 1738:
case 192:
case 2302:
case 275:
case 1105:
case 1872:
case 1096:
case 3413:
case 1:
case 1435:
case 3019:
case 2512:
case 3129:
case 1831:
case 2524:
case 3000:
case 116:
case 1405:
case 264:
case 1488:
case 1700:
case 2371:
case 3030:
case 2558:
case 3796:
case 557:
case 2359:
case 1719:
case 1135:
case 2332:
case 3113:
case 1708:
case 1480:
case 1214:
case 2081:
case 1195:
case 2392:
case 2427:
case 2251:
case 3098:
case 1244:
case 462:
case 261:
case 3684:
case 3357:
case 1006:
case 3186:
case 3090:
case 2774:
case 1749:
case 2498:
case 1072:
case 3885:
case 937:
case 92:
case 3544:
case 2490:
case 609:
case 1031:
case 3819:
case 14:
case 767:
case 603:
case 1984:
case 2430:
case 1382:
case 2735:
case 1091:
case 3849:
case 4008:
case 783:
case 2438:
case 2029:
case 4085:
case 2560:
case 2485:
case 4023:
case 3898:
case 780:
case 3959:
case 1555:
case 3670:
case 3334:
case 115:
case 4030:
case 2123:
case 3932:
case 2400:
case 2138:
case 3678:
case 1001:
case 3992:
case 2198:
case 3417:
case 2449:
case 3731:
case 3181:
case 2682:
case 2256:
case 2190:
case 2086:
case 1669:
case 2567:
case 3140:
case 1570:
case 2107:
case 307:
case 627:
case 570:
case 1578:
case 3148:
case 2437:
case 2810:
case 1379:
case 1416:
case 1292:
case 1045:
case 463:
case 2322:
case 338:
case 1703:
case 3118:
case 190:
case 2912:
case 1232:
case 4064:
case 2741:
case 1015:
case 3439:
case 469:
case 3360:
case 1089:
case 3452:
case 744:
case 487:
case 1259:
case 1965:
case 3368:
case 3109:
case 2504:
case 827:
case 2197:
case 2950:
case 3576:
case 1821:
case 882:
case 193:
case 1183:
case 1733:
case 3152:
case 2899:
case 3409:
case 3003:
case 221:
case 199:
case 711:
case 1366:
case 460:
case 2787:
case 1622:
case 2852:
case 1614:
case 3199:
case 2594:
case 518:
case 736:
case 3677:
case 1116:
case 682:
case 3217:
case 45:
case 3173:
case 758:
case 1999:
case 2161:
case 91:
case 67:
case 2249:
case 3066:
case 875:
case 1751:
case 3662:
case 2921:
case 2744:
case 319:
case 2055:
case 915:
case 3465:
case 2341:
case 2285:
case 554:
case 1687:
case 3861:
case 455:
case 2200:
case 1939:
case 1513:
case 945:
case 3588:
case 1909:
case 2230:
case 3389:
case 539:
case 2223:
case 1529:
case 1333:
case 1328:
case 356:
case 2298:
case 1766:
case 94:
case 3281:
case 2572:
case 137:
case 776:
case 533:
case 1812:
case 2654:
case 2531:
case 1824:
case 2387:
case 2603:
case 1940:
case 3240:
case 2906:
case 2207:
case 977:
case 1688:
case 1981:
case 1863:
case 3767:
case 3629:
case 3301:
case 999:
case 1192:
case 2395:
case 1034:
case 993:
case 1132:
case 3704:
case 2335:
case 3753:
case 2627:
case 1857:
case 1159:
case 3210:
case 2264:
case 241:
case 1171:
case 817:
case 586:
case 412:
case 2297:
case 2996:
case 3239:
case 384:
case 1432:
case 3643:
case 1695:
case 401:
case 1283:
case 1459:
case 3252:
case 724:
case 1471:
case 2388:
case 2305:
case 3734:
case 1102:
case 496:
case 3331:
case 214:
case 1067:
case 2237:
case 3974:
case 2545:
case 1327:
case 3299:
case 404:
case 528:
case 3613:
case 1216:
case 2078:
case 381:
case 1635:
case 2884:
case 104:
case 2167:
case 1170:
case 3211:
case 668:
case 1336:
case 3548:
case 4067:
case 365:
case 3853:
case 3075:
case 2317:
case 3929:
case 1396:
case 969:
case 1763:
case 1681:
case 3476:
case 4004:
case 4053:
case 2606:
case 101:
case 2002:
case 112:
case 3509:
case 2104:
case 987:
case 1988:
case 1905:
case 3308:
case 3169:
case 2153:
case 2032:
case 2597:
case 2215:
case 1935:
case 1546:
case 2134:
case 3539:
case 922:
case 3552:
case 2071:
case 2289:
case 3330:
case 3469:
case 142:
case 1262:
case 3063:
case 2467:
case 3986:
case 960:
case 751:
case 2876:
case 2245:
case 1478:
case 2381:
case 2537:
case 2696:
case 374:
case 1516:
case 730:
case 3599:
case 1647:
case 705:
case 1243:
case 2201:
case 3144:
case 2549:
case 2993:
case 2348:
case 3683:
case 1056:
case 2814:
case 2822:
case 388:
case 2340:
case 1652:
case 4060:
case 1851:
case 1750:
case 2844:
case 70:
case 524:
case 3024:
case 1699:
case 3547:
case 1213:
case 3616:
case 2500:
case 3235:
case 68:
case 1758:
case 218:
case 2928:
case 3114:
case 2519:
case 2530:
case 3058:
case 632:
case 2468:
case 786:
case 691:
case 270:
case 1724:
case 2291:
case 2954:
case 3050:
case 2538:
case 3280:
case 2460:
case 248:
case 1648:
case 326:
case 806:
case 3756:
case 3625:
case 1618:
case 1911:
case 694:
case 1609:
case 15:
case 1742:
case 1610:
case 239:
case 3021:
case 2966:
case 477:
case 1665:
case 4026:
case 3111:
case 1854:
case 2624:
case 160:
case 2445:
case 1803:
case 1278:
case 3361:
case 2016:
case 2841:
case 2373:
case 2046:
case 2415:
case 942:
case 1532:
case 2709:
case 122:
case 2253:
case 901:
case 2752:
case 1312:
case 4089:
case 187:
case 2234:
case 3276:
case 3977:
case 996:
case 3845:
case 1064:
case 4015:
case 3584:
case 1502:
case 1162:
case 567:
case 4045:
case 2658:
case 3737:
case 163:
case 3411:
case 2799:
case 3356:
case 1007:
case 2145:
case 2650:
case 1944:
case 2979:
case 589:
case 3889:
case 2294:
case 2951:
case 2426:
case 536:
case 3195:
case 95:
case 2561:
case 3006:
case 1684:
case 3602:
case 359:
case 1090:
case 3749:
case 1186:
case 353:
case 3719:
case 1363:
case 1796:
case 3480:
case 1976:
case 2260:
case 1113:
case 1277:
case 1429:
case 2675:
case 346:
case 3214:
case 2384:
case 3105:
case 331:
case 392:
case 3723:
case 3188:
case 1827:
case 2657:
case 1255:
case 2191:
case 1085:
case 445:
case 3692:
case 3730:
case 1000:
case 3831:
case 4091:
case 350:
case 3632:
case 3495:
case 2805:
case 3036:
case 3978:
case 2172:
case 2401:
case 3891:
case 770:
case 334:
case 3970:
case 2781:
case 1417:
case 459:
case 873:
case 2242:
case 1181:
case 2095:
case 818:
case 919:
case 3474:
case 4006:
case 1823:
case 2653:
case 3669:
case 285:
case 31:
case 1772:
case 1898:
case 897:
case 1971:
case 1670:
case 2667:
case 1959:
case 1932:
case 315:
case 1334:
case 453:
case 879:
case 28:
case 1678:
case 120:
case 673:
case 2496:
case 913:
case 3806:
case 618:
case 3091:
case 3382:
case 416:
case 1902:
case 1353:
case 3984:
case 2088:
case 3836:
case 910:
case 670:
case 527:
case 2258:
case 1147:
case 206:
case 943:
case 492:
case 648:
case 1522:
case 2634:
case 1273:
case 1808:
case 3072:
case 3174:
case 434:
case 2136:
case 1027:
case 2786:
case 535:
case 848:
case 2378:
case 1800:
case 129:
case 1367:
case 1701:
case 1819:
case 870:
case 1440:
case 2011:
case 1897:
case 399:
case 2121:
case 2846:
case 3614:
case 268:
case 3622:
case 1448:
case 2883:
case 377:
case 2660:
case 4021:
case 1199:
case 3425:
case 1418:
case 2762:
case 1576:
case 3146:
case 1139:
case 1152:
case 2041:
case 393:
case 3728:
case 3183:
case 3202:
case 1003:
case 1284:
case 995:
case 390:
case 1807:
case 3125:
case 138:
case 2377:
case 3015:
case 1033:
case 1110:
case 2263:
case 3483:
case 509:
case 3089:
case 1109:
case 3271:
case 1140:
case 2421:
case 981:
case 2087:
case 1726:
case 772:
case 1148:
case 3578:
case 3045:
case 1093:
case 1473:
case 488:
case 1079:
case 2527:
case 3948:
case 828:
case 805:
case 929:
case 32:
case 3940:
case 149:
case 2206:
case 3812:
case 2964:
case 2362:
case 1588:
case 1165:
case 3320:
case 4012:
case 3910:
case 3068:
case 2014:
case 2022:
case 2626:
case 1856:
case 1580:
case 605:
case 1925:
case 3328:
case 156:
case 923:
case 3060:
case 110:
case 2124:
case 1315:
case 628:
case 2777:
case 3354:
case 1983:
case 920:
case 3303:
case 3952:
case 1861:
case 2158:
case 517:
case 886:
case 3687:
case 1247:
case 1946:
case 140:
case 2997:
case 2645:
case 4058:
case 1217:
case 3543:
case 1173:
case 1916:
case 706:
case 3274:
case 2937:
case 2615:
case 3858:
case 3751:
case 1066:
case 2689:
case 791:
case 119:
case 686:
case 3586:
case 732:
case 564:
case 639:
case 1331:
case 465:
case 257:
case 2221:
case 1372:
case 2175:
case 1974:
case 907:
case 3635:
case 3216:
case 1613:
case 2329:
case 2900:
case 3947:
case 1239:
case 3875:
case 3053:
case 1686:
case 2520:
case 2463:
case 3004:
case 3459:
case 3283:
case 561:
case 839:
case 3102:
case 2908:
case 2076:
case 3034:
case 630:
case 195:
case 2313:
case 1753:
case 3782:
case 57:
case 2923:
case 3132:
case 2631:
case 3159:
case 471:
case 854:
case 651:
case 2892:
case 3402:
case 1484:
case 1240:
case 2386:
case 474:
case 3688:
case 3863:
case 3094:
case 1301:
case 2859:
case 2475:
case 3680:
case 2998:
case 3192:
case 3285:
case 2760:
case 3873:
case 729:
case 3055:
case 1777:
case 3208:
case 3722:
case 3714:
case 213:
case 2983:
case 98:
case 1158:
case 2946:
case 240:
case 1296:
case 3219:
case 1150:
case 1645:
case 985:
case 2326:
case 2595:
case 2173:
case 3249:
case 409:
case 1937:
case 3501:
case 1615:
case 3628:
case 3633:
case 4073:
case 2066:
case 723:
case 219:
case 3620:
case 720:
case 1044:
case 3865:
case 2079:
case 1527:
case 994:
case 3572:
case 3461:
case 2051:
case 3156:
case 3387:
case 3654:
case 249:
case 2588:
case 2165:
case 762:
case 243:
case 3238:
case 991:
case 3223:
case 2580:
case 1450:
case 1112:
case 210:
case 2315:
case 2218:
case 1076:
case 1672:
case 2753:
case 3769:
case 3627:
case 172:
case 1938:
case 3335:
case 1923:
case 2704:
case 1631:
case 863:
case 1892:
case 3264:
case 341:
case 1930:
case 1778:
case 3906:
case 869:
case 2240:
case 29:
case 592:
case 968:
case 1386:
case 344:
case 1157:
case 1832:
case 1990:
case 427:
case 2767:
case 2301:
case 1475:
case 3526:
case 1871:
case 1343:
case 3395:
case 1998:
case 43:
case 550:
case 2587:
case 2331:
case 482:
case 553:
case 2372:
case 660:
case 1175:
case 3936:
case 1949:
case 1802:
case 3078:
case 546:
case 2299:
case 1533:
case 3996:
case 1329:
case 3297:
case 1900:
case 2643:
case 4084:
case 284:
case 2686:
case 2184:
case 3305:
case 622:
case 1985:
case 3388:
case 3185:
case 2304:
case 132:
case 3735:
case 191:
case 3108:
case 1713:
case 1874:
case 2849:
case 85:
case 2147:
case 1694:
case 655:
case 106:
case 3423:
case 1196:
case 2514:
case 3119:
case 358:
case 1551:
case 1634:
case 2885:
case 3498:
case 740:
case 3149:
case 571:
case 3261:
case 1378:
case 3795:
case 1743:
case 47:
case 3847:
case 4017:
case 778:
case 65:
case 1406:
case 1370:
case 2417:
case 2992:
case 2394:
case 461:
case 2731:
case 2823:
case 1653:
case 3086:
case 743:
case 1604:
case 185:
case 3682:
case 262:
case 3256:
case 4081:
case 1106:
case 2772:
case 3485:
case 1667:
case 3881:
case 3963:
case 2890:
case 3138:
case 3788:
case 3705:
case 2334:
case 1035:
case 1212:
case 4010:
case 3912:
case 3322:
case 3840:
case 2360:
case 3741:
case 1263:
case 3062:
case 4018:
case 2452:
case 3848:
case 2109:
case 3504:
case 79:
case 2368:
case 1582:
case 2569:
case 3553:
case 498:
case 642:
case 2140:
case 1825:
case 1257:
case 1421:
case 1956:
case 2726:
case 4040:
case 3809:
case 2093:
case 2864:
case 604:
case 2440:
case 801:
case 2745:
case 1121:
case 324:
case 1846:
case 1668:
case 896:
case 168:
case 1275:
case 2448:
case 1961:
case 1883:
case 3137:
case 1660:
case 2677:
case 3594:
case 4052:
case 3950:
case 3679:
case 3197:
case 2576:
case 3534:
case 3651:
case 1355:
case 601:
case 2410:
case 1041:
case 1816:
case 321:
case 3464:
case 612:
case 972:
case 2409:
case 4039:
case 3133:
case 2914:
case 3783:
case 1887:
case 1115:
case 2312:
case 1025:
case 3018:
case 3120:
case 3403:
case 2064:
case 3009:
case 1189:
case 1739:
case 1365:
case 3968:
case 3010:
case 2828:
case 742:
case 1658:
case 2007:
case 3716:
case 154:
case 3575:
case 1650:
case 3048:
case 2721:
case 3862:
case 1294:
case 1951:
case 1426:
case 139:
case 712:
case 2270:
case 1267:
case 2665:
case 1740:
case 260:
case 424:
case 508:
case 1445:
case 3493:
case 2803:
case 681:
case 2037:
case 1126:
case 1841:
case 796:
case 1373:
case 1415:
case 3039:
case 3433:
case 421:
case 881:
case 1709:
case 684:
case 1811:
case 2358:
case 1718:
case 3103:
case 222:
case 1083:
case 3656:
case 2462:
case 1204:
case 704:
case 1384:
case 3302:
case 3953:
case 75:
case 3904:
case 1657:
case 2008:
case 613:
case 678:
case 4029:
case 1191:
case 2085:
case 566:
case 2413:
case 2000:
case 640:
case 3512:
case 3047:
case 2443:
case 997:
case 1888:
case 1074:
case 3017:
case 3542:
case 1401:
case 840:
case 1556:
case 186:
case 979:
case 3967:
case 2486:
case 1781:
case 1131:
case 3427:
case 3994:
case 3392:
case 3081:
case 810:
case 3279:
case 2098:
case 4086:
case 2684:
case 1835:
case 4043:
case 2736:
case 3774:
case 2090:
case 649:
case 2186:
case 3371:
case 1895:
case 1747:
case 2363:
case 3558:
case 2030:
case 2796:
case 948:
case 3934:
case 476:
case 2976:
case 3332:
case 2429:
case 105:
case 1675:
case 128:
case 610:
case 970:
case 2038:
case 3550:
case 3233:
case 441:
case 1597:
case 933:
case 1636:
case 2935:
case 3702:
case 2546:
case 335:
case 1784:
case 2583:
case 1453:
case 242:
case 1404:
case 1467:
case 2306:
case 2775:
case 3685:
case 3521:
case 545:
case 3293:
case 787:
case 1092:
case 2478:
case 1381:
case 1537:
case 3901:
case 1696:
case 444:
case 3600:
case 2995:
case 2647:
case 1167:
case 2170:
case 414:
case 515:
case 3972:
case 954:
case 1927:
case 1869:
case 2396:
case 3870:
case 411:
case 2525:
case 1434:
case 1347:
case 951:
case 3771:
case 760:
case 930:
case 3084:
case 3203:
case 3878:
case 1564:
case 436:
case 1468:
case 2941:
case 489:
case 170:
case 1903:
case 2640:
case 2724:
case 905:
case 3383:
case 1954:
case 1523:
case 1460:
case 255:
case 4055:
case 2648:
case 1399:
case 3227:
case 3926:
case 1272:
case 2618:
case 1590:
case 309:
case 483:
case 2609:
case 552:
case 3506:
case 823:
case 1231:
case 2610:
case 3151:
case 2639:
case 3697:
case 1549:
case 3536:
case 3945:
case 1348:
case 179:
case 986:
case 1773:
case 3877:
case 197:
case 2056:
case 1814:
case 3466:
case 2987:
case 1822:
case 862:
case 2851:
case 1585:
case 4077:
case 1621:
case 1508:
case 3989:
case 1844:
case 2879:
case 1310:
case 1920:
case 1160:
case 300:
case 1500:
case 3637:
case 3915:
case 3596:
case 1933:
case 173:
case 620:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753513201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,];
var gg_b = "1753513201/";

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
