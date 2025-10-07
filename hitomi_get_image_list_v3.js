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
case 707:
case 899:
case 1135:
case 704:
case 1994:
case 402:
case 3104:
case 3988:
case 2005:
case 3215:
case 1253:
case 3121:
case 1256:
case 2192:
case 3334:
case 1009:
case 2809:
case 3270:
case 3807:
case 1766:
case 3654:
case 2427:
case 512:
case 3137:
case 3240:
case 55:
case 2178:
case 2985:
case 909:
case 1344:
case 837:
case 3580:
case 2525:
case 834:
case 1761:
case 2164:
case 215:
case 3695:
case 1230:
case 3916:
case 3052:
case 3123:
case 3065:
case 450:
case 3957:
case 884:
case 3145:
case 1844:
case 3175:
case 3882:
case 1962:
case 2281:
case 2576:
case 151:
case 19:
case 118:
case 2505:
case 1190:
case 1871:
case 3900:
case 1452:
case 754:
case 2284:
case 1996:
case 2568:
case 3106:
case 1993:
case 1408:
case 498:
case 3836:
case 757:
case 126:
case 2619:
case 876:
case 3617:
case 1341:
case 3653:
case 1764:
case 3656:
case 743:
case 3749:
case 2747:
case 679:
case 359:
case 3738:
case 3467:
case 3779:
case 4072:
case 1254:
case 3350:
case 1825:
case 3331:
case 2434:
case 1792:
case 2163:
case 2025:
case 231:
case 2166:
case 3651:
case 533:
case 1295:
case 1343:
case 3630:
case 1346:
case 3080:
case 1029:
case 2076:
case 101:
case 2574:
case 2299:
case 2046:
case 728:
case 2544:
case 3850:
case 2043:
case 3101:
case 1846:
case 1567:
case 583:
case 1873:
case 3827:
case 510:
case 2970:
case 1421:
case 465:
case 500:
case 1705:
case 3545:
case 2940:
case 158:
case 2176:
case 2173:
case 433:
case 192:
case 1437:
case 1202:
case 1768:
case 1919:
case 4094:
case 2211:
case 2564:
case 2288:
case 2063:
case 3510:
case 2696:
case 1404:
case 2693:
case 3312:
case 3024:
case 3526:
case 3523:
case 1547:
case 3986:
case 255:
case 1863:
case 3983:
case 948:
case 1861:
case 2:
case 3981:
case 1445:
case 1475:
case 3521:
case 2578:
case 51:
case 598:
case 2539:
case 552:
case 756:
case 3622:
case 877:
case 3006:
case 2141:
case 3003:
case 620:
case 2171:
case 124:
case 1774:
case 2890:
case 2449:
case 1090:
case 3477:
case 3769:
case 2479:
case 1423:
case 2438:
case 2220:
case 3501:
case 1741:
case 721:
case 2174:
case 163:
case 967:
case 3733:
case 288:
case 3349:
case 2347:
case 3379:
case 2377:
case 3338:
case 1047:
case 3984:
case 3524:
case 3026:
case 1972:
case 886:
case 3152:
case 1077:
case 3023:
case 3838:
case 1403:
case 3010:
case 2877:
case 1406:
case 2200:
case 3879:
case 919:
case 2566:
case 2064:
case 3849:
case 689:
case 2561:
case 502:
case 1725:
case 706:
case 1892:
case 2689:
case 769:
case 2412:
case 2039:
case 697:
case 190:
case 1878:
case 1839:
case 2655:
case 1109:
case 2092:
case 3750:
case 364:
case 1424:
case 842:
case 1392:
case 3731:
case 1773:
case 271:
case 1685:
case 3004:
case 1339:
case 1743:
case 714:
case 2190:
case 3033:
case 3686:
case 3745:
case 1505:
case 3036:
case 828:
case 1071:
case 1284:
case 2993:
case 2615:
case 2371:
case 3474:
case 1161:
case 226:
case 1482:
case 1619:
case 3726:
case 1777:
case 1469:
case 2254:
case 3507:
case 3328:
case 2509:
case 1434:
case 2825:
case 2792:
case 3618:
case 3880:
case 725:
case 648:
case 2346:
case 2376:
case 131:
case 1025:
case 1163:
case 2373:
case 1166:
case 413:
case 2748:
case 568:
case 3380:
case 1299:
case 1046:
case 3704:
case 1735:
case 503:
case 1043:
case 3112:
case 320:
case 2325:
case 854:
case 201:
case 1232:
case 2873:
case 181:
case 3569:
case 2846:
case 249:
case 2843:
case 2480:
case 2994:
case 1286:
case 1541:
case 1283:
case 1698:
case 3425:
case 1571:
case 429:
case 3533:
case 3684:
case 4040:
case 1005:
case 1309:
case 3034:
case 787:
case 1642:
case 1672:
case 784:
case 2868:
case 339:
case 4070:
case 3007:
case 1431:
case 2217:
case 2305:
case 2256:
case 1450:
case 432:
case 389:
case 734:
case 3446:
case 2766:
case 1809:
case 2763:
case 193:
case 3473:
case 922:
case 2374:
case 2761:
case 461:
case 1164:
case 3852:
case 3441:
case 547:
case 1367:
case 2251:
case 3138:
case 1959:
case 619:
case 446:
case 2428:
case 544:
case 2067:
case 2844:
case 160:
case 667:
case 3352:
case 3365:
case 2697:
case 3699:
case 3531:
case 2874:
case 47:
case 1573:
case 1074:
case 218:
case 804:
case 1044:
case 1546:
case 1543:
case 3703:
case 814:
case 2364:
case 263:
case 3182:
case 3875:
case 817:
case 444:
case 742:
case 3728:
case 1347:
case 447:
case 3810:
case 2972:
case 2077:
case 666:
case 3049:
case 2864:
case 2047:
case 105:
case 1064:
case 453:
case 1566:
case 138:
case 2403:
case 1694:
case 1877:
case 1335:
case 1689:
case 1039:
case 1412:
case 3780:
case 3304:
case 1048:
case 2892:
case 16:
case 582:
case 3291:
case 2109:
case 1092:
case 4060:
case 290:
case 3837:
case 470:
case 2839:
case 3613:
case 3616:
case 2590:
case 1105:
case 2424:
case 1835:
case 3337:
case 2685:
case 2743:
case 1214:
case 2378:
case 2773:
case 996:
case 2776:
case 171:
case 3620:
case 736:
case 3466:
case 532:
case 3131:
case 2705:
case 1940:
case 3324:
case 513:
case 3012:
case 774:
case 3917:
case 1146:
case 2202:
case 580:
case 3953:
case 3448:
case 2363:
case 258:
case 1176:
case 211:
case 2366:
case 2129:
case 777:
case 1696:
case 1693:
case 3301:
case 1564:
case 1066:
case 1063:
case 1125:
case 468:
case 3294:
case 2547:
case 2866:
case 659:
case 2863:
case 3579:
case 3765:
case 32:
case 2861:
case 3289:
case 1390:
case 3708:
case 1548:
case 1578:
case 979:
case 1539:
case 4085:
case 1171:
case 1257:
case 3464:
case 2744:
case 1216:
case 2535:
case 3806:
case 1479:
case 1220:
case 2426:
case 1438:
case 48:
case 3614:
case 1449:
case 485:
case 34:
case 2798:
case 518:
case 551:
case 3462:
case 3455:
case 2772:
case 4047:
case 244:
case 2893:
case 3588:
case 3118:
case 376:
case 1413:
case 3928:
case 1238:
case 1666:
case 2223:
case 859:
case 2971:
case 3754:
case 408:
case 1594:
case 2941:
case 1093:
case 325:
case 1589:
case 1119:
case 2946:
case 112:
case 2943:
case 2458:
case 976:
case 2221:
case 1929:
case 2973:
case 15:
case 2976:
case 3795:
case 2140:
case 2402:
case 2237:
case 3239:
case 3822:
case 925:
case 3248:
case 1562:
case 2170:
case 1797:
case 3516:
case 1488:
case 3557:
case 490:
case 2559:
case 2585:
case 3980:
case 1860:
case 2925:
case 614:
case 3199:
case 987:
case 110:
case 3491:
case 1715:
case 2394:
case 2422:
case 268:
case 1094:
case 794:
case 3358:
case 2719:
case 866:
case 3717:
case 1664:
case 3756:
case 411:
case 1414:
case 3649:
case 3302:
case 669:
case 1770:
case 2894:
case 3679:
case 606:
case 3263:
case 3261:
case 1062:
case 1055:
case 575:
case 4090:
case 337:
case 1648:
case 424:
case 3751:
case 10:
case 1591:
case 1089:
case 3730:
case 1639:
case 23:
case 387:
case 3908:
case 384:
case 999:
case 3493:
case 2085:
case 739:
case 2389:
case 3387:
case 2635:
case 3965:
case 1885:
case 3057:
case 1142:
case 3013:
case 1400:
case 3016:
case 2203:
case 3514:
case 1072:
case 3923:
case 3271:
case 1418:
case 1977:
case 3084:
case 475:
case 3586:
case 2898:
case 336:
case 2451:
case 3120:
case 2964:
case 2842:
case 1098:
case 3910:
case 2872:
case 524:
case 1668:
case 1236:
case 2185:
case 198:
case 1189:
case 1162:
case 2570:
case 3975:
case 3607:
case 3945:
case 2609:
case 1481:
case 2540:
case 2280:
case 1397:
case 616:
case 3518:
case 230:
case 819:
case 3895:
case 3722:
case 2978:
case 511:
case 3419:
case 3032:
case 280:
case 3682:
case 1250:
case 796:
case 213:
case 2453:
case 936:
case 864:
case 2097:
case 3243:
case 2992:
case 3921:
case 607:
case 2667:
case 1641:
case 3317:
case 3356:
case 1671:
case 3086:
case 3268:
case 3636:
case 1542:
case 3702:
case 4009:
case 2495:
case 2160:
case 1370:
case 3853:
case 590:
case 2040:
case 2070:
case 3901:
case 1315:
case 2794:
case 1019:
case 229:
case 3498:
case 49:
case 27:
case 779:
case 3906:
case 1193:
case 1196:
case 940:
case 3472:
case 3442:
case 3100:
case 1990:
case 1484:
case 3650:
case 657:
case 150:
case 1759:
case 2597:
case 3599:
case 3244:
case 3631:
case 377:
case 654:
case 1269:
case 2961:
case 261:
case 563:
case 3330:
case 636:
case 3388:
case 210:
case 3675:
case 3786:
case 3907:
case 3645:
case 1201:
case 283:
case 3783:
case 168:
case 4063:
case 1422:
case 839:
case 4066:
case 3811:
case 3058:
case 233:
case 916:
case 531:
case 3888:
case 686:
case 1968:
case 3460:
case 2770:
case 1677:
case 3623:
case 1905:
case 3195:
case 2740:
case 889:
case 3316:
case 3313:
case 2967:
case 2359:
case 3718:
case 3621:
case 1944:
case 897:
case 1855:
case 3637:
case 1862:
case 3320:
case 3154:
case 3522:
case 20:
case 3604:
case 2859:
case 3290:
case 3813:
case 3816:
case 307:
case 3820:
case 304:
case 1560:
case 1393:
case 954:
case 1396:
case 1487:
case 438:
case 4064:
case 957:
case 3784:
case 3300:
case 560:
case 3502:
case 1742:
case 1772:
case 147:
case 2416:
case 1210:
case 3933:
case 943:
case 3936:
case 1896:
case 144:
case 1893:
case 3247:
case 3130:
case 2093:
case 2238:
case 2666:
case 3151:
case 1226:
case 2663:
case 1223:
case 343:
case 2929:
case 3927:
case 471:
case 25:
case 291:
case 3153:
case 2589:
case 759:
case 3117:
case 3587:
case 3950:
case 1140:
case 3314:
case 1237:
case 2488:
case 677:
case 1060:
case 820:
case 4092:
case 1204:
case 357:
case 1690:
case 4048:
case 1115:
case 928:
case 1966:
case 2641:
case 1319:
case 571:
case 132:
case 1160:
case 2572:
case 2340:
case 3711:
case 3628:
case 1495:
case 2542:
case 1070:
case 1819:
case 676:
case 356:
case 4005:
case 3122:
case 3056:
case 202:
case 2207:
case 4068:
case 2315:
case 2019:
case 56:
case 2191:
case 2193:
case 538:
case 4074:
case 1252:
case 956:
case 2484:
case 460:
case 1762:
case 505:
case 1597:
case 415:
case 2282:
case 3716:
case 146:
case 250:
case 588:
case 3318:
case 2643:
case 845:
case 1961:
case 3881:
case 1454:
case 2605:
case 3949:
case 1898:
case 195:
case 699:
case 2042:
case 3938:
case 2072:
case 3979:
case 314:
case 2233:
case 1872:
case 1185:
case 462:
case 1228:
case 896:
case 2236:
case 1451:
case 767:
case 1796:
case 252:
case 719:
case 1793:
case 2519:
case 2189:
case 3187:
case 21:
case 4071:
case 1398:
case 3556:
case 1342:
case 3700:
case 1372:
case 3652:
case 3665:
case 481:
case 3095:
case 634:
case 2397:
case 3399:
case 2486:
case 4076:
case 3608:
case 3551:
case 4043:
case 3530:
case 969:
case 3332:
case 3899:
case 113:
case 4025:
case 684:
case 1453:
case 1948:
case 2644:
case 180:
case 687:
case 1939:
case 3158:
case 914:
case 200:
case 2227:
case 321:
case 2760:
case 1097:
case 3404:
case 1510:
case 499:
case 2579:
case 2538:
case 1526:
case 1024:
case 2600:
case 4011:
case 2324:
case 123:
case 4088:
case 1812:
case 761:
case 2492:
case 1545:
case 3705:
case 2131:
case 2127:
case 746:
case 2956:
case 542:
case 311:
case 358:
case 2448:
case 2917:
case 2478:
case 392:
case 2439:
case 2012:
case 1001:
case 3535:
case 327:
case 1782:
case 1006:
case 1504:
case 1259:
case 2951:
case 3361:
case 3774:
case 2614:
case 2133:
case 245:
case 1285:
case 1128:
case 911:
case 2136:
case 732:
case 3426:
case 2803:
case 1769:
case 1918:
case 3423:
case 2806:
case 681:
case 4013:
case 3445:
case 729:
case 1981:
case 22:
case 2765:
case 3475:
case 2306:
case 1622:
case 4020:
case 2345:
case 2293:
case 852:
case 3047:
case 1490:
case 2296:
case 1152:
case 2079:
case 1165:
case 2810:
case 1026:
case 3406:
case 2823:
case 1838:
case 1010:
case 44:
case 1108:
case 2310:
case 1658:
case 425:
case 2182:
case 3741:
case 1501:
case 3771:
case 308:
case 1349:
case 2611:
case 1733:
case 1045:
case 296:
case 2169:
case 3659:
case 2321:
case 2804:
case 164:
case 1731:
case 963:
case 660:
case 167:
case 2616:
case 800:
case 1727:
case 3773:
case 3035:
case 3743:
case 1503:
case 3685:
case 2337:
case 3339:
case 1506:
case 3746:
case 2304:
case 3401:
case 3222:
case 2837:
case 615:
case 985:
case 540:
case 4014:
case 833:
case 1121:
case 3256:
case 2724:
case 109:
case 2219:
case 1911:
case 3305:
case 222:
case 3009:
case 4083:
case 166:
case 1654:
case 3763:
case 1807:
case 3766:
case 1240:
case 3368:
case 2443:
case 2958:
case 289:
case 810:
case 3480:
case 1712:
case 883:
case 1988:
case 688:
case 3868:
case 440:
case 1528:
case 1307:
case 1215:
case 2034:
case 2536:
case 99:
case 2533:
case 2684:
case 2531:
case 1145:
case 768:
case 1882:
case 2365:
case 2352:
case 3844:
case 2550:
case 2069:
case 1175:
case 2082:
case 671:
case 3989:
case 2987:
case 1869:
case 54:
case 39:
case 2852:
case 2865:
case 66:
case 1382:
case 1008:
case 3761:
case 2149:
case 4081:
case 297:
case 1916:
case 1695:
case 477:
case 3230:
case 2138:
case 1126:
case 3177:
case 1065:
case 1123:
case 576:
case 1656:
case 2474:
case 1653:
case 534:
case 4084:
case 375:
case 3509:
case 436:
case 2723:
case 2036:
case 2683:
case 1900:
case 2033:
case 3190:
case 2775:
case 3465:
case 3841:
case 587:
case 3615:
case 2242:
case 949:
case 1106:
case 1103:
case 1836:
case 3408:
case 1833:
case 2922:
case 3325:
case 220:
case 2027:
case 2112:
case 1101:
case 2380:
case 1850:
case 2569:
case 1409:
case 753:
case 2031:
case 2681:
case 6:
case 2880:
case 2721:
case 1552:
case 85:
case 1914:
case 3792:
case 1331:
case 3825:
case 975:
case 1651:
case 744:
case 1080:
case 3295:
case 442:
case 1079:
case 428:
case 1688:
case 2524:
case 1810:
case 1293:
case 96:
case 2984:
case 2490:
case 1049:
case 3566:
case 3847:
case 3064:
case 2108:
case 1823:
case 3200:
case 2010:
case 2838:
case 1954:
case 1461:
case 3144:
case 895:
case 1512:
case 700:
case 1169:
case 2338:
case 2075:
case 3377:
case 1323:
case 388:
case 267:
case 1616:
case 2731:
case 3105:
case 1613:
case 1995:
case 813:
case 264:
case 2503:
case 3168:
case 651:
case 69:
case 2506:
case 1620:
case 371:
case 443:
case 988:
case 4022:
case 1821:
case 2687:
case 2932:
case 905:
case 36:
case 830:
case 938:
case 3662:
case 1837:
case 219:
case 2021:
case 556:
case 752:
case 3693:
case 4058:
case 3915:
case 1824:
case 2510:
case 2180:
case 3125:
case 3288:
case 9:
case 3066:
case 2983:
case 1600:
case 355:
case 1549:
case 2707:
case 2523:
case 179:
case 2526:
case 675:
case 2734:
case 2545:
case 832:
case 1150:
case 2575:
case 223:
case 1801:
case 1478:
case 2001:
case 1439:
case 1012:
case 3143:
case 1956:
case 3173:
case 1953:
case 3890:
case 1951:
case 1464:
case 2003:
case 3216:
case 1930:
case 601:
case 2504:
case 1803:
case 3438:
case 861:
case 2477:
case 2769:
case 3449:
case 1133:
case 514:
case 2285:
case 404:
case 1752:
case 2521:
case 506:
case 87:
case 1765:
case 407:
case 569:
case 2981:
case 1289:
case 3:
case 3548:
case 955:
case 1708:
case 2622:
case 3061:
case 2537:
case 1306:
case 3691:
case 1303:
case 3161:
case 1474:
case 844:
case 2617:
case 3482:
case 1710:
case 3469:
case 2467:
case 712:
case 2779:
case 2738:
case 414:
case 259:
case 2333:
case 1328:
case 931:
case 2749:
case 469:
case 1298:
case 1775:
case 853:
case 1683:
case 2900:
case 2028:
case 1033:
case 1686:
case 3505:
case 1745:
case 2836:
case 981:
case 692:
case 1828:
case 3071:
case 378:
case 2833:
case 1272:
case 2103:
case 3735:
case 1582:
case 1112:
case 2297:
case 3046:
case 1704:
case 1380:
case 2831:
case 1027:
case 120:
case 3073:
case 627:
case 2409:
case 4095:
case 3232:
case 978:
case 1569:
case 3434:
case 2124:
case 2350:
case 1721:
case 2552:
case 1737:
case 2630:
case 2327:
case 3166:
case 331:
case 3163:
case 70:
case 1007:
case 3431:
case 3192:
case 2334:
case 209:
case 2240:
case 2137:
case 3139:
case 189:
case 3427:
case 1473:
case 2429:
case 393:
case 2270:
case 241:
case 3283:
case 608:
case 3068:
case 3286:
case 4017:
case 1701:
case 3541:
case 4053:
case 2834:
case 3698:
case 3571:
case 3642:
case 456:
case 1034:
case 2307:
case 2215:
case 1533:
case 3005:
case 139:
case 868:
case 803:
case 83:
case 1365:
case 528:
case 3576:
case 783:
case 1527:
case 3573:
case 1703:
case 1082:
case 3543:
case 2869:
case 3281:
case 3546:
case 3044:
case 1706:
case 2920:
case 2008:
case 3218:
case 3525:
case 1471:
case 2110:
case 1441:
case 88:
case 2382:
case 3367:
case 2369:
case 1179:
case 2123:
case 194:
case 3433:
case 1149:
case 2916:
case 3436:
case 2695:
case 315:
case 2556:
case 672:
case 398:
case 31:
case 548:
case 2187:
case 3519:
case 3189:
case 352:
case 1975:
case 3162:
case 3481:
case 1854:
case 2700:
case 2384:
case 76:
case 1945:
case 206:
case 1607:
case 214:
case 2979:
case 459:
case 3418:
case 1271:
case 863:
case 3072:
case 1926:
case 2938:
case 1634:
case 3042:
case 1583:
case 1586:
case 1116:
case 1084:
case 2949:
case 3947:
case 1241:
case 3605:
case 3098:
case 1120:
case 1354:
case 3668:
case 3233:
case 900:
case 1682:
case 142:
case 2158:
case 3644:
case 1419:
case 788:
case 2899:
case 523:
case 2714:
case 1111:
case 1581:
case 1099:
case 3760:
case 1276:
case 1921:
case 3227:
case 300:
case 2229:
case 2399:
case 3483:
case 998:
case 2095:
case 2665:
case 952:
case 68:
case 1518:
case 1225:
case 2652:
case 2530:
case 1904:
case 1722:
case 2608:
case 1895:
case 1856:
case 644:
case 2383:
case 3191:
case 3315:
case 3870:
case 2912:
case 2056:
case 2053:
case 3234:
case 653:
case 950:
case 1758:
case 3641:
case 1205:
case 2883:
case 1353:
case 441:
case 1083:
case 1636:
case 892:
case 1268:
case 1633:
case 1584:
case 3340:
case 811:
case 3572:
case 2318:
case 1274:
case 4052:
case 1631:
case 177:
case 973:
case 1244:
case 3269:
case 2881:
case 4008:
case 3646:
case 1532:
case 1498:
case 3625:
case 3196:
case 2030:
case 2818:
case 1787:
case 1472:
case 1851:
case 1442:
case 1588:
case 4075:
case 2936:
case 95:
case 682:
case 826:
case 1928:
case 731:
case 3416:
case 3279:
case 1754:
case 3663:
case 3420:
case 3666:
case 3238:
case 3093:
case 629:
case 125:
case 3594:
case 875:
case 781:
case 14:
case 632:
case 1489:
case 1612:
case 4026:
case 1462:
case 4023:
case 1181:
case 1511:
case 0:
case 1186:
case 1516:
case 2235:
case 2799:
case 1183:
case 778:
case 1513:
case 254:
case 646:
case 3488:
case 419:
case 1494:
case 2603:
case 2606:
case 4037:
case 661:
case 1520:
case 849:
case 1292:
case 2117:
case 2587:
case 67:
case 3589:
case 391:
case 2156:
case 2927:
case 3661:
case 1239:
case 467:
case 3411:
case 1795:
case 2314:
case 464:
case 1248:
case 3555:
case 2950:
case 566:
case 762:
case 3593:
case 1358:
case 1717:
case 2888:
case 3596:
case 3094:
case 2610:
case 1756:
case 1753:
case 3740:
case 1500:
case 1302:
case 1649:
case 1263:
case 1088:
case 3770:
case 2626:
case 1011:
case 1199:
case 2002:
case 383:
case 2645:
case 3909:
case 2786:
case 2388:
case 695:
case 1491:
case 760:
case 2811:
case 2816:
case 1908:
case 2813:
case 3198:
case 2290:
case 910:
case 3859:
case 1387:
case 1057:
case 1965:
case 1952:
case 1184:
case 2820:
case 1016:
case 1013:
case 3400:
case 2781:
case 3062:
case 134:
case 3055:
case 3359:
case 3967:
case 2357:
case 1261:
case 216:
case 793:
case 559:
case 137:
case 630:
case 3648:
case 30:
case 2637:
case 4006:
case 3678:
case 1730:
case 240:
case 1788:
case 3070:
case 382:
case 439:
case 1386:
case 1497:
case 1383:
case 156:
case 4034:
case 329:
case 1053:
case 3794:
case 2901:
case 3966:
case 489:
case 3015:
case 2317:
case 2205:
case 2758:
case 3319:
case 727:
case 3160:
case 1628:
case 3495:
case 422:
case 4007:
case 2083:
case 2702:
case 961:
case 724:
case 277:
case 1716:
case 346:
case 2631:
case 2244:
case 758:
case 711:
case 2599:
case 2081:
case 932:
case 494:
case 1318:
case 596:
case 2650:
case 2330:
case 2532:
case 1720:
case 3629:
case 2627:
case 1881:
case 1680:
case 8:
case 3789:
case 1030:
case 65:
case 2498:
case 612:
case 1381:
case 929:
case 3208:
case 3762:
case 3755:
case 2018:
case 2830:
case 1187:
case 1517:
case 3796:
case 1054:
case 286:
case 1700:
case 2854:
case 2607:
case 4036:
case 3372:
case 169:
case 665:
case 3898:
case 610:
case 2116:
case 2586:
case 117:
case 913:
case 1938:
case 683:
case 2157:
case 980:
case 545:
case 3228:
case 3515:
case 3185:
case 888:
case 3451:
case 3948:
case 995:
case 2682:
case 2937:
case 3978:
case 1470:
case 2243:
case 2395:
case 1440:
case 708:
case 2246:
case 2099:
case 2581:
case 2111:
case 330:
case 2188:
case 2225:
case 1665:
case 86:
case 3280:
case 1095:
case 1608:
case 420:
case 2895:
case 3791:
case 1415:
case 2904:
case 2756:
case 652:
case 98:
case 4012:
case 1888:
case 61:
case 3968:
case 3719:
case 2263:
case 2679:
case 1460:
case 3894:
case 3647:
case 1311:
case 3905:
case 2302:
case 2649:
case 1675:
case 299:
case 79:
case 1783:
case 751:
case 2011:
case 93:
case 303:
case 3422:
case 368:
case 2132:
case 520:
case 3635:
case 2387:
case 2496:
case 3389:
case 284:
case 2020:
case 287:
case 860:
case 1820:
case 2016:
case 600:
case 968:
case 3560:
case 3059:
case 2057:
case 2952:
case 3362:
case 3355:
case 1313:
case 445:
case 116:
case 237:
case 1316:
case 1357:
case 2261:
case 1621:
case 2887:
case 1982:
case 3855:
case 3862:
case 1637:
case 3944:
case 1087:
case 1320:
case 276:
case 347:
case 2588:
case 3893:
case 344:
case 1459:
case 3896:
case 1624:
case 1485:
case 1247:
case 3941:
case 1277:
case 2754:
case 3971:
case 3223:
case 1151:
case 970:
case 1558:
case 673:
case 2612:
case 3393:
case 3245:
case 353:
case 3742:
case 1502:
case 2511:
case 1300:
case 878:
case 2455:
case 3559:
case 154:
case 370:
case 539:
case 3690:
case 2186:
case 2516:
case 650:
case 2014:
case 2183:
case 3204:
case 2520:
case 3925:
case 2322:
case 3391:
case 1603:
case 3115:
case 881:
case 1606:
case 1022:
case 775:
case 1153:
case 1156:
case 589:
case 1927:
case 3458:
case 3946:
case 1117:
case 831:
case 3170:
case 726:
case 1950:
case 2822:
case 3237:
case 1314:
case 3402:
case 3140:
case 2278:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759863602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,];
var gg_b = "1759863602/";

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
