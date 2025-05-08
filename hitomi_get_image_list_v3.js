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
case 1767:
case 1610:
case 3741:
case 182:
case 2053:
case 2340:
case 3144:
case 3843:
case 1392:
case 2435:
case 2167:
case 2015:
case 797:
case 2533:
case 2937:
case 4014:
case 280:
case 3248:
case 1960:
case 1578:
case 3535:
case 3013:
case 2894:
case 634:
case 735:
case 2845:
case 3281:
case 3331:
case 1420:
case 3055:
case 3123:
case 1936:
case 860:
case 274:
case 4076:
case 3824:
case 1128:
case 1232:
case 337:
case 3798:
case 2317:
case 914:
case 2204:
case 3475:
case 1201:
case 2728:
case 478:
case 3573:
case 1243:
case 1018:
case 3977:
case 886:
case 2575:
case 1316:
case 2473:
case 1848:
case 564:
case 20:
case 2221:
case 1708:
case 1169:
case 4079:
case 2884:
case 266:
case 2183:
case 3770:
case 3764:
case 3902:
case 3931:
case 3889:
case 3161:
case 1628:
case 582:
case 68:
case 1336:
case 4056:
case 1038:
case 293:
case 2940:
case 1669:
case 1806:
case 514:
case 722:
case 2287:
case 3209:
case 2608:
case 737:
case 1212:
case 3311:
case 1296:
case 1020:
case 3042:
case 3455:
case 3695:
case 3899:
case 3644:
case 2710:
case 3957:
case 600:
case 1916:
case 2263:
case 2852:
case 1974:
case 2971:
case 3033:
case 3515:
case 335:
case 1289:
case 2625:
case 1110:
case 1354:
case 3623:
case 2868:
case 2297:
case 1749:
case 3265:
case 1982:
case 4022:
case 4059:
case 2035:
case 3812:
case 164:
case 231:
case 3377:
case 3227:
case 2453:
case 767:
case 3880:
case 2774:
case 3157:
case 2242:
case 1007:
case 1174:
case 1873:
case 3063:
case 2383:
case 4064:
case 87:
case 2065:
case 3235:
case 487:
case 2838:
case 708:
case 2006:
case 2027:
case 3581:
case 500:
case 2782:
case 1660:
case 1717:
case 614:
case 3734:
case 1119:
case 72:
case 1532:
case 3102:
case 715:
case 134:
case 259:
case 1029:
case 1501:
case 1494:
case 3273:
case 2719:
case 140:
case 3890:
case 3323:
case 2325:
case 1068:
case 1800:
case 2792:
case 2275:
case 365:
case 1835:
case 709:
case 804:
case 3878:
case 1192:
case 1524:
case 3087:
case 2521:
case 3344:
case 594:
case 3395:
case 2946:
case 1740:
case 173:
case 3611:
case 1853:
case 3985:
case 202:
case 4088:
case 1154:
case 3487:
case 171:
case 749:
case 2754:
case 2349:
case 3177:
case 211:
case 1586:
case 1094:
case 2908:
case 883:
case 2739:
case 1452:
case 2640:
case 3714:
case 1258:
case 32:
case 3509:
case 1310:
case 315:
case 2925:
case 308:
case 1674:
case 1737:
case 2406:
case 2427:
case 3862:
case 2563:
case 2967:
case 3497:
case 1589:
case 2818:
case 3995:
case 676:
case 2465:
case 2137:
case 3463:
case 1160:
case 573:
case 2993:
case 3779:
case 194:
case 2736:
case 2213:
case 2255:
case 367:
case 1966:
case 18:
case 1347:
case 3923:
case 1084:
case 3361:
case 2593:
case 1505:
case 2444:
case 3467:
case 3135:
case 2859:
case 875:
case 2655:
case 1530:
case 332:
case 1332:
case 1282:
case 3965:
case 679:
case 239:
case 1050:
case 1488:
case 2778:
case 3523:
case 1343:
case 3892:
case 3906:
case 1996:
case 3819:
case 3615:
case 2142:
case 3391:
case 1216:
case 1733:
case 2963:
case 1190:
case 3493:
case 2321:
case 3653:
case 2133:
case 1989:
case 4052:
case 987:
case 3595:
case 36:
case 3882:
case 746:
case 2175:
case 1498:
case 306:
case 2240:
case 1658:
case 585:
case 3738:
case 1569:
case 2987:
case 3909:
case 2583:
case 3816:
case 624:
case 1528:
case 1857:
case 3348:
case 1219:
case 725:
case 3483:
case 1180:
case 3381:
case 3231:
case 3408:
case 1662:
case 1470:
case 2780:
case 3874:
case 256:
case 3211:
case 494:
case 3991:
case 1464:
case 2461:
case 3860:
case 877:
case 1924:
case 2921:
case 2363:
case 3083:
case 2546:
case 325:
case 1389:
case 2397:
case 2251:
case 1254:
case 1932:
case 3365:
case 4072:
case 299:
case 1098:
case 76:
case 2904:
case 2762:
case 706:
case 3327:
case 221:
case 1399:
case 1755:
case 400:
case 2113:
case 2023:
case 3600:
case 3981:
case 587:
case 2549:
case 3854:
case 3025:
case 3153:
case 3449:
case 1088:
case 298:
case 3115:
case 2095:
case 1003:
case 1312:
case 3067:
case 2237:
case 1510:
case 1205:
case 3471:
case 3784:
case 3606:
case 2517:
case 124:
case 357:
case 73:
case 2955:
case 1266:
case 3181:
case 3665:
case 2457:
case 979:
case 3373:
case 2375:
case 1689:
case 2225:
case 2663:
case 3953:
case 1885:
case 1516:
case 687:
case 3915:
case 4018:
case 1574:
case 2571:
case 2267:
case 2898:
case 3417:
case 178:
case 1456:
case 3295:
case 762:
case 2431:
case 2687:
case 1434:
case 3609:
case 2208:
case 253:
case 2540:
case 3191:
case 2342:
case 1014:
case 2011:
case 3745:
case 370:
case 2283:
case 2701:
case 3335:
case 3300:
case 1132:
case 2888:
case 2743:
case 924:
case 219:
case 301:
case 2104:
case 1422:
case 1459:
case 1143:
case 1844:
case 741:
case 2841:
case 2732:
case 1699:
case 1022:
case 226:
case 701:
case 3511:
case 2712:
case 3451:
case 524:
case 3109:
case 2246:
case 3768:
case 1112:
case 2002:
case 1554:
case 3729:
case 3752:
case 269:
case 79:
case 1476:
case 2786:
case 2313:
case 770:
case 2604:
case 1632:
case 362:
case 3810:
case 2355:
case 784:
case 1414:
case 685:
case 3973:
case 1560:
case 207:
case 3017:
case 2197:
case 1056:
case 4038:
case 3935:
case 1797:
case 476:
case 2249:
case 1196:
case 2057:
case 1763:
case 2789:
case 888:
case 3726:
case 1990:
case 3847:
case 2864:
case 2796:
case 1189:
case 3071:
case 757:
case 1210:
case 3267:
case 2037:
case 3898:
case 910:
case 707:
case 2244:
case 3571:
case 2828:
case 318:
case 488:
case 2953:
case 3663:
case 1172:
case 2557:
case 3225:
case 1288:
case 1338:
case 3375:
case 2223:
case 876:
case 3457:
case 1184:
case 3955:
case 1883:
case 1556:
case 3913:
case 3517:
case 1060:
case 768:
case 2471:
case 2148:
case 2784:
case 3293:
case 3841:
case 172:
case 3732:
case 1298:
case 2440:
case 1867:
case 3104:
case 1534:
case 489:
case 2051:
case 683:
case 2502:
case 1054:
case 212:
case 1825:
case 3701:
case 1492:
case 745:
case 29:
case 270:
case 1419:
case 2745:
case 644:
case 3342:
case 1893:
case 110:
case 2805:
case 1270:
case 2830:
case 284:
case 3724:
case 630:
case 1129:
case 1152:
case 3031:
case 2261:
case 3411:
case 986:
case 3799:
case 2729:
case 2752:
case 3786:
case 3313:
case 1019:
case 2768:
case 255:
case 2109:
case 1092:
case 1576:
case 681:
case 1454:
case 160:
case 1849:
case 3621:
case 3975:
case 1514:
case 2511:
case 326:
case 2040:
case 23:
case 1107:
case 2071:
case 1126:
case 3864:
case 3796:
case 1672:
case 3163:
case 2726:
case 3057:
case 3249:
case 2106:
case 1318:
case 1684:
case 2681:
case 3197:
case 2595:
case 2720:
case 1926:
case 144:
case 1907:
case 3321:
case 1010:
case 3567:
case 2653:
case 3963:
case 1394:
case 130:
case 3423:
case 1120:
case 2819:
case 871:
case 3525:
case 2927:
case 2523:
case 2425:
case 3613:
case 590:
case 1256:
case 3495:
case 2965:
case 227:
case 3217:
case 800:
case 2135:
case 2467:
case 3593:
case 450:
case 983:
case 1871:
case 2874:
case 3061:
case 1618:
case 2202:
case 581:
case 2483:
case 3583:
case 504:
case 3987:
case 2909:
case 3485:
case 930:
case 2046:
case 1222:
case 1570:
case 206:
case 1968:
case 894:
case 1817:
case 3508:
case 26:
case 944:
case 321:
case 1564:
case 738:
case 723:
case 3904:
case 530:
case 1118:
case 399:
case 1028:
case 544:
case 3397:
case 1069:
case 1307:
case 1638:
case 2836:
case 2083:
case 2008:
case 1447:
case 1994:
case 356:
case 4043:
case 2309:
case 3044:
case 4001:
case 181:
case 2153:
case 1368:
case 1851:
case 739:
case 834:
case 1550:
case 1329:
case 1352:
case 1066:
case 2981:
case 3155:
case 873:
case 2839:
case 1005:
case 2093:
case 104:
case 3949:
case 248:
case 177:
case 3782:
case 2756:
case 3006:
case 1584:
case 736:
case 2581:
case 2200:
case 3838:
case 1875:
case 3065:
case 1679:
case 2235:
case 2548:
case 1757:
case 2063:
case 3233:
case 950:
case 7:
case 1370:
case 1572:
case 1096:
case 1220:
case 3481:
case 3774:
case 3308:
case 2880:
case 1614:
case 2722:
case 885:
case 2611:
case 1432:
case 342:
case 2344:
case 1012:
case 689:
case 1341:
case 702:
case 2878:
case 711:
case 483:
case 313:
case 1159:
case 1443:
case 2591:
case 3792:
case 2404:
case 3275:
case 1401:
case 3719:
case 3651:
case 2323:
case 4010:
case 1702:
case 2273:
case 2961:
case 444:
case 1833:
case 1099:
case 430:
case 1731:
case 361:
case 977:
case 1424:
case 215:
case 2021:
case 2509:
case 761:
case 363:
case 1711:
case 1622:
case 1659:
case 3640:
case 1486:
case 1970:
case 3739:
case 3908:
case 854:
case 1813:
case 577:
case 2004:
case 1529:
case 311:
case 713:
case 3349:
case 1412:
case 742:
case 1777:
case 2487:
case 2631:
case 1634:
case 1032:
case 2361:
case 1364:
case 2506:
case 3760:
case 2565:
case 3213:
case 887:
case 1489:
case 1903:
case 3465:
case 3346:
case 1507:
case 3818:
case 2497:
case 2215:
case 3406:
case 3427:
case 2862:
case 3925:
case 1988:
case 336:
case 3730:
case 1821:
case 2442:
case 2123:
case 1284:
case 3705:
case 2331:
case 3845:
case 2302:
case 2535:
case 1650:
case 2013:
case 3193:
case 1490:
case 380:
case 410:
case 2248:
case 3937:
case 2195:
case 189:
case 3533:
case 920:
case 2843:
case 3167:
case 3435:
case 2144:
case 2788:
case 3340:
case 1322:
case 731:
case 1795:
case 3542:
case 2741:
case 650:
case 2832:
case 1188:
case 3053:
case 1058:
case 295:
case 3183:
case 2770:
case 74:
case 3371:
case 3221:
case 120:
case 2357:
case 1294:
case 3473:
case 3575:
case 1538:
case 391:
case 2977:
case 2573:
case 2475:
case 1785:
case 716:
case 222:
case 3951:
case 3872:
case 2185:
case 3608:
case 3146:
case 3287:
case 1670:
case 1897:
case 1959:
case 4082:
case 1268:
case 824:
case 3683:
case 1229:
case 2161:
case 1379:
case 4074:
case 3807:
case 3826:
case 3073:
case 1761:
case 2902:
case 34:
case 3747:
case 1458:
case 1698:
case 70:
case 2206:
case 2227:
case 3453:
case 3149:
case 331:
case 2377:
case 3693:
case 1887:
case 4092:
case 2812:
case 1956:
case 297:
case 3868:
case 3297:
case 3351:
case 2623:
case 1376:
case 3625:
case 588:
case 235:
case 1226:
case 1207:
case 2886:
case 3667:
case 2899:
case 879:
case 1641:
case 2957:
case 3710:
case 2644:
case 2042:
case 1314:
case 1061:
case 598:
case 3952:
case 790:
case 2662:
case 2999:
case 3469:
case 3773:
case 3618:
case 808:
case 2292:
case 3428:
case 2912:
case 1583:
case 1987:
case 4006:
case 1856:
case 3138:
case 2658:
case 1240:
case 4065:
case 3570:
case 2498:
case 2324:
case 3010:
case 923:
case 938:
case 1963:
case 3405:
case 3541:
case 2742:
case 1834:
case 3503:
case 3430:
case 1133:
case 344:
case 3907:
case 3926:
case 3588:
case 1790:
case 2802:
case 521:
case 653:
case 2996:
case 2216:
case 3120:
case 461:
case 330:
case 1613:
case 139:
case 2488:
case 2566:
case 556:
case 2343:
case 619:
case 1822:
case 383:
case 781:
case 2441:
case 496:
case 2282:
case 2403:
case 1495:
case 2332:
case 3256:
case 1217:
case 1655:
case 254:
case 381:
case 2877:
case 1387:
case 2510:
case 1044:
case 2041:
case 3753:
case 1633:
case 402:
case 626:
case 2690:
case 1876:
case 523:
case 538:
case 1023:
case 1155:
case 3279:
case 463:
case 1549:
case 3066:
case 2236:
case 3329:
case 2678:
case 2386:
case 2755:
case 645:
case 2399:
case 304:
case 669:
case 865:
case 2811:
case 1762:
case 2901:
case 1904:
case 3837:
case 199:
case 2547:
case 121:
case 1397:
case 436:
case 607:
case 2158:
case 1363:
case 4081:
case 2924:
case 1879:
case 3069:
case 668:
case 2239:
case 3638:
case 3276:
case 1546:
case 3214:
case 817:
case 1758:
case 156:
case 2070:
case 1461:
case 2464:
case 3994:
case 539:
case 835:
case 4015:
case 119:
case 2895:
case 1803:
case 2699:
case 2844:
case 639:
case 2422:
case 279:
case 3629:
case 3652:
case 760:
case 3492:
case 1701:
case 3054:
case 3825:
case 4053:
case 1888:
case 2519:
case 918:
case 3668:
case 1121:
case 2076:
case 2592:
case 897:
case 1724:
case 1208:
case 2434:
case 947:
case 1011:
case 3320:
case 3893:
case 3194:
case 3270:
case 3522:
case 1267:
case 569:
case 1571:
case 3241:
case 491:
case 3482:
case 429:
case 278:
case 3288:
case 1225:
case 623:
case 551:
case 2689:
case 3607:
case 3626:
case 1375:
case 3172:
case 466:
case 2079:
case 3184:
case 85:
case 1955:
case 3883:
case 526:
case 3416:
case 40:
case 3781:
case 3556:
case 2582:
case 2230:
case 224:
case 3060:
case 1864:
case 1163:
case 3672:
case 3460:
case 2990:
case 4073:
case 2210:
case 3126:
case 926:
case 1933:
case 3016:
case 837:
case 2479:
case 519:
case 1789:
case 3436:
case 656:
case 3846:
case 621:
case 3318:
case 2797:
case 3250:
case 3765:
case 2536:
case 951:
case 3082:
case 2362:
case 107:
case 386:
case 1411:
case 1355:
case 2414:
case 710:
case 2186:
case 2247:
case 3129:
case 2034:
case 2554:
case 1002:
case 547:
case 3019:
case 2643:
case 2601:
case 3439:
case 145:
case 1313:
case 1786:
case 2476:
case 3454:
case 360:
case 431:
case 3849:
case 1850:
case 3694:
case 3645:
case 2539:
case 3576:
case 1187:
case 3514:
case 698:
case 1975:
case 772:
case 2787:
case 3709:
case 1621:
case 4000:
case 3168:
case 2224:
case 10:
case 3058:
case 1575:
case 531:
case 3914:
case 1646:
case 1769:
case 3538:
case 2848:
case 320:
case 3170:
case 2316:
case 1204:
case 129:
case 980:
case 2647:
case 1872:
case 1951:
case 388:
case 3664:
case 2128:
case 2580:
case 2382:
case 3062:
case 1705:
case 3334:
case 593:
case 3284:
case 2793:
case 855:
case 2166:
case 3821:
case 174:
case 516:
case 659:
case 2420:
case 405:
case 2891:
case 1894:
case 1766:
case 991:
case 841:
case 180:
case 2960:
case 4011:
case 1193:
case 2319:
case 214:
case 2130:
case 1167:
case 54:
case 1937:
case 3103:
case 1015:
case 1053:
case 3744:
case 2767:
case 966:
case 613:
case 3322:
case 133:
case 1340:
case 128:
case 3520:
case 90:
case 611:
case 89:
case 2809:
case 870:
case 1555:
case 94:
case 1149:
case 3150:
case 1868:
case 1000:
case 1415:
case 1035:
case 2982:
case 1513:
case 50:
case 2666:
case 2749:
case 3078:
case 602:
case 993:
case 1852:
case 1829:
case 1263:
case 2974:
case 3376:
case 2289:
case 801:
case 663:
case 3226:
case 3090:
case 3314:
case 2020:
case 2916:
case 3641:
case 2558:
case 276:
case 788:
case 2992:
case 3670:
case 3462:
case 1608:
case 1287:
case 2418:
case 857:
case 2865:
case 116:
case 636:
case 407:
case 2669:
case 1940:
case 3922:
case 2038:
case 193:
case 1826:
case 533:
case 528:
case 3229:
case 2336:
case 720:
case 3164:
case 2360:
case 3080:
case 2562:
case 3698:
case 4057:
case 6:
case 1747:
case 3341:
case 3012:
case 1009:
case 2524:
case 1367:
case 2192:
case 273:
case 2740:
case 3614:
case 3303:
case 5:
case 439:
case 3545:
case 3401:
case 1792:
case 1275:
case 2068:
case 196:
case 1325:
case 3388:
case 350:
case 113:
case 3159:
case 3122:
case 3443:
case 1140:
case 2052:
case 2501:
case 674:
case 3134:
case 2654:
case 2947:
case 1719:
case 2543:
case 3964:
case 1491:
case 3842:
case 1393:
case 161:
case 3731:
case 2330:
case 680:
case 2119:
case 81:
case 825:
case 3398:
case 3950:
case 2717:
case 961:
case 2660:
case 2472:
case 1782:
case 629:
case 3679:
case 423:
case 1065:
case 2328:
case 3156:
case 2182:
case 666:
case 2007:
case 1448:
case 2026:
case 2290:
case 913:
case 4061:
case 846:
case 502:
case 2910:
case 3757:
case 1716:
case 996:
case 60:
case 1233:
case 1774:
case 892:
case 2771:
case 2484:
case 511:
case 1308:
case 158:
case 3370:
case 3220:
case 28:
case 513:
case 1760:
case 3656:
case 1617:
case 1255:
case 3496:
case 3364:
case 596:
case 3179:
case 2136:
case 902:
case 911:
case 1:
case 542:
case 806:
case 1993:
case 2160:
case 2905:
case 1736:
case 2930:
case 1048:
case 2407:
case 1563:
case 1346:
case 3903:
case 1465:
case 1137:
case 499:
case 2589:
case 3507:
case 4085:
case 777:
case 1427:
case 559:
case 963:
case 2674:
case 3499:
case 2969:
case 2258:
case 1640:
case 3711:
case 3622:
case 2139:
case 1983:
case 3176:
case 2310:
case 3114:
case 832:
case 2045:
case 2429:
case 3568:
case 4044:
case 3218:
case 2751:
case 2619:
case 558:
case 1754:
case 631:
case 750:
case 3552:
case 3529:
case 4095:
case 3350:
case 1151:
case 2154:
case 2599:
case 102:
case 2928:
case 3032:
case 498:
case 2262:
case 3412:
case 271:
case 3532:
case 3119:
case 334:
case 3330:
case 2099:
case 1102:
case 1421:
case 2424:
case 2842:
case 3305:
case 2731:
case 948:
case 1734:
case 1961:
case 3543:
case 2964:
case 508:
case 3654:
case 917:
case 1131:
case 3029:
case 700:
case 567:
case 3068:
case 2676:
case 2388:
case 432:
case 2545:
case 2401:
case 3639:
case 165:
case 1404:
case 2303:
case 4049:
case 1722:
case 1611:
case 1087:
case 3192:
case 2341:
case 2012:
case 1157:
case 2572:
case 2220:
case 3116:
case 78:
case 3771:
case 3484:
case 794:
case 949:
case 899:
case 3174:
case 821:
case 3007:
case 3290:
case 695:
case 3873:
case 2875:
case 2156:
case 1097:
case 3182:
case 515:
case 2679:
case 1235:
case 637:
case 3328:
case 52:
case 1756:
case 3660:
case 4046:
case 952:
case 3737:
case 1253:
case 1862:
case 3596:
case 915:
case 2988:
case 492:
case 2526:
case 2507:
case 2903:
case 1995:
case 1657:
case 65:
case 2941:
case 1215:
case 1497:
case 552:
case 3930:
case 2489:
case 394:
case 3426:
case 1463:
case 838:
case 823:
case 1923:
case 4083:
case 1506:
case 2364:
case 1527:
case 549:
case 3966:
case 2496:
case 3682:
case 2634:
case 1631:
case 1487:
case 2777:
case 967:
case 2032:
case 697:
case 1985:
case 3154:
case 3599:
case 3468:
case 2998:
case 3815:
case 3586:
case 2001:
case 2529:
case 2552:
case 3619:
case 2043:
case 4067:
case 2218:
case 275:
case 3692:
case 3452:
case 1776:
case 2486:
case 2813:
case 3094:
case 548:
case 839:
case 1509:
case 0:
case 3139:
case 115:
case 517:
case 2499:
case 137:
case 1185:
case 617:
case 3647:
case 776:
case 3438:
case 648:
case 1475:
case 2170:
case 2294:
case 807:
case 2245:
case 457:
case 1911:
case 3881:
case 2976:
case 2058:
case 2480:
case 3939:
case 3708:
case 3169:
case 2795:
case 649:
case 2359:
case 764:
case 1832:
case 995:
case 2744:
case 401:
case 289:
case 1195:
case 2103:
case 2478:
case 851:
case 1843:
case 3392:
case 443:
case 484:
case 3578:
case 1248:
case 3960:
case 1013:
case 2650:
case 3936:
case 1123:
case 1442:
case 1824:
case 2821:
case 3166:
case 922:
case 470:
case 1281:
case 49:
case 1644:
case 1899:
case 1311:
case 3289:
case 2207:
case 3339:
case 2226:
case 2090:
case 2688:
case 1515:
case 1886:
case 1033:
case 615:
case 522:
case 4040:
case 3982:
case 1623:
case 595:
case 853:
case 805:
case 3630:
case 455:
case 782:
case 3809:
case 3919:
case 1764:
case 3562:
case 2698:
case 2080:
case 2379:
case 3628:
case 2164:
case 1685:
case 2229:
case 2863:
case 3336:
case 3147:
case 1931:
case 997:
case 2518:
case 2959:
case 3746:
case 1075:
case 608:
case 3806:
case 3558:
case 4013:
case 2522:
case 1805:
case 2893:
case 1609:
case 3721:
case 3612:
case 184:
case 1830:
case 2145:
case 2419:
case 19:
case 2791:
case 1794:
case 1866:
case 3124:
case 3076:
case 3592:
case 1745:
case 831:
case 3823:
case 3269:
case 4055:
case 3958:
case 3132:
case 112:
case 1300:
case 2492:
case 53:
case 627:
case 1285:
case 2629:
case 2652:
case 1440:
case 2867:
case 143:
case 3143:
case 3422:
case 3699:
case 2534:
case 2918:
case 324:
case 2808:
case 2060:
case 3380:
case 2556:
case 1784:
case 943:
case 2781:
case 555:
case 1471:
case 1148:
case 3205:
case 1869:
case 1223:
case 1373:
case 912:
case 2184:
case 1181:
case 3516:
case 1953:
case 3885:
case 1828:
case 970:
case 2607:
case 99:
case 2288:
case 2482:
case 1295:
case 1772:
case 984:
case 1244:
case 3574:
case 1037:
case 962:
case 1437:
case 286:
case 1900:
case 2684:
case 1935:
case 570:
case 3362:
case 59:
case 3056:
case 1648:
case 2765:
case 1106:
case 2250:
case 3797:
case 45:
case 2846:
case 501:
case 2920:
case 1726:
case 955:
case 543:
case 903:
case 724:
case 2126:
case 2074:
case 2460:
case 2672:
case 61:
case 1847:
case 512:
case 941:
case 3624:
case 3787:
case 141:
case 1040:
case 3059:
case 3022:
case 1511:
case 2514:
case 93:
case 2576:
case 1109:
case 155:
case 3112:
case 2849:
case 874:
case 1691:
case 557:
case 779:
case 1451:
case 3476:
case 1729:
case 4042:
case 2019:
case 828:
case 3643:
case 1261:
case 2264:
case 1973:
case 3186:
case 4033:
case 2129:
case 162:
case 3414:
case 2968:
case 2570:
case 8:
case 3498:
case 2372:
case 3658:
case 2138:
case 16:
case 387:
case 1909:
case 3912:
case 3292:
case 2428:
case 3569:
case 1738:
case 1202:
case 1483:
case 2773:
case 3528:
case 657:
case 1816:
case 2469:
case 3857:
case 2598:
case 1231:
case 1381:
case 927:
case 1408:
case 2047:
case 4063:
case 3530:
case 465:
case 354:
case 1965:
case 3403:
case 449:
case 132:
case 2256:
case 51:
case 2700:
case 4087:
case 1906:
case 3343:
case 1892:
case 601:
case 3566:
case 2735:
case 3050:
case 802:
case 3733:
case 684:
case 2345:
case 2588:
case 1819:
case 3989:
case 2430:
case 2926:
case 96:
case 1720:
case 1595:
case 3831:
case 670:
case 906:
case 69:
case 3274:
case 592:
case 2010:
case 1093:
case 3811:
case 2005:
case 2410:
case 2030:
case 1948:
case 204:
case 3755:
case 2066:
case 3678:
case 662:
case 3386:
case 2550:
case 1635:
case 56:
case 415:
case 385:
case 992:
case 842:
case 4021:
case 1600:
case 42:
case 2851:
case 861:
case 1854:
case 2972:
case 3690:
case 2368:
case 3088:
case 1025:
case 925:
case 754:
case 1309:
case 3510:
case 1067:
case 1115:
case 3877:
case 3003:
case 2994:
case 1991:
case 27:
case 2447:
case 1008:
case 3396:
case 11:
case 2307:
case 3389:
case 467:
case 125:
case 2326:
case 3924:
case 532:
case 1365:
case 2028:
case 408:
case 1673:
case 858:
case 3254:
case 1327:
case 3547:
case 2837:
case 3098:
case 787:
case 2118:
case 3680:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746680402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,];
var gg_b = "1746680402/";

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
