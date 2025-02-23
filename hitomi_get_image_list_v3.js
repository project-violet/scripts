// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
case 2351:
case 4053:
case 2904:
case 119:
case 703:
case 2796:
case 2801:
case 677:
case 2032:
case 3400:
case 2784:
case 2254:
case 3092:
case 1202:
case 296:
case 2017:
case 2746:
case 620:
case 3462:
case 3042:
case 3037:
case 1772:
case 2501:
case 1439:
case 942:
case 159:
case 3643:
case 3607:
case 3881:
case 1056:
case 1325:
case 3023:
case 3613:
case 522:
case 2660:
case 3821:
case 1495:
case 181:
case 2218:
case 2936:
case 834:
case 184:
case 1385:
case 3996:
case 2248:
case 147:
case 528:
case 966:
case 2480:
case 575:
case 939:
case 3330:
case 3083:
case 1654:
case 3371:
case 1227:
case 2602:
case 597:
case 154:
case 934:
case 1415:
case 839:
case 1757:
case 1445:
case 848:
case 3238:
case 3916:
case 2101:
case 1060:
case 438:
case 1440:
case 1288:
case 2297:
case 2656:
case 2761:
case 2409:
case 3242:
case 2315:
case 457:
case 1410:
case 1531:
case 78:
case 441:
case 1934:
case 258:
case 1978:
case 4004:
case 2425:
case 723:
case 1570:
case 1831:
case 75:
case 310:
case 2217:
case 2485:
case 2395:
case 1490:
case 1265:
case 1647:
case 3973:
case 1603:
case 1617:
case 335:
case 3489:
case 3074:
case 1131:
case 3399:
case 1170:
case 2468:
case 218:
case 502:
case 561:
case 564:
case 1256:
case 1367:
case 1451:
case 2688:
case 1697:
case 1906:
case 3564:
case 3349:
case 3676:
case 3283:
case 3753:
case 212:
case 508:
case 1794:
case 663:
case 1726:
case 2628:
case 3319:
case 3405:
case 3528:
case 3334:
case 3165:
case 2055:
case 1892:
case 2326:
case 3700:
case 2394:
case 2424:
case 3588:
case 3980:
case 1512:
case 1935:
case 647:
case 2496:
case 684:
case 3231:
case 2386:
case 681:
case 1537:
case 1542:
case 2569:
case 3270:
case 2344:
case 654:
case 3888:
case 1739:
case 1812:
case 2066:
case 1472:
case 1837:
case 2314:
case 3156:
case 2211:
case 553:
case 3828:
case 94:
case 2876:
case 2241:
case 304:
case 3565:
case 3128:
case 545:
case 2780:
case 978:
case 619:
case 3404:
case 2176:
case 3967:
case 1611:
case 1021:
case 346:
case 3188:
case 1823:
case 2508:
case 1137:
case 972:
case 1081:
case 825:
case 3075:
case 1745:
case 878:
case 1373:
case 3556:
case 1361:
case 1457:
case 120:
case 1691:
case 3865:
case 872:
case 1583:
case 513:
case 195:
case 1264:
case 1999:
case 2461:
case 2266:
case 2122:
case 2813:
case 3070:
case 2473:
case 1740:
case 2929:
case 1458:
case 50:
case 2182:
case 3502:
case 3860:
case 712:
case 3533:
case 2989:
case 2621:
case 3560:
case 3968:
case 2513:
case 163:
case 2905:
case 1138:
case 2507:
case 2543:
case 2725:
case 2091:
case 493:
case 100:
case 1971:
case 25:
case 223:
case 805:
case 1838:
case 4062:
case 758:
case 1874:
case 2582:
case 1346:
case 2193:
case 1655:
case 3909:
case 1316:
case 3133:
case 737:
case 752:
case 1064:
case 3102:
case 905:
case 3705:
case 321:
case 3377:
case 2882:
case 43:
case 3160:
case 2050:
case 3453:
case 3587:
case 2113:
case 1281:
case 1666:
case 2143:
case 4000:
case 788:
case 3985:
case 1324:
case 1879:
case 3627:
case 396:
case 2092:
case 1449:
case 3254:
case 3784:
case 1293:
case 520:
case 3047:
case 1305:
case 1069:
case 3687:
case 3796:
case 1566:
case 2736:
case 1638:
case 3351:
case 709:
case 145:
case 1207:
case 3097:
case 746:
case 577:
case 26:
case 1213:
case 768:
case 840:
case 704:
case 1579:
case 1555:
case 1957:
case 2462:
case 1076:
case 2924:
case 3248:
case 2996:
case 697:
case 1752:
case 3936:
case 933:
case 3660:
case 89:
case 2704:
case 2023:
case 3420:
case 2613:
case 276:
case 2607:
case 12:
case 3340:
case 3101:
case 183:
case 833:
case 1008:
case 2946:
case 3310:
case 4061:
case 1155:
case 2693:
case 1179:
case 675:
case 628:
case 3602:
case 1972:
case 2371:
case 3633:
case 388:
case 1007:
case 3773:
case 443:
case 1914:
case 1471:
case 724:
case 1811:
case 1093:
case 1541:
case 3232:
case 3395:
case 3247:
case 415:
case 3485:
case 2164:
case 2335:
case 3217:
case 352:
case 3054:
case 210:
case 729:
case 2608:
case 1891:
case 3425:
case 358:
case 2399:
case 4016:
case 2074:
case 3339:
case 661:
case 602:
case 2961:
case 2864:
case 608:
case 2429:
case 1082:
case 4024:
case 455:
case 1300:
case 1734:
case 2753:
case 1111:
case 312:
case 2676:
case 636:
case 3048:
case 669:
case 2564:
case 4084:
case 10:
case 2223:
case 318:
case 3468:
case 3767:
case 551:
case 2231:
case 554:
case 360:
case 3869:
case 2980:
case 3424:
case 2588:
case 3664:
case 3394:
case 589:
case 2700:
case 3576:
case 4068:
case 1803:
case 1477:
case 1719:
case 1832:
case 3326:
case 827:
case 3079:
case 1353:
case 2528:
case 3484:
case 970:
case 1547:
case 559:
case 3241:
case 2762:
case 1915:
case 3876:
case 3211:
case 898:
case 1945:
case 122:
case 1517:
case 3314:
case 581:
case 2156:
case 3066:
case 1897:
case 776:
case 175:
case 2270:
case 584:
case 547:
case 2856:
case 4085:
case 3720:
case 2188:
case 76:
case 2306:
case 246:
case 201:
case 262:
case 2967:
case 4:
case 2404:
case 3250:
case 613:
case 3780:
case 204:
case 1117:
case 2865:
case 645:
case 3962:
case 2059:
case 161:
case 1554:
case 2533:
case 3989:
case 3621:
case 102:
case 1763:
case 1118:
case 3041:
case 1771:
case 3473:
case 3813:
case 750:
case 3122:
case 31:
case 3357:
case 3461:
case 136:
case 3725:
case 735:
case 3091:
case 1198:
case 3513:
case 3905:
case 780:
case 1675:
case 1659:
case 807:
case 2968:
case 2802:
case 1730:
case 2127:
case 1304:
case 2352:
case 956:
case 1548:
case 2102:
case 1940:
case 2729:
case 2133:
case 1154:
case 2909:
case 2827:
case 3582:
case 816:
case 323:
case 1898:
case 2887:
case 35:
case 229:
case 3522:
case 710:
case 3107:
case 3768:
case 3822:
case 1598:
case 1990:
case 1848:
case 2160:
case 916:
case 1818:
case 221:
case 2377:
case 494:
case 2244:
case 3370:
case 3708:
case 2057:
case 2976:
case 2214:
case 1912:
case 2311:
case 3580:
case 4013:
case 2341:
case 4043:
case 1119:
case 3880:
case 694:
case 1835:
case 691:
case 2162:
case 115:
case 716:
case 2481:
case 2286:
case 1199:
case 786:
case 3120:
case 835:
case 574:
case 2072:
case 1899:
case 1261:
case 707:
case 950:
case 2728:
case 673:
case 1694:
case 1364:
case 1549:
case 1849:
case 1923:
case 980:
case 2350:
case 1747:
case 3077:
case 3769:
case 3401:
case 1096:
case 4082:
case 155:
case 1614:
case 1983:
case 2805:
case 3782:
case 96:
case 3034:
case 2379:
case 1748:
case 2646:
case 2993:
case 3109:
case 37:
case 3933:
case 3868:
case 1672:
case 3902:
case 2366:
case 2014:
case 4076:
case 2044:
case 2943:
case 2907:
case 3793:
case 2922:
case 453:
case 2702:
case 1563:
case 334:
case 798:
case 2129:
case 1754:
case 1830:
case 2982:
case 1381:
case 3006:
case 1296:
case 3825:
case 1491:
case 1224:
case 2189:
case 339:
case 1061:
case 366:
case 2058:
case 3359:
case 1073:
case 3525:
case 3168:
case 1871:
case 1938:
case 1216:
case 1411:
case 1530:
case 342:
case 4008:
case 1863:
case 3585:
case 1974:
case 630:
case 2504:
case 2685:
case 1177:
case 1552:
case 685:
case 402:
case 3196:
case 256:
case 173:
case 2251:
case 2456:
case 1610:
case 1020:
case 517:
case 2609:
case 469:
case 2354:
case 1080:
case 655:
case 3035:
case 1152:
case 1577:
case 3271:
case 3476:
case 3584:
case 3816:
case 1959:
case 541:
case 2210:
case 3099:
case 1209:
case 829:
case 2398:
case 2668:
case 305:
case 1651:
case 1497:
case 3338:
case 3596:
case 3374:
case 921:
case 1067:
case 191:
case 3921:
case 532:
case 549:
case 1403:
case 821:
case 3629:
case 1877:
case 3019:
case 1447:
case 824:
case 1417:
case 1779:
case 3884:
case 3230:
case 1220:
case 3173:
case 1068:
case 733:
case 3422:
case 2051:
case 34:
case 3161:
case 1834:
case 1750:
case 227:
case 3392:
case 3662:
case 1878:
case 1418:
case 1931:
case 3482:
case 2332:
case 2303:
case 4001:
case 3600:
case 1578:
case 1328:
case 1534:
case 428:
case 475:
case 1106:
case 2397:
case 2667:
case 1388:
case 292:
case 2487:
case 270:
case 846:
case 3573:
case 1806:
case 1:
case 3323:
case 1356:
case 868:
case 1085:
case 3249:
case 2433:
case 3493:
case 801:
case 3219:
case 862:
case 372:
case 1711:
case 1695:
case 1178:
case 526:
case 3063:
case 2460:
case 946:
case 2680:
case 167:
case 2239:
case 2040:
case 3443:
case 3873:
case 3413:
case 1009:
case 3299:
case 2988:
case 1997:
case 882:
case 3765:
case 937:
case 3214:
case 2167:
case 952:
case 1815:
case 1606:
case 4060:
case 2520:
case 888:
case 1475:
case 1459:
case 2928:
case 2370:
case 1515:
case 599:
case 3673:
case 4002:
case 1947:
case 4033:
case 3286:
case 3481:
case 2331:
case 1917:
case 705:
case 106:
case 3661:
case 2820:
case 1723:
case 1139:
case 1895:
case 3421:
case 2052:
case 3226:
case 2278:
case 3969:
case 1783:
case 679:
case 3500:
case 2653:
case 1634:
case 1195:
case 117:
case 2180:
case 1742:
case 3072:
case 2567:
case 4027:
case 3258:
case 1839:
case 2965:
case 2120:
case 2867:
case 1036:
case 1115:
case 818:
case 2401:
case 2077:
case 2956:
case 3562:
case 812:
case 1792:
case 725:
case 1301:
case 126:
case 2868:
case 3589:
case 27:
case 3993:
case 567:
case 1110:
case 1851:
case 3086:
case 772:
case 3355:
case 2078:
case 896:
case 2034:
case 1204:
case 2252:
case 790:
case 3616:
case 1677:
case 5:
case 3907:
case 3684:
case 4088:
case 3913:
case 1190:
case 1774:
case 3014:
case 3366:
case 3257:
case 340:
case 3189:
case 481:
case 1540:
case 2006:
case 3982:
case 1431:
case 1236:
case 2509:
case 3129:
case 4056:
case 459:
case 3702:
case 2885:
case 2277:
case 231:
case 2793:
case 2987:
case 1840:
case 2168:
case 1470:
case 2359:
case 2375:
case 3058:
case 333:
case 2927:
case 239:
case 2809:
case 74:
case 1307:
case 1775:
case 356:
case 2196:
case 617:
case 1313:
case 2408:
case 179:
case 81:
case 3015:
case 3625:
case 1229:
case 3465:
case 2184:
case 1630:
case 3685:
case 1966:
case 1671:
case 2035:
case 174:
case 3901:
case 585:
case 1483:
case 2116:
case 463:
case 1663:
case 3721:
case 1172:
case 3456:
case 3781:
case 3251:
case 316:
case 3488:
case 632:
case 2338:
case 1412:
case 3039:
case 85:
case 3668:
case 2099:
case 1442:
case 3210:
case 400:
case 98:
case 3428:
case 515:
case 638:
case 3104:
case 2271:
case 2230:
case 2884:
case 2516:
case 606:
case 3348:
case 1000:
case 2824:
case 2469:
case 644:
case 1322:
case 2689:
case 1572:
case 88:
case 1894:
case 2482:
case 3295:
case 3332:
case 1826:
case 3347:
case 1991:
case 2161:
case 1514:
case 739:
case 2422:
case 748:
case 1544:
case 1369:
case 1158:
case 1814:
case 1586:
case 370:
case 3215:
case 1941:
case 2342:
case 2337:
case 3245:
case 1911:
case 392:
case 3667:
case 1844:
case 1594:
case 731:
case 1376:
case 3553:
case 734:
case 398:
case 1619:
case 3764:
case 2219:
case 903:
case 2030:
case 2249:
case 626:
case 477:
case 1950:
case 495:
case 3620:
case 2413:
case 2964:
case 1770:
case 3040:
case 278:
case 225:
case 1194:
case 1635:
case 290:
case 3680:
case 420:
case 3153:
case 3406:
case 369:
case 1543:
case 336:
case 612:
case 2138:
case 3198:
case 4035:
case 1513:
case 874:
case 1279:
case 3730:
case 580:
case 1893:
case 871:
case 302:
case 1989:
case 3763:
case 1182:
case 1041:
case 1681:
case 1929:
case 2930:
case 4019:
case 2538:
case 2666:
case 1768:
case 637:
case 1113:
case 2751:
case 1822:
case 993:
case 3990:
case 18:
case 2384:
case 1050:
case 3848:
case 3818:
case 2426:
case 3940:
case 3154:
case 93:
case 2316:
case 1193:
case 2346:
case 1582:
case 3518:
case 2444:
case 123:
case 2838:
case 682:
case 1372:
case 2414:
case 1522:
case 2650:
case 1876:
case 3915:
case 1241:
case 781:
case 3945:
case 1416:
case 3517:
case 2592:
case 759:
case 2837:
case 1066:
case 2842:
case 375:
case 3897:
case 2739:
case 328:
case 1569:
case 2542:
case 1108:
case 1767:
case 865:
case 3001:
case 1291:
case 2935:
case 2512:
case 1664:
case 3847:
case 3832:
case 3719:
case 1055:
case 3353:
case 2999:
case 3103:
case 3132:
case 3147:
case 3939:
case 220:
case 4071:
case 490:
case 1169:
case 2373:
case 1358:
case 103:
case 1508:
case 2142:
case 3670:
case 1900:
case 2137:
case 3197:
case 1720:
case 2021:
case 1780:
case 714:
case 2883:
case 3735:
case 56:
case 2641:
case 2490:
case 3541:
case 3986:
case 1247:
case 1665:
case 841:
case 887:
case 137:
case 844:
case 1485:
case 3511:
case 3430:
case 152:
case 2831:
case 806:
case 2978:
case 3269:
case 3706:
case 2570:
case 4052:
case 2320:
case 2531:
case 987:
case 849:
case 1761:
case 3007:
case 1345:
case 2758:
case 941:
case 524:
case 3914:
case 3683:
case 906:
case 65:
case 3811:
case 182:
case 623:
case 857:
case 3944:
case 2060:
case 3463:
case 3082:
case 112:
case 3111:
case 3734:
case 2906:
case 1048:
case 3778:
case 917:
case 3022:
case 3612:
case 1688:
case 30:
case 118:
case 3642:
case 3637:
case 763:
case 2087:
case 2131:
case 3692:
case 2617:
case 2603:
case 2632:
case 3958:
case 3550:
case 2647:
case 2088:
case 504:
case 1501:
case 3499:
case 2772:
case 2028:
case 1716:
case 603:
case 777:
case 3329:
case 546:
case 214:
case 926:
case 211:
case 2648:
case 3449:
case 47:
case 795:
case 1627:
case 1017:
case 3879:
case 1784:
case 1254:
case 3293:
case 1047:
case 2698:
case 826:
case 2175:
case 313:
case 383:
case 2875:
case 2859:
case 2309:
case 2415:
case 289:
case 442:
case 1310:
case 254:
case 466:
case 3972:
case 448:
case 1480:
case 2385:
case 284:
case 3435:
case 660:
case 2495:
case 281:
case 3752:
case 1218:
case 1660:
case 4006:
case 431:
case 2325:
case 3222:
case 434:
case 32:
case 1352:
case 2951:
case 973:
case 2304:
case 650:
case 363:
case 1031:
case 2659:
case 2675:
case 407:
case 4095:
case 3138:
case 269:
case 3174:
case 2406:
case 3740:
case 873:
case 512:
case 264:
case 456:
case 4015:
case 2763:
case 1860:
case 1502:
case 2148:
case 202:
case 635:
case 261:
case 1533:
case 1527:
case 3426:
case 1705:
case 1160:
case 124:
case 2478:
case 588:
case 1587:
case 2990:
case 3281:
case 3751:
case 2336:
case 3538:
case 3930:
case 2898:
case 300:
case 129:
case 1601:
case 1259:
case 1275:
case 1789:
case 3874:
case 3963:
case 3444:
case 994:
case 2910:
case 416:
case 899:
case 1909:
case 1729:
case 2154:
case 2548:
case 3064:
case 1270:
case 228:
case 3739:
case 3123:
case 3472:
case 498:
case 72:
case 3592:
case 3183:
case 1828:
case 222:
case 2503:
case 2915:
case 1762:
case 2532:
case 2547:
case 3650:
case 2353:
case 4051:
case 1378:
case 2719:
case 2477:
case 3512:
case 1980:
case 1588:
case 2597:
case 297:
case 2001:
case 1231:
case 3542:
case 3537:
case 3745:
case 1059:
case 3373:
case 596:
case 109:
case 3691:
case 3457:
case 4010:
case 66:
case 2117:
case 2132:
case 4040:
case 867:
case 3999:
case 3641:
case 1128:
case 1565:
case 3611:
case 1967:
case 0:
case 1306:
case 8:
case 2197:
case 1188:
case 967:
case 3137:
case 2670:
case 1856:
case 2706:
case 2891:
case 3978:
case 621:
case 523:
case 3380:
case 3033:
case 3002:
case 1164:
case 2986:
case 2541:
case 943:
case 2093:
case 55:
case 3228:
case 2811:
case 2150:
case 629:
case 2471:
case 915:
case 58:
case 2683:
case 2043:
case 3440:
case 2591:
case 843:
case 2007:
case 1242:
case 3531:
case 2013:
case 2623:
case 3410:
case 3170:
case 1223:
case 150:
case 3697:
case 3367:
case 2022:
case 3256:
case 1676:
case 1349:
case 1564:
case 2734:
case 1283:
case 3794:
case 51:
case 985:
case 2141:
case 1405:
case 3726:
case 1429:
case 2958:
case 3603:
case 1864:
case 3617:
case 1961:
case 769:
case 2191:
case 1074:
case 180:
case 830:
case 2208:
case 3087:
case 4044:
case 2076:
case 3648:
case 440:
case 2555:
case 314:
case 2329:
case 4014:
case 3028:
case 2866:
case 1037:
case 2499:
case 2213:
case 2243:
case 2207:
case 245:
case 1622:
case 2389:
case 1736:
case 2566:
case 2069:
case 3698:
case 3368:
case 668:
case 2419:
case 2293:
case 3233:
case 503:
case 3202:
case 2449:
case 1092:
case 351:
case 3654:
case 1521:
case 3227:
case 1371:
case 2972:
case 560:
case 354:
case 2179:
case 2155:
case 3309:
case 3415:
case 1916:
case 1238:
case 283:
case 3445:
case 359:
case 3056:
case 1881:
case 3977:
case 176:
case 728:
case 3559:
case 253:
case 1613:
case 1023:
case 2752:
case 1821:
case 2282:
case 722:
case 347:
case 1996:
case 384:
case 2435:
case 1330:
case 1924:
case 531:
case 3814:
case 2498:
case 3941:
case 170:
case 1667:
case 875:
case 3438:
case 1397:
case 3089:
case 828:
case 3474:
case 534:
case 3844:
case 997:
case 3526:
case 3376:
case 1427:
case 3619:
case 633:
case 1553:
case 2534:
case 2328:
case 2970:
case 928:
case 539:
case 975:
case 1347:
case 3826:
case 2418:
case 3005:
case 1332:
case 2931:
case 1317:
case 3991:
case 548:
case 2750:
case 2834:
case 2639:
case 3886:
case 897:
case 542:
case 1620:
case 1010:
case 1040:
case 3770:
case 2506:
case 1239:
case 3635:
case 4075:
case 2178:
case 2695:
case 1153:
case 2134:
case 3200:
case 2085:
case 3114:
case 2267:
case 462:
case 3950:
case 3558:
case 3144:
case 2025:
case 2791:
case 2615:
case 374:
case 3671:
case 107:
case 3483:
case 1354:
case 2080:
case 3663:
case 1721:
case 2268:
case 3955:
case 785:
case 836:
case 186:
case 2020:
case 2610:
case 3423:
case 3172:
case 730:
case 1456:
case 1781:
case 3289:
case 1045:
case 808:
case 3307:
case 755:
case 1136:
case 3313:
case 1625:
case 1015:
case 861:
case 2360:
case 936:
case 969:
case 2177:
case 4070:
case 3492:
case 2285:
case 2779:
case 2417:
case 2877:
case 3382:
case 1318:
case 1290:
case 743:
case 2067:
case 1836:
case 291:
case 3572:
case 33:
case 116:
case 715:
case 3412:
case 2497:
case 1488:
case 1668:
case 3872:
case 2766:
case 3437:
case 1210:
case 1428:
case 1104:
case 2130:
case 1829:
case 3677:
case 4042:
case 1464:
case 1913:
case 4012:
case 3190:
case 913:
case 1727:
case 3738:
case 845:
case 1044:
case 1624:
case 1696:
case 2798:
case 3140:
case 3301:
case 3954:
case 813:
case 4092:
case 3851:
case 1086:
case 1646:
case 578:
case 1529:
case 945:
case 1805:
case 767:
case 1616:
case 1026:
case 2974:
case 692:
case 2216:
case 92:
case 3652:
case 2871:
case 3998:
case 670:
case 54:
case 3590:
case 953:
case 1105:
case 2073:
case 883:
case 1058:
case 698:
case 1272:
case 1189:
case 2224:
case 2491:
case 2657:
case 3918:
case 3431:
case 1129:
case 1733:
case 2754:
case 1702:
case 1922:
case 476:
case 3890:
case 3903:
case 3932:
case 1756:
case 1481:
case 1661:
case 306:
case 3139:
case 3723:
case 1294:
case 799:
case 1226:
case 1421:
case 387:
case 505:
case 3783:
case 3253:
case 2119:
case 1341:
case 332:
case 1765:
case 3997:
case 2149:
case 357:
case 616:
case 1214:
case 3606:
case 791:
case 3815:
case 3459:
case 3845:
case 3036:
case 2644:
case 2024:
case 2983:
case 3539:
case 607:
case 2703:
case 1562:
case 3792:
case 1500:
case 1862:
case 4074:
case 3195:
case 3634:
case 2364:
case 2549:
case 90:
case 2016:
case 2466:
case 2261:
case 230:
case 2273:
case 285:
case 1788:
case 2797:
case 3712:
case 3839:
case 1600:
case 3578:
case 3328:
case 3534:
case 2029:
case 666:
case 2649:
case 2376:
case 2526:
case 2474:
case 3388:
case 642:
case 1342:
case 59:
case 2941:
case 1337:
case 2814:
case 3220:
case 2158:
case 634:
case 1173:
case 631:
case 2886:
case 2514:
case 1422:
case 14:
case 3878:
case 1392:
case 3448:
case 1482:
case 3931:
case 2826:
case 3711:
case 3365:
case 2126:
case 367:
case 3741:
case 2635:
case 2858:
case 2770:
case 3506:
case 1964:
case 2186:
case 1413:
case 820:
case 1299:
case 3009:
case 2308:
case 3025:
case 3791:
case 3:
case 2950:
case 1561:
case 995:
case 3267:
case 2731:
case 877:
case 540:
case 2200:
case 1493:
case 1219:
case 2557:
case 3640:
case 3020:
case 2423:
case 3610:
case 3852:
case 2205:
case 2393:
case 1146:
case 4091:
case 1116:
case 3333:
case 2671:
case 274:
case 1035:
case 2966:
case 3552:
case 3177:
case 3360:
case 2229:
case 1408:
case 4011:
case 1196:
case 2775:
case 2289:
case 23:
case 2157:
case 2322:
case 391:
case 4050:
case 749:
case 738:
case 1896:
case 1824:
case 1546:
case 3447:
case 3755:
case 3285:
case 757:
case 1516:
case 423:
case 3577:
case 2062:
case 1476:
case 1271:
case 3327:
case 741:
case 1605:
case 787:
case 3959:
case 3975:
case 1816:
case 3766:
case 800:
case 3209:
case 105:
case 1374:
case 1596:
case 690:
case 1568:
case 2190:
case 811:
case 1185:
case 814:
case 625:
case 678:
case 919:
case 1782:
case 3450:
case 3748:
case 3163:
case 1722:
case 914:
case 2110:
case 4017:
case 4032:
case 1933:
case 4047:
case 226:
case 1902:
case 911:
case 1868:
case 3672:
case 2810:
case 2151:
case 166:
case 1809:
case 1359:
case 2840:
case 981:
case 851:
case 2998:
case 3871:
case 1987:
case 3530:
case 3411:
case 2652:
case 3974:
case 1585:
case 854:
case 3863:
case 1793:
case 2890:
case 3571:
case 570:
case 131:
case 3321:
case 1277:
case 1885:
case 884:
case 3563:
case 989:
case 3284:
case 1509:
case 3381:
case 2510:
case 954:
case 2431:
case 2236:
case 3491:
case 2540:
case 3657:
case 951:
case 2948:
case 1006:
case 1234:
case 1880:
case 3835:
case 1278:
case 287:
case 241:
case 458:
case 1052:
case 2004:
case 2545:
case 1820:
case 2139:
case 206:
case 4054:
case 452:
case 1331:
case 3658:
case 2932:
case 437:
case 2515:
case 3199:
case 1520:
case 1928:
case 249:
case 2997:
case 3912:
case 232:
case 605:
case 3937:
case 3942:
case 2595:
case 488:
case 3849:
case 3455:
case 3084:
case 3923:
case 418:
case 1077:
case 3819:
case 1206:
case 3096:
case 3983:
case 4018:
case 3024:
case 3599:
case 4048:
case 2036:
case 1867:
case 412:
case 2712:
case 3686:
case 385:
case 3797:
case 3273:
case 507:
case 3261:
case 2742:
case 330:
case 2737:
case 3466:
case 3016:
case 774:
case 3626:
case 3549:
case 3364:
case 3694:
case 3135:
case 1653:
case 3046:
case 771:
case 2678:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1740330001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,];
var gg_b = "1740330001/";

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
    if (rr["hasavif"] == 1) rr["haswebp"] = 1;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      subdomainx = String.fromCharCode(97 + gg_m[x]);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
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
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
