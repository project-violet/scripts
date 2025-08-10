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
case 1473:
case 3542:
case 2753:
case 2191:
case 1896:
case 1001:
case 3518:
case 2145:
case 3349:
case 1196:
case 439:
case 2006:
case 2891:
case 3181:
case 1797:
case 1501:
case 1160:
case 2854:
case 3042:
case 317:
case 3470:
case 2562:
case 3865:
case 2288:
case 1860:
case 383:
case 2927:
case 560:
case 3881:
case 943:
case 4094:
case 947:
case 1435:
case 3018:
case 1918:
case 491:
case 1190:
case 149:
case 2248:
case 3841:
case 2883:
case 584:
case 1890:
case 3794:
case 3195:
case 4064:
case 2605:
case 2524:
case 2092:
case 575:
case 1866:
case 2903:
case 2500:
case 2784:
case 723:
case 3722:
case 1682:
case 2185:
case 1802:
case 693:
case 1249:
case 40:
case 461:
case 697:
case 3893:
case 436:
case 3:
case 2435:
case 1154:
case 3312:
case 2918:
case 3662:
case 1619:
case 1369:
case 2475:
case 3027:
case 1562:
case 1854:
case 3348:
case 3750:
case 1143:
case 246:
case 271:
case 2289:
case 4056:
case 1891:
case 1744:
case 2642:
case 640:
case 4047:
case 3019:
case 2896:
case 984:
case 1753:
case 1627:
case 2618:
case 2473:
case 3756:
case 3600:
case 1861:
case 2429:
case 817:
case 2682:
case 1185:
case 1784:
case 3624:
case 3747:
case 883:
case 348:
case 960:
case 1903:
case 132:
case 988:
case 1524:
case 3992:
case 1092:
case 547:
case 887:
case 1885:
case 2102:
case 1212:
case 3005:
case 1905:
case 1399:
case 3269:
case 1883:
case 3857:
case 635:
case 3924:
case 1024:
case 1428:
case 1248:
case 249:
case 1183:
case 2417:
case 3157:
case 2767:
case 1000:
case 4050:
case 1055:
case 4005:
case 3271:
case 1544:
case 2178:
case 134:
case 328:
case 2838:
case 1107:
case 2449:
case 1950:
case 3050:
case 2229:
case 1839:
case 2330:
case 1706:
case 3826:
case 1448:
case 1555:
case 3944:
case 1044:
case 784:
case 1879:
case 2597:
case 3087:
case 1053:
case 3953:
case 3126:
case 3550:
case 3655:
case 714:
case 1412:
case 226:
case 1123:
case 3056:
case 891:
case 3328:
case 2922:
case 760:
case 3984:
case 788:
case 3047:
case 1947:
case 2567:
case 3703:
case 1823:
case 1792:
case 2694:
case 2235:
case 3104:
case 2273:
case 2994:
case 1825:
case 1371:
case 342:
case 1331:
case 324:
case 2233:
case 620:
case 3804:
case 3684:
case 912:
case 2336:
case 2067:
case 1656:
case 3547:
case 836:
case 2489:
case 1314:
case 2412:
case 2179:
case 824:
case 2053:
case 1701:
case 1370:
case 2879:
case 2228:
case 2555:
case 2448:
case 3852:
case 361:
case 19:
case 129:
case 3697:
case 2839:
case 2706:
case 391:
case 16:
case 1878:
case 1097:
case 3236:
case 2553:
case 1449:
case 2950:
case 4082:
case 1838:
case 2055:
case 3551:
case 2700:
case 3967:
case 413:
case 2656:
case 4042:
case 2724:
case 417:
case 2125:
case 1622:
case 2647:
case 1651:
case 2371:
case 3522:
case 1273:
case 1694:
case 3214:
case 681:
case 1567:
case 923:
case 2947:
case 3051:
case 2488:
case 3270:
case 2084:
case 47:
case 339:
case 3230:
case 126:
case 2123:
case 159:
case 2931:
case 686:
case 2528:
case 1394:
case 3264:
case 3617:
case 3929:
case 44:
case 1936:
case 3036:
case 1976:
case 616:
case 2788:
case 1676:
case 3482:
case 2244:
case 2424:
case 2028:
case 399:
case 32:
case 3917:
case 1017:
case 2356:
case 210:
case 1636:
case 4068:
case 3576:
case 280:
case 1573:
case 3070:
case 1970:
case 3442:
case 13:
case 106:
case 396:
case 3030:
case 1930:
case 3014:
case 3418:
case 3768:
case 907:
case 525:
case 2387:
case 3633:
case 3933:
case 156:
case 872:
case 78:
case 3635:
case 1073:
case 689:
case 2406:
case 1575:
case 2350:
case 1630:
case 1670:
case 957:
case 2748:
case 619:
case 71:
case 1535:
case 2351:
case 1347:
case 2529:
case 372:
case 1671:
case 831:
case 415:
case 358:
case 3531:
case 2017:
case 1244:
case 1424:
case 3928:
case 557:
case 3628:
case 1788:
case 2976:
case 3250:
case 2029:
case 2936:
case 896:
case 2297:
case 507:
case 3071:
case 1971:
case 1255:
case 1492:
case 474:
case 3799:
case 3031:
case 308:
case 4069:
case 3832:
case 1350:
case 452:
case 82:
case 2267:
case 2630:
case 899:
case 2364:
case 1462:
case 2614:
case 304:
case 3419:
case 3769:
case 3427:
case 164:
case 3353:
case 650:
case 1158:
case 3256:
case 869:
case 2749:
case 3344:
case 1858:
case 2573:
case 2970:
case 2201:
case 51:
case 3392:
case 2998:
case 1262:
case 3599:
case 454:
case 84:
case 3808:
case 695:
case 2729:
case 2116:
case 2698:
case 577:
case 3771:
case 3099:
case 2816:
case 162:
case 573:
case 3227:
case 930:
case 2589:
case 1048:
case 1444:
case 2342:
case 2318:
case 1012:
case 374:
case 4031:
case 1453:
case 2733:
case 1327:
case 1969:
case 2775:
case 2810:
case 1319:
case 2174:
case 1548:
case 2134:
case 3612:
case 2968:
case 2874:
case 3569:
case 2497:
case 2110:
case 3450:
case 3648:
case 262:
case 3109:
case 885:
case 545:
case 1816:
case 815:
case 3689:
case 2811:
case 466:
case 1729:
case 2088:
case 1382:
case 3177:
case 4070:
case 2728:
case 633:
case 1717:
case 1467:
case 2206:
case 4014:
case 3494:
case 3098:
case 2303:
case 292:
case 1201:
case 1834:
case 499:
case 852:
case 42:
case 1049:
case 3949:
case 3730:
case 141:
case 707:
case 1874:
case 1968:
case 3464:
case 3115:
case 1134:
case 2292:
case 2455:
case 2548:
case 530:
case 973:
case 1775:
case 3301:
case 1733:
case 2453:
case 1549:
case 753:
case 1318:
case 1773:
case 98:
case 3649:
case 3813:
case 0:
case 4036:
case 2048:
case 2444:
case 1342:
case 3568:
case 1965:
case 2545:
case 2054:
case 996:
case 2211:
case 1778:
case 1313:
case 3696:
case 1216:
case 3960:
case 508:
case 2707:
case 303:
case 193:
case 1096:
case 3996:
case 1681:
case 235:
case 163:
case 572:
case 2045:
case 2554:
case 3565:
case 2862:
case 2806:
case 2739:
case 1560:
case 558:
case 353:
case 1963:
case 3374:
case 931:
case 1101:
case 1459:
case 2162:
case 1315:
case 4021:
case 1210:
case 1066:
case 2723:
case 1337:
case 1641:
case 2892:
case 1274:
case 3093:
case 1590:
case 2646:
case 554:
case 969:
case 3902:
case 2308:
case 3095:
case 3213:
case 999:
case 2124:
case 3990:
case 1090:
case 3316:
case 2561:
case 473:
case 3041:
case 1941:
case 2083:
case 2315:
case 3208:
case 2101:
case 599:
case 3119:
case 1543:
case 2459:
case 1739:
case 3991:
case 1686:
case 3726:
case 267:
case 3945:
case 1106:
case 135:
case 430:
case 263:
case 2096:
case 904:
case 3819:
case 1591:
case 293:
case 1707:
case 3540:
case 3943:
case 2778:
case 954:
case 2313:
case 1211:
case 1986:
case 1545:
case 4004:
case 3954:
case 2965:
case 3057:
case 1100:
case 1561:
case 3805:
case 853:
case 2693:
case 1946:
case 3661:
case 2309:
case 3720:
case 2566:
case 1680:
case 3704:
case 702:
case 1824:
case 1192:
case 2002:
case 2993:
case 1646:
case 4026:
case 3103:
case 3557:
case 1980:
case 3080:
case 2274:
case 1892:
case 752:
case 325:
case 3803:
case 2337:
case 1723:
case 803:
case 2210:
case 3546:
case 1079:
case 3979:
case 638:
case 3358:
case 1153:
case 1791:
case 3187:
case 1853:
case 425:
case 2921:
case 974:
case 2578:
case 2796:
case 4057:
case 3907:
case 2760:
case 3150:
case 2197:
case 345:
case 754:
case 1855:
case 1372:
case 2897:
case 2474:
case 281:
case 3850:
case 915:
case 2038:
case 1332:
case 2434:
case 1783:
case 81:
case 3757:
case 2790:
case 758:
case 1523:
case 88:
case 1920:
case 3020:
case 3408:
case 772:
case 1904:
case 634:
case 1258:
case 2702:
case 1761:
case 1411:
case 3147:
case 3856:
case 3780:
case 952:
case 1184:
case 2416:
case 3923:
case 3156:
case 1023:
case 978:
case 3847:
case 873:
case 1038:
case 2332:
case 1434:
case 3164:
case 2626:
case 3359:
case 1474:
case 181:
case 1078:
case 3978:
case 3864:
case 1621:
case 2743:
case 3781:
case 830:
case 2007:
case 373:
case 1760:
case 31:
case 1796:
case 1578:
case 2853:
case 502:
case 766:
case 2144:
case 1538:
case 2926:
case 2507:
case 38:
case 3052:
case 2079:
case 3851:
case 585:
case 845:
case 66:
case 601:
case 2184:
case 3122:
case 2785:
case 769:
case 2620:
case 453:
case 2411:
case 3793:
case 3409:
case 2604:
case 4065:
case 2904:
case 1259:
case 69:
case 629:
case 3477:
case 3437:
case 1790:
case 2783:
case 1167:
case 189:
case 2828:
case 3495:
case 2483:
case 3221:
case 3441:
case 1490:
case 522:
case 3737:
case 3777:
case 2485:
case 3176:
case 63:
case 1716:
case 1466:
case 875:
case 2207:
case 1238:
case 1402:
case 3876:
case 3836:
case 3709:
case 3493:
case 1829:
case 250:
case 427:
case 1873:
case 761:
case 423:
case 2932:
case 1173:
case 1059:
case 3378:
case 2491:
case 3713:
case 2972:
case 186:
case 3830:
case 1175:
case 2672:
case 818:
case 2058:
case 1352:
case 75:
case 2454:
case 3114:
case 917:
case 659:
case 3870:
case 860:
case 1321:
case 888:
case 548:
case 4037:
case 1559:
case 2443:
case 2223:
case 3170:
case 347:
case 1835:
case 791:
case 1320:
case 150:
case 455:
case 1461:
case 2402:
case 1304:
case 517:
case 664:
case 388:
case 360:
case 1207:
case 948:
case 2466:
case 3325:
case 3871:
case 847:
case 587:
case 1128:
case 390:
case 3323:
case 3457:
case 694:
case 1279:
case 724:
case 742:
case 2817:
case 57:
case 1239:
case 3446:
case 3226:
case 216:
case 1443:
case 2875:
case 2460:
case 2710:
case 2734:
case 3379:
case 1632:
case 3958:
case 1672:
case 3339:
case 5:
case 412:
case 1326:
case 3072:
case 1972:
case 2133:
case 3220:
case 3440:
case 2173:
case 1932:
case 2496:
case 384:
case 1558:
case 610:
case 1445:
case 2873:
case 414:
case 591:
case 3199:
case 4072:
case 3286:
case 1011:
case 2395:
case 1254:
case 3383:
case 2260:
case 2341:
case 1243:
case 484:
case 55:
case 3508:
case 1188:
case 3385:
case 1245:
case 475:
case 1511:
case 924:
case 2296:
case 1908:
case 2516:
case 3240:
case 2393:
case 1380:
case 1291:
case 312:
case 827:
case 3345:
case 2266:
case 928:
case 490:
case 195:
case 305:
case 2034:
case 1758:
case 2613:
case 2849:
case 1261:
case 2363:
case 3280:
case 2478:
case 3391:
case 3772:
case 2913:
case 1439:
case 418:
case 2759:
case 3169:
case 355:
case 3354:
case 722:
case 2615:
case 1479:
case 233:
case 165:
case 2381:
case 2290:
case 2534:
case 2380:
case 1516:
case 3302:
case 3366:
case 2511:
case 1937:
case 3037:
case 1189:
case 2425:
case 3077:
case 2245:
case 7:
case 676:
case 3281:
case 3916:
case 3390:
case 1637:
case 1341:
case 2888:
case 3265:
case 1395:
case 2254:
case 3537:
case 2346:
case 939:
case 2812:
case 3515:
case 1534:
case 137:
case 77:
case 1381:
case 3610:
case 1290:
case 1574:
case 2283:
case 3360:
case 3241:
case 265:
case 2479:
case 2848:
case 90:
case 961:
case 2439:
case 787:
case 1074:
case 3974:
case 1478:
case 1613:
case 1849:
case 2261:
case 991:
case 3168:
case 783:
case 3934:
case 1010:
case 1149:
case 3396:
case 1427:
case 364:
case 1247:
case 2251:
case 3387:
case 859:
case 492:
case 2768:
case 2418:
case 2935:
case 618:
case 2030:
case 296:
case 821:
case 3858:
case 2442:
case 2222:
case 2070:
case 1832:
case 2514:
case 4088:
case 3748:
case 809:
case 3406:
case 231:
case 1872:
case 3712:
case 2570:
case 2973:
case 2294:
case 1172:
case 2933:
case 1419:
case 462:
case 3788:
case 675:
case 2076:
case 2036:
case 2367:
case 83:
case 4012:
case 2264:
case 3255:
case 1071:
case 1799:
case 1031:
case 3931:
case 398:
case 108:
case 3347:
case 3631:
case 940:
case 172:
case 3253:
case 567:
case 2798:
case 1405:
case 158:
case 2629:
case 1531:
case 2917:
case 299:
case 3028:
case 3424:
case 2482:
case 1384:
case 3401:
case 356:
case 1933:
case 2769:
case 2419:
case 540:
case 880:
case 204:
case 868:
case 2132:
case 3364:
case 1973:
case 131:
case 3575:
case 810:
case 2872:
case 3630:
case 3859:
case 3670:
case 1514:
case 1070:
case 3573:
case 479:
case 254:
case 33:
case 4089:
case 1418:
case 1935:
case 3035:
case 997:
case 1633:
case 993:
case 3075:
case 1251:
case 2384:
case 2928:
case 4049:
case 2531:
case 258:
case 441:
case 1629:
case 476:
case 1798:
case 535:
case 3529:
case 3351:
case 208:
case 2403:
case 2799:
case 3394:
case 321:
case 3297:
case 1036:
case 647:
case 643:
case 1076:
case 2069:
case 3773:
case 3318:
case 1813:
case 1649:
case 4029:
case 763:
case 1770:
case 2648:
case 793:
case 623:
case 4017:
case 1949:
case 3049:
case 627:
case 2569:
case 376:
case 215:
case 1730:
case 3735:
case 1464:
case 2612:
case 1115:
case 2203:
case 3810:
case 1301:
case 1177:
case 2688:
case 379:
case 2599:
case 3467:
case 2108:
case 4035:
case 3998:
case 1098:
case 1494:
case 2392:
case 202:
case 520:
case 3589:
case 1451:
case 278:
case 1109:
case 3816:
case 2099:
case 3698:
case 1218:
case 2456:
case 3116:
case 3729:
case 1689:
case 1736:
case 2300:
case 1776:
case 1598:
case 1422:
case 3382:
case 3319:
case 2301:
case 3669:
case 1612:
case 3548:
case 3292:
case 2115:
case 2714:
case 2068:
case 115:
case 2949:
case 4028:
case 3512:
case 1648:
case 2815:
case 2568:
case 3224:
case 3444:
case 1948:
case 2813:
case 3012:
case 1205:
case 2113:
case 3453:
case 174:
case 1487:
case 1069:
case 920:
case 498:
case 3327:
case 605:
case 3088:
case 1988:
case 2242:
case 1324:
case 2422:
case 3811:
case 2689:
case 152:
case 876:
case 2218:
case 3305:
case 511:
case 3111:
case 1447:
case 464:
case 1219:
case 3699:
case 3303:
case 2877:
case 655:
case 3588:
case 2989:
case 1599:
case 1808:
case 740:
case 2177:
case 1692:
case 2195:
case 2794:
case 3905:
case 1005:
case 4055:
case 3399:
case 1146:
case 1857:
case 3883:
case 1269:
case 1388:
case 2082:
case 770:
case 3592:
case 3428:
case 1924:
case 3024:
case 1900:
case 1157:
case 3183:
case 2:
case 950:
case 1880:
case 586:
case 2389:
case 4044:
case 3185:
case 2476:
case 1624:
case 148:
case 3161:
case 3500:
case 1431:
case 4053:
case 1003:
case 1180:
case 516:
case 1992:
case 3524:
case 3885:
case 3891:
case 1527:
case 1906:
case 849:
case 27:
case 765:
case 3627:
case 144:
case 1787:
case 2163:
case 3753:
case 3845:
case 2298:
case 2018:
case 1312:
case 2764:
case 3755:
case 2165:
case 1662:
case 1299:
case 3843:
case 3619:
case 2881:
case 3506:
case 3927:
case 283:
case 438:
case 3369:
case 3288:
case 2865:
case 625:
case 3854:
case 795:
case 1606:
case 1886:
case 213:
case 1750:
case 1519:
case 3143:
case 1268:
case 3398:
case 2471:
case 2431:
case 248:
case 2747:
case 1751:
case 451:
case 1476:
case 2505:
case 1722:
case 607:
case 3429:
case 3249:
case 2880:
case 1389:
case 3190:
case 2846:
case 989:
case 401:
case 2900:
case 3767:
case 2157:
case 3417:
case 1141:
case 1895:
case 2924:
case 2388:
case 2857:
case 1841:
case 2269:
case 3890:
case 2146:
case 919:
case 1794:
case 1195:
case 3501:
case 3797:
case 1181:
case 113:
case 4067:
case 916:
case 2186:
case 183:
case 2299:
case 832:
case 2662:
case 187:
case 3435:
case 3368:
case 3473:
case 3618:
case 1298:
case 1542:
case 244:
case 3433:
case 3001:
case 3896:
case 733:
case 1518:
case 3196:
case 17:
case 2906:
case 1214:
case 3235:
case 3694:
case 595:
case 834:
case 2703:
case 2499:
case 2047:
case 2984:
case 1270:
case 1594:
case 673:
case 2328:
case 677:
case 1230:
case 2547:
case 3067:
case 1967:
case 61:
case 2684:
case 1782:
case 2120:
case 565:
case 3233:
case 224:
case 1498:
case 3994:
case 1997:
case 3878:
case 191:
case 301:
case 2050:
case 1236:
case 449:
case 716:
case 1742:
case 2727:
case 3178:
case 2231:
case 2271:
case 2955:
case 3964:
case 1373:
case 1152:
case 1335:
case 3314:
case 2655:
case 933:
case 2126:
case 2953:
case 2719:
case 3597:
case 351:
case 1852:
case 1121:
case 39:
case 3217:
case 136:
case 3584:
case 537:
case 2522:
case 1705:
case 2094:
case 3331:
case 970:
case 1556:
case 533:
case 1820:
case 89:
case 829:
case 3700:
case 3956:
case 3123:
case 1056:
case 239:
case 1328:
case 2594:
case 3084:
case 2270:
case 3488:
case 2051:
case 1047:
case 1703:
case 750:
case 4062:
case 236:
case 3706:
case 3839:
case 2121:
case 2697:
case 20:
case 3044:
case 2852:
case 1944:
case 3555:
case 3228:
case 2821:
case 2375:
case 1126:
case 432:
case 1087:
case 3987:
case 965:
case 3179:
case 3412:
case 3762:
case 1655:
case 2373:
case 2064:
case 2718:
case 3544:
case 1271:
case 1955:
case 334:
case 25:
case 1231:
case 1653:
case 2333:
case 128:
case 1727:
case 995:
case 1644:
case 2276:
case 2742:
case 4024:
case 1050:
case 1587:
case 2997:
case 291:
case 2463:
case 3491:
case 2378:
case 2959:
case 889:
case 1204:
case 672:
case 1032:
case 3445:
case 3558:
case 1532:
case 247:
case 2481:
case 2130:
case 2465:
case 2114:
case 3454:
case 608:
case 734:
case 3632:
case 3672:
case 3326:
case 2659:
case 1339:
case 3128:
case 2737:
case 300:
case 1323:
case 2441:
case 3279:
case 604:
case 1708:
case 3828:
case 3239:
case 1480:
case 1131:
case 350:
case 3711:
case 3461:
case 2709:
case 2493:
case 2836:
case 2876:
case 3304:
case 1171:
case 3207:
case 465:
case 932:
case 188:
case 2136:
case 1871:
case 1325:
case 654:
case 2176:
case 3774:
case 1830:
case 386:
case 3175:
case 971:
case 3135:
case 3352:
case 2958:
case 1870:
case 1715:
case 3734:
case 3710:
case 2572:
case 3321:
case 3875:
case 1481:
case 1130:
case 669:
case 1814:
case 76:
case 2532:
case 62:
case 3873:
case 699:
case 729:
case 4016:
case 2307:
case 3833:
case 751:
case 2204:
case 2440:
case 2220:
case 3059:
case 1959:
case 3133:
case 1713:
case 214:
case 437:
case 2871:
case 696:
case 2325:
case 3716:
case 3466:
case 3129:
case 2171:
case 1876:
case 3402:
case 3829:
case 1493:
case 1709:
case 2480:
case 2131:
case 2226:
case 2446:
case 4074:
case 389:
case 1495:
case 2708:
case 4034:
case 290:
case 1737:
case 3490:
case 2280:
case 3363:
case 489:
case 3849:
case 3613:
case 1168:
case 3034:
case 3915:
case 419:
case 1513:
case 3010:
case 3266:
case 2345:
case 337:
case 951:
case 870:
case 1610:
case 538:
case 1360:
case 1241:
case 333:
case 1634:
case 3615:
case 2354:
case 1452:
case 1295:
case 1674:
case 2169:
case 99:
case 3913:
case 2246:
case 3677:
case 127:
case 2899:
case 1916:
case 895:
case 3637:
case 2383:
case 1265:
case 1577:
case 3395:
case 4059:
case 3909:
case 1009:
case 926:
case 1537:
case 2911:
case 2286:
case 2611:
case 3393:
case 2361:
case 2404:
case 1302:
case 1616:
case 1366:
case 3937:
case 749:
case 1898:
case 2385:
case 64:
case 3439:
case 1426:
case 1772:
case 1169:
case 2634:
case 3112:
case 2452:
case 2295:
case 1732:
case 602:
case 1343:
case 2515:
case 3285:
case 2868:
case 652:
case 1345:
case 2396:
case 2513:
case 2910:
case 2168:
case 678:
case 2293:
case 3261:
case 2974:
case 1385:
case 3245:
case 3425:
case 2037:
case 2366:
case 370:
case 2616:
case 551:
case 674:
case 4058:
case 1008:
case 529:
case 1240:
case 1361:
case 59:
case 1420:
case 3380:
case 1611:
case 1199:
case 3346:
case 2009:
case 2577:
case 732:
case 3888:
case 3357:
case 1383:
case 2390:
case 2916:
case 2281:
case 3243:
case 3188:
case 1508:
case 762:
case 2215:
case 4079:
case 2902:
case 3061:
case 3646:
case 2093:
case 3583:
case 3980:
case 4039:
case 1103:
case 1557:
case 3085:
case 3723:
case 1683:
case 998:
case 125:
case 420:
case 2041:
case 1580:
case 980:
case 556:
case 3957:
case 4007:
case 1057:
case 968:
case 340:
case 3561:
case 863:
case 2990:
case 2593:
case 867:
case 3725:
case 1661:
case 2213:
case 1311:
case 910:
case 1720:
case 3800:
case 3824:
case 622:
case 2602:
case 3585:
case 203:
case 3707:
case 2960:
case 3591:
case 1827:
case 559:
case 2696:
case 964:
case 2142:
case 1645:
case 207:
case 521:
case 1127:
case 648:
case 3054:
case 3458:
case 2118:
case 2065:
case 257:
case 3162:
case 1208:
case 1040:
case 3940:
case 253:
case 2063:
case 3686:
case 3091:
case 2277:
case 3045:
case 1945:
case 2237:
case 4023:
case 1643:
case 2996:
case 2105:
case 4038:
case 1602:
case 3995:
case 3309:
case 909:
case 481:
case 3693:
case 2685:
case 3502:
case 835:
case 411:
case 2983:
case 1041:
case 1666:
case 2057:
case 617:
case 959:
case 1966:
case 3337:
case 2803:
case 1595:
case 3377:
case 613:
case 1541:
case 2103:
case 2961:
case 921:
case 1902:
case 3695:
case 1215:
case 3681:
case 3801:
case 3096:
case 1237:
case 1660:
case 1277:
case 2945:
case 3963:
case 1374:
case 2472:
case 3560:
case 510:
case 2119:
case 2040:
case 1581:
case 2208:
case 1752:
case 157:
case 1065:
case 1842:
case 1118:
case 1209:
case 2127:
case 3313:
case 3596:
case 3778:
case 397:
case 2645:
case 1818:
case 6:
case 2943:
case 1081:
case 3981:
case 2540:
case 3216:
case 1696:
case 393:
case 2232:
case 1795:
case 2020:
case 3259:
case 661:
case 2925:
case 709:
case 1894:
case 3790:
case 493:
case 3167:
case 1741:
case 2520:
case 2923:
case 3766:
case 3416:
case 2504:
case 467:
case 2625:
case 721:
case 2856:
case 2147:
case 1793:
case 759:
case 65:
case 11:
case 3578:
case 3921:
case 2607:
case 3538:
case 2187:
case 1763:
case 1413:
case 18:
case 1678:
case 2740:
case 2358:
case 1052:
case 3434:
case 1765:
case 2679:
case 1359:
case 2786:
case 3078:
case 1521:
case 3897:
case 177:
case 639:
case 706:
case 1552:
case 4090:
case 3621:
case 2150:
case 3410:
case 173:
case 2526:
case 3604:
case 3884:
case 798:
case 3525:
case 628:
case 2822:
case 3761:
case 1780:
case 4091:
case 541:
case 3620:
case 3785:
case 1625:
case 2122:
case 1504:
case 3184:
case 962:
case 1520:
case 811:
case 1923:
case 435:
case 2851:
case 992:
case 2437:
case 3025:
case 1925:
case 2477:
case 1272:
case 3920:
case 1020:
case 3523:
case 780:
case 1004:
case 4054:
case 768:
case 1232:
case 2194:
case 4083:
case 3539:
case 1150:
case 1526:
case 273:
case 3007:
case 2781:
case 2552:
case 277:
case 2978:
case 2521:
case 1850:
case 1786:
case 3332:
case 624:
case 642:
case 1979:
case 3844:
case 794:
case 2638:
case 28:
case 579:
case 1740:
case 3039:
case 3791:
case 2413:
case 3153:
case 3144:
case 4085:
case 3745:
case 3853:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754841601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,];
var gg_b = "1754841601/";

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
