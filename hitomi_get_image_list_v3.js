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
case 522:
case 584:
case 1219:
case 1206:
case 2763:
case 4036:
case 2389:
case 3464:
case 2273:
case 2432:
case 3880:
case 1915:
case 4029:
case 179:
case 1095:
case 2834:
case 2301:
case 1661:
case 3862:
case 3608:
case 737:
case 646:
case 789:
case 2546:
case 3720:
case 3537:
case 1624:
case 238:
case 1514:
case 2114:
case 2591:
case 1191:
case 1798:
case 1722:
case 4027:
case 353:
case 2175:
case 2525:
case 1575:
case 1217:
case 1064:
case 360:
case 1954:
case 937:
case 3156:
case 2280:
case 3873:
case 2155:
case 623:
case 2388:
case 1218:
case 3681:
case 868:
case 1021:
case 2071:
case 2752:
case 3176:
case 1860:
case 3853:
case 935:
case 1484:
case 3503:
case 3633:
case 3539:
case 3203:
case 3239:
case 3948:
case 3846:
case 197:
case 1069:
case 837:
case 889:
case 3891:
case 2657:
case 1628:
case 3088:
case 653:
case 1255:
case 434:
case 2837:
case 3947:
case 1401:
case 968:
case 3143:
case 2093:
case 1162:
case 1275:
case 1517:
case 2838:
case 1765:
case 1979:
case 835:
case 2929:
case 3534:
case 2658:
case 1627:
case 3105:
case 50:
case 3469:
case 308:
case 2384:
case 1341:
case 3237:
case 151:
case 211:
case 3182:
case 4024:
case 2839:
case 515:
case 2553:
case 394:
case 2659:
case 1978:
case 1957:
case 2992:
case 1488:
case 1396:
case 3238:
case 1794:
case 2410:
case 3245:
case 3949:
case 561:
case 1173:
case 346:
case 2123:
case 1958:
case 1487:
case 2119:
case 1613:
case 517:
case 440:
case 1506:
case 1519:
case 3690:
case 2786:
case 42:
case 1056:
case 4020:
case 3889:
case 1317:
case 3801:
case 2287:
case 1868:
case 1685:
case 2748:
case 3164:
case 855:
case 2414:
case 3736:
case 3713:
case 69:
case 2747:
case 2812:
case 388:
case 58:
case 633:
case 3195:
case 186:
case 2038:
case 3728:
case 2045:
case 2475:
case 2:
case 2893:
case 2289:
case 532:
case 1306:
case 2037:
case 2584:
case 3727:
case 131:
case 3888:
case 3986:
case 1869:
case 891:
case 3911:
case 2749:
case 2455:
case 2196:
case 1596:
case 449:
case 3600:
case 2346:
case 3053:
case 1060:
case 1005:
case 3167:
case 3963:
case 3337:
case 258:
case 1241:
case 1082:
case 1314:
case 780:
case 2683:
case 1189:
case 1709:
case 1716:
case 2417:
case 909:
case 493:
case 1781:
case 2631:
case 3345:
case 3338:
case 2501:
case 2920:
case 3443:
case 1970:
case 3460:
case 1708:
case 791:
case 482:
case 2588:
case 545:
case 3884:
case 827:
case 369:
case 3271:
case 3326:
case 2830:
case 3972:
case 3482:
case 241:
case 709:
case 2650:
case 39:
case 2406:
case 2419:
case 598:
case 547:
case 478:
case 4085:
case 3251:
case 1983:
case 3940:
case 316:
case 2034:
case 1375:
case 3724:
case 2325:
case 1931:
case 957:
case 3080:
case 912:
case 3593:
case 2110:
case 744:
case 2237:
case 311:
case 432:
case 1855:
case 1582:
case 1505:
case 3012:
case 208:
case 1635:
case 367:
case 829:
case 3291:
case 3659:
case 930:
case 1560:
case 3553:
case 2160:
case 2330:
case 3992:
case 3803:
case 707:
case 71:
case 549:
case 1647:
case 365:
case 2001:
case 871:
case 796:
case 1875:
case 3410:
case 1395:
case 705:
case 3123:
case 2089:
case 3573:
case 3927:
case 2467:
case 1276:
case 2226:
case 2935:
case 1412:
case 392:
case 1766:
case 4044:
case 91:
case 2371:
case 2891:
case 164:
case 3678:
case 730:
case 1010:
case 554:
case 1256:
case 2947:
case 1649:
case 2143:
case 907:
case 2604:
case 944:
case 1364:
case 2087:
case 3562:
case 223:
case 3845:
case 3117:
case 3936:
case 3525:
case 113:
case 3387:
case 3175:
case 3051:
case 805:
case 136:
case 1032:
case 3772:
case 2156:
case 1556:
case 445:
case 4049:
case 1823:
case 2873:
case 1243:
case 582:
case 1908:
case 1806:
case 3752:
case 404:
case 3071:
case 1731:
case 2681:
case 1644:
case 1369:
case 2609:
case 3441:
case 3924:
case 844:
case 1907:
case 2539:
case 1139:
case 2633:
case 3740:
case 1783:
case 2176:
case 1126:
case 447:
case 498:
case 2853:
case 578:
case 3273:
case 3432:
case 3763:
case 1750:
case 929:
case 3389:
case 1138:
case 1817:
case 3301:
case 611:
case 1368:
case 667:
case 1742:
case 1096:
case 3030:
case 1770:
case 2944:
case 2421:
case 1260:
case 971:
case 3114:
case 1205:
case 4048:
case 3591:
case 593:
case 859:
case 1137:
case 3674:
case 1916:
case 53:
case 1282:
case 603:
case 269:
case 2271:
case 1841:
case 2460:
case 2405:
case 2339:
case 1569:
case 3650:
case 2303:
case 4086:
case 714:
case 2972:
case 2482:
case 3830:
case 2326:
case 1376:
case 2940:
case 3325:
case 1774:
case 2062:
case 3406:
case 1264:
case 2699:
case 1997:
case 720:
case 2053:
case 2230:
case 3346:
case 3418:
case 3871:
case 3391:
case 839:
case 1672:
case 2698:
case 2622:
case 674:
case 484:
case 2512:
case 55:
case 1112:
case 2337:
case 1006:
case 3417:
case 1640:
case 3683:
case 3589:
case 1023:
case 1434:
case 3744:
case 2168:
case 3631:
case 2345:
case 1295:
case 3920:
case 628:
case 2338:
case 850:
case 3851:
case 1652:
case 2697:
case 1778:
case 4052:
case 3045:
case 2195:
case 2456:
case 658:
case 820:
case 3201:
case 987:
case 3289:
case 3902:
case 143:
case 1810:
case 3:
case 3985:
case 40:
case 3893:
case 1426:
case 2476:
case 1267:
case 1014:
case 417:
case 1382:
case 52:
case 2091:
case 3584:
case 461:
case 814:
case 1403:
case 2665:
case 2530:
case 3455:
case 3749:
case 2600:
case 3353:
case 1994:
case 985:
case 2911:
case 534:
case 2889:
case 750:
case 785:
case 3380:
case 1759:
case 272:
case 2025:
case 177:
case 3735:
case 2334:
case 1151:
case 126:
case 3003:
case 1437:
case 739:
case 2729:
case 4063:
case 3414:
case 2736:
case 1269:
case 2713:
case 3812:
case 288:
case 3288:
case 1055:
case 2571:
case 1171:
case 1900:
case 1257:
case 2292:
case 2946:
case 2848:
case 2011:
case 324:
case 382:
case 1094:
case 3400:
case 1768:
case 818:
case 469:
case 3701:
case 2655:
case 3465:
case 3133:
case 3789:
case 3937:
case 3109:
case 1350:
case 3116:
case 986:
case 1914:
case 310:
case 3085:
case 1625:
case 57:
case 1277:
case 1258:
case 2227:
case 416:
case 2466:
case 433:
case 1515:
case 3829:
case 3656:
case 931:
case 3945:
case 3813:
case 1370:
case 2320:
case 1890:
case 1000:
case 731:
case 2793:
case 1646:
case 3494:
case 1259:
case 1691:
case 127:
case 222:
case 284:
case 3248:
case 3926:
case 3828:
case 3939:
case 1065:
case 176:
case 1574:
case 2524:
case 3903:
case 2174:
case 33:
case 1402:
case 2849:
case 2229:
case 2236:
case 1383:
case 2213:
case 3108:
case 1554:
case 1161:
case 2154:
case 2561:
case 1804:
case 3247:
case 3352:
case 155:
case 2980:
case 2771:
case 1721:
case 3547:
case 2052:
case 1097:
case 1254:
case 180:
case 2261:
case 1917:
case 3190:
case 567:
case 1366:
case 2179:
case 1673:
case 1129:
case 1579:
case 2529:
case 3682:
case 1022:
case 1274:
case 2224:
case 1881:
case 252:
case 3535:
case 63:
case 1653:
case 2159:
case 1559:
case 4046:
case 583:
case 718:
case 1809:
case 1833:
case 3497:
case 1099:
case 3643:
case 3020:
case 2385:
case 1577:
case 1558:
case 3784:
case 2527:
case 3104:
case 2973:
case 682:
case 1923:
case 2483:
case 624:
case 886:
case 2617:
case 472:
case 4025:
case 592:
case 2302:
case 1906:
case 1919:
case 2063:
case 3422:
case 3498:
case 2618:
case 3244:
case 3824:
case 1795:
case 109:
case 831:
case 678:
case 1557:
case 2178:
case 488:
case 1192:
case 2953:
case 354:
case 3762:
case 3348:
case 3272:
case 232:
case 189:
case 137:
case 3024:
case 2641:
case 897:
case 1359:
case 3971:
case 3780:
case 65:
case 2696:
case 3252:
case 446:
case 1566:
case 2313:
case 2166:
case 4089:
case 2415:
case 3820:
case 895:
case 528:
case 1033:
case 3407:
case 1016:
case 1424:
case 2984:
case 3263:
case 979:
case 851:
case 3194:
case 4088:
case 666:
case 2044:
case 3621:
case 1822:
case 1357:
case 1996:
case 1242:
case 3930:
case 2840:
case 2220:
case 1270:
case 921:
case 1760:
case 3753:
case 1705:
case 100:
case 423:
case 2585:
case 1377:
case 2852:
case 2502:
case 2632:
case 2202:
case 3027:
case 2989:
case 2479:
case 1004:
case 1315:
case 453:
case 460:
case 1413:
case 951:
case 2610:
case 1120:
case 2901:
case 962:
case 1570:
case 2049:
case 797:
case 1865:
case 1688:
case 2745:
case 3912:
case 3669:
case 142:
case 247:
case 3286:
case 3036:
case 35:
case 1266:
case 2703:
case 1427:
case 2477:
case 1689:
case 3404:
case 2739:
case 3540:
case 1583:
case 948:
case 1354:
case 2361:
case 2131:
case 2047:
case 3802:
case 1531:
case 3197:
case 3552:
case 1910:
case 2886:
case 751:
case 1492:
case 2457:
case 906:
case 762:
case 640:
case 4084:
case 3122:
case 995:
case 3725:
case 302:
case 2020:
case 2549:
case 3730:
case 2643:
case 843:
case 2497:
case 1452:
case 120:
case 1854:
case 403:
case 2861:
case 3617:
case 14:
case 3177:
case 3385:
case 3527:
case 1504:
case 2104:
case 3483:
case 2386:
case 1233:
case 2422:
case 1209:
case 1216:
case 4039:
case 4026:
case 3063:
case 523:
case 1905:
case 3178:
case 3528:
case 114:
case 254:
case 1874:
case 2244:
case 1281:
case 96:
case 3052:
case 1208:
case 4038:
case 4045:
case 474:
case 684:
case 3470:
case 1815:
case 3980:
case 1147:
case 3179:
case 4:
case 1590:
case 3962:
case 3619:
case 508:
case 3513:
case 3450:
case 352:
case 1135:
case 1365:
case 1148:
case 2605:
case 546:
case 4037:
case 2682:
case 3224:
case 701:
case 2660:
case 956:
case 1411:
case 2494:
case 60:
case 977:
case 2939:
case 1507:
case 2787:
case 2235:
case 322:
case 1398:
case 1322:
case 1878:
case 458:
case 2248:
case 2340:
case 3236:
case 3925:
case 975:
case 293:
case 23:
case 652:
case 617:
case 2827:
case 1858:
case 2352:
case 1956:
case 2108:
case 3561:
case 1638:
case 2400:
case 3848:
case 3011:
case 3292:
case 139:
case 282:
case 224:
case 553:
case 899:
case 3991:
case 1859:
case 775:
case 560:
case 2789:
case 1533:
case 1603:
case 2116:
case 2937:
case 1516:
case 441:
case 3847:
case 3466:
case 2002:
case 4034:
case 278:
case 3712:
case 3320:
case 2938:
case 726:
case 1399:
case 2656:
case 3477:
case 3183:
case 1140:
case 964:
case 2404:
case 3726:
case 2036:
case 2013:
case 25:
case 2552:
case 2885:
case 1152:
case 2197:
case 836:
case 105:
case 1755:
case 1308:
case 2668:
case 3131:
case 3047:
case 4030:
case 3988:
case 3457:
case 3478:
case 3886:
case 144:
case 1059:
case 1612:
case 3035:
case 1775:
case 107:
case 202:
case 2667:
case 3048:
case 2572:
case 1265:
case 1522:
case 1172:
case 2198:
case 2791:
case 4051:
case 3737:
case 1058:
case 1077:
case 130:
case 3989:
case 266:
case 3479:
case 345:
case 890:
case 1447:
case 1866:
case 2746:
case 1693:
case 1599:
case 2211:
case 2028:
case 1294:
case 1381:
case 2344:
case 159:
case 219:
case 4071:
case 516:
case 68:
case 764:
case 2669:
case 1163:
case 347:
case 2563:
case 59:
case 1435:
case 1316:
case 3150:
case 1309:
case 1333:
case 572:
case 2263:
case 1719:
case 1706:
case 781:
case 492:
case 1186:
case 2773:
case 3984:
case 129:
case 3044:
case 3328:
case 2511:
case 1111:
case 2194:
case 38:
case 588:
case 2408:
case 2349:
case 3454:
case 1299:
case 736:
case 698:
case 3840:
case 1995:
case 3632:
case 1015:
case 1304:
case 2664:
case 2272:
case 2433:
case 1565:
case 2348:
case 3641:
case 2409:
case 332:
case 1074:
case 411:
case 2024:
case 467:
case 3863:
case 1850:
case 1444:
case 2100:
case 2971:
case 2780:
case 1630:
case 790:
case 673:
case 1718:
case 465:
case 2252:
case 2061:
case 1054:
case 483:
case 1964:
case 240:
case 3166:
case 3313:
case 3415:
case 1870:
case 1390:
case 3336:
case 3277:
case 1002:
case 2204:
case 285:
case 250:
case 263:
case 691:
case 1945:
case 1813:
case 3370:
case 1836:
case 1938:
case 1249:
case 581:
case 772:
case 1400:
case 3768:
case 2581:
case 1701:
case 3278:
case 3257:
case 239:
case 287:
case 513:
case 2859:
case 1133:
case 1465:
case 1116:
case 3350:
case 1109:
case 788:
case 3383:
case 2290:
case 3485:
case 3402:
case 3279:
case 988:
case 3804:
case 612:
case 1827:
case 1352:
case 2956:
case 2645:
case 3331:
case 2508:
case 3554:
case 2638:
case 816:
case 2411:
case 4060:
case 3646:
case 3259:
case 2710:
case 3000:
case 972:
case 3955:
case 1939:
case 376:
case 3065:
case 655:
case 470:
case 590:
case 1828:
case 1892:
case 2857:
case 2878:
case 418:
case 2976:
case 1248:
case 1926:
case 625:
case 2463:
case 357:
case 2135:
case 3764:
case 2148:
case 1682:
case 3881:
case 888:
case 149:
case 3833:
case 3559:
case 1660:
case 3653:
case 1499:
case 627:
case 355:
case 2943:
case 3420:
case 2031:
case 872:
case 3721:
case 1547:
case 3673:
case 3129:
case 969:
case 3917:
case 3366:
case 1386:
case 391:
case 1498:
case 2982:
case 2216:
case 2905:
case 3192:
case 3578:
case 214:
case 154:
case 1824:
case 2394:
case 2874:
case 2281:
case 2042:
case 3807:
case 1020:
case 2070:
case 4056:
case 1549:
case 2796:
case 733:
case 1497:
case 564:
case 2452:
case 716:
case 3662:
case 3577:
case 3558:
case 1784:
case 2504:
case 1104:
case 3923:
case 3231:
case 2718:
case 3008:
case 2297:
case 1061:
case 335:
case 3899:
case 3379:
case 12:
case 3566:
case 1240:
case 1820:
case 2390:
case 3007:
case 1272:
case 2298:
case 2222:
case 1348:
case 2842:
case 3684:
case 451:
case 1409:
case 2074:
case 389:
case 1024:
case 4067:
case 543:
case 1762:
case 960:
case 2921:
case 1971:
case 1100:
case 3743:
case 2630:
case 953:
case 1349:
case 3461:
case 760:
case 575:
case 3270:
case 2883:
case 495:
case 2995:
case 3102:
case 2831:
case 2015:
case 3705:
case 2651:
case 1664:
case 3185:
case 3377:
case 3358:
case 3250:
case 577:
case 1263:
case 2719:
case 1586:
case 448:
case 497:
case 4069:
case 2723:
case 3033:
case 1407:
case 3424:
case 894:
case 3941:
case 229:
case 2671:
case 3081:
case 808:
case 3242:
case 1930:
case 2594:
case 1194:
case 3688:
case 1211:
case 2078:
case 2057:
case 1028:
case 946:
case 1344:
case 2381:
case 259:
case 4021:
case 342:
case 1669:
case 1912:
case 2163:
case 1563:
case 2309:
case 2316:
case 2448:
case 2967:
case 3315:
case 3413:
case 3687:
case 3004:
case 3429:
case 994:
case 3570:
case 3120:
case 2866:
case 1746:
case 2693:
case 1199:
case 2599:
case 708:
case 923:
case 3428:
case 3492:
case 244:
case 2612:
case 2969:
case 56:
case 2775:
case 102:
case 2307:
case 1667:
case 1572:
case 2522:
case 2265:
case 2172:
case 1122:
case 794:
case 3427:
case 3266:
case 1029:
case 2140:
case 3689:
case 296:
case 1404:
case 3776:
case 15:
case 1552:
case 3910:
case 2597:
case 2152:
case 1197:
case 689:
case 746:
case 637:
case 2755:
case 3354:
case 860:
case 3601:
case 599:
case 853:
case 1802:
case 3050:
case 3905:
case 3982:
case 3233:
case 3216:
case 475:
case 1618:
case 4055:
case 650:
case 3874:
case 2795:
case 595:
case 2807:
case 663:
case 3042:
case 2557:
case 1528:
case 3960:
case 958:
case 3070:
case 1431:
case 2577:
case 1527:
case 1158:
case 1177:
case 639:
case 1483:
case 3504:
case 3854:
case 597:
case 548:
case 2808:
case 2919:
case 2906:
case 34:
case 3732:
case 2098:
case 2274:
case 1844:
case 257:
case 212:
case 3365:
case 3148:
case 2653:
case 1159:
case 758:
case 2833:
case 255:
case 1470:
case 2420:
case 3943:
case 1771:
case 2721:
case 3031:
case 3147:
case 3208:
case 2097:
case 2254:
case 1261:
case 10:
case 2366:
case 1619:
case 1606:
case 1179:
case 1623:
case 2579:
case 1040:
case 1529:
case 4023:
case 521:
case 2279:
case 1229:
case 3290:
case 1236:
case 4006:
case 2383:
case 1213:
case 1925:
case 2485:
case 2331:
case 2554:
case 2161:
case 1154:
case 1561:
case 2804:
case 7:
case 3877:
case 579:
case 2955:
case 3411:
case 1793:
case 841:
case 2646:
case 2259:
case 227:
case 3976:
case 3398:
case 3857:
case 276:
case 2065:
case 2574:
case 1524:
case 1174:
case 350:
case 2767:
case 1712:
case 2625:
case 2258:
case 2277:
case 1115:
case 3204:
case 2515:
case 385:
case 3879:
case 928:
case 2278:
case 2257:
case 1228:
case 2342:
case 339:
case 387:
case 2768:
case 4018:
case 1655:
case 3533:
case 974:
case 3516:
case 1991:
case 3626:
case 2428:
case 1988:
case 87:
case 767:
case 3200:
case 3522:
case 3265:
case 3598:
case 1324:
case 3612:
case 268:
case 1048:
case 2090:
case 570:
case 765:
case 518:
case 31:
case 2266:
case 1703:
case 1477:
case 1183:
case 3140:
case 396:
case 3079:
case 1361:
case 1131:
case 2531:
case 3308:
case 3152:
case 792:
case 359:
case 2688:
case 1738:
case 838:
case 3381:
case 1745:
case 104:
case 671:
case 3294:
case 3435:
case 3309:
case 198:
case 2550:
case 147:
case 3333:
case 2800:
case 1202:
case 3077:
case 3058:
case 1989:
case 1479:
case 2004:
case 413:
case 2315:
case 3714:
case 2436:
case 911:
case 3599:
case 967:
case 1520:
case 145:
case 2570:
case 3883:
case 1840:
case 1220:
case 2270:
case 3995:
case 2760:
case 4010:
case 938:
case 2705:
case 3651:
case 865:
case 3304:
case 2377:
case 2358:
case 2185:
case 3831:
case 883:
case 2102:
case 1632:
case 2782:
case 2033:
case 2009:
case 2016:
case 2424:
case 2941:
case 2250:
case 3186:
case 811:
case 2081:
case 1044:
case 77:
case 329:
case 1328:
case 1872:
case 2357:
case 2242:
case 2008:
case 3054:
case 235:
case 2231:
case 2566:
case 1313:
case 1166:
case 3870:
case 1415:
case 644:
case 1336:
case 2932:
case 3964:
case 531:
case 1329:
case 2899:
case 2379:
case 3717:
case 3842:
case 3565:
case 3298:
case 289:
case 3074:
case 132:
case 237:
case 1641:
case 2684:
case 3500:
case 3921:
case 3444:
case 2359:
case 3630:
case 3850:
case 738:
case 1863:
case 2770:
case 1720:
case 2981:
case 1944:
case 2260:
case 3146:
case 3514:
case 468:
case 2137:
case 2041:
case 1312:
case 2916:
case 3624:
case 1607:
case 321:
case 2933:
case 3843:
case 3223:
case 3219:
case 4090:
case 290:
case 934:
case 3661:
case 2817:
case 1545:
case 651:
case 2368:
case 379:
case 72:
case 740:
case 606:
case 3797:
case 281:
case 3555:
case 92:
case 3021:
case 802:
case 940:
case 1681:
case 1503:
case 1616:
case 2103:
case 3974:
case 2783:
case 550:
case 2126:
case 442:
case 1526:
case 1853:
case 3860:
case 563:
case 734:
case 213:
case 3575:
case 3125:
case 3064:
case 3217:
case 3722:
case 4004:
case 2556:
case 2823:
case 2243:
case 2908:
case 539:
case 2806:
case 766:
case 514:
case 2256:
case 1947:
case 840:
case 2649:
case 395:
case 902:
case 2543:
case 1604:
case 3979:
case 306:
case 2134:
case 1534:
case 3627:
case 3275:
case 123:
case 3162:
case 400:
case 3332:
case 2990:
case 3517:
case 1467:
case 3069:
case 1935:
case 54:
case 348:
case 2412:
case 1203:
case 4033:
case 1239:
case 3255:
case 3959:
case 264:
case 3692:
case 2647:
case 1949:
case 1001:
case 2493:
case 4008:
case 435:
case 621:
case 1245:
case 2875:
case 1825:
case 3636:
case 1690:
case 146:
case 1089:
case 3523:
case 3958:
case 3487:
case 1237:
case 437:
case 489:
case 2855:
case 351:
case 679:
case 3067:
case 2648:
case 2505:
case 1785:
case 3341:
case 2635:
case 834:
case 362:
case 3153:
case 194:
case 3396:
case 3876:
case 3957:
case 3488:
case 702:
case 491:
case 782:
case 2965:
case 1729:
case 2686:
case 3790:
case 3076:
case 2269:
case 1713:
case 3491:
case 849:
case 1694:
case 188:
case 3318:
case 3446:
case 993:
case 2521:
case 2900:
case 2171:
case 3056:
case 778:
case 1889:
case 1293:
case 2343:
case 2759:
case 277:
case 1334:
case 1164:
case 2151:
case 1801:
case 3532:
case 3868:
case 1986:
case 457:
case 2014:
case 412:
case 1888:
case 1212:
case 1091:
case 3541:
case 2777:
case 2758:
case 4022:
case 2403:
case 2305:
case 2130:
case 1600:
case 2994:
case 3869:
case 1911:
case 1046:
case 2778:
case 2757:
case 480:
case 73:
case 455:
case 1887:
case 386:
case 924:
case 3306:
case 2810:
case 2006:
case 507:
case 26:
case 3462:
case 3189:
case 3733:
case 1073:
case 954:
case 2023:
case 3716:
case 3709:
case 878:
case 1345:
case 425:
case 2568:
case 2295:
case 3101:
case 1338:
case 2832:
case 3864:
case 2652:
case 544:
case 1697:
case 4000:
case 3942:
case 1230:
case 505:
case 299:
case 824:
case 3241:
case 476:
case 4065:
case 882:
case 1622:
case 596:
case 2715:
case 3082:
case 427:
case 3005:
case 1512:
case 51:
case 318:
case 686:
case 3983:
case 3473:
case 256:
case 3707:
case 1724:
case 133:
case 19:
case 1699:
case 1952:
case 83:
case 2997:
case 3510:
case 2356:
case 893:
case 3620:
case 1080:
case 2221:
case 1271:
case 1884:
case 1460:
case 2754:
case 3188:
case 1303:
case 1169:
case 2663:
case 2998:
case 2922:
case 1326:
case 2896:
case 2376:
case 1711:
case 3493:
case 1410:
case 183:
case 4054:
case 165:
case 998:
case 947:
case 1573:
case 2523:
case 3904:
case 2173:
case 1123:
case 88:
case 2958:
case 2487:
case 1106:
case 1119:
case 2506:
case 2067:
case 2214:
case 1291:
case 167:
case 262:
case 1012:
case 2341:
case 945:
case 1384:
case 251:
case 1839:
case 1803:
case 773:
case 1659:
case 2978:
case 1246:
case 2488:
case 580:
case 1992:
case 295:
case 973:
case 3649:
case 2180:
case 3010:
case 1225:
case 1562:
case 2275:
case 3990:
case 1936:
case 1117:
case 1838:
case 591:
case 206:
case 3364:
case 1677:
case 4015:
case 1658:
case 3412:
case 832:
case 1657:
case 1678:
case 2628:
case 429:
case 2255:
case 747:
case 1118:
case 636:
case 798:
case 1837:
case 459:
case 381:
case 2882:
case 2218:
case 3731:
case 2797:
case 4057:
case 2805:
case 3576:
case 2860:
case 17:
case 2974:
case 3103:
case 2484:
case 1441:
case 3369:
case 3139:
case 2798:
case 664:
case 430:
case 1262:
case 1387:
case 336:
case 2954:
case 3819:
case 3908:
case 3556:
case 2310:
case 1280:
case 3243:
case 4059:
case 444:
case 3770:
case 525:
case 3096:
case 3471:
case 847:
case 3981:
case 3137:
case 804:
case 3041:
case 138:
case 3367:
case 98:
case 2514:
case 407:
case 1591:
case 527:
case 3750:
case 2219:
case 2206:
case 1763:
case 0:
case 1432:
case 2843:
case 2915:
case 496:
case 2095:
case 279:
case 1834:
case 405:
case 3742:
case 3145:
case 3368:
case 450:
case 1419:
case 542:
case 3264:
case 2983:
case 2473:
case 1325:
case 3774:
case 2043:
case 3193:
case 961:
case 1110:
case 2510:
case 3997:
case 2355:
case 1588:
case 3754:
case 884:
case 3841:
case 3376:
case 141:
case 3998:
case 3663:
case 915:
case 3569:
case 1650:
case 3023:
case 3640:
case 2189:
case 1683:
case 2733:
case 4066:
case 2716:
case 2462:
case 3019:
case 1417:
case 715:
case 1851:
case 3999:
case 3652:
case 3568:
case 3832:
case 2970:
case 2101:
case 1346:
case 2296:
case 717:
case 2950:
case 1871:
case 2821:
case 2241:
case 3715:
case 1141:
case 2184:
case 3777:
case 3305:
case 2704:
case 3382:
case 3426:
case 2869:
case 3994:
case 535:
case 1749:
case 1455:
case 1196:
case 3130:
case 2596:
case 722:
case 1353:
case 3360:
case 784:
case 3268:
case 4031:
case 1201:
case 286:
case 3778:
case 1045:
case 1475:
case 2425:
case 1:
case 1893:
case 1373:
case 1289:
case 589:
case 1666:
case 537:
case 4083:
case 2319:
case 4050:
case 500:
case 1414:
case 1039:
case 375:
case 3055:
case 4042:
case 817:
case 852:
case 1747:
case 3521:
case 2318:
case 1812:
case 656:
case 1288:
case 861:
case 2867:
case 1380:
case 3445:
case 2210:
case 922:
case 326:
case 2317:
case 2602:
case 1287:
case 2685:
case 3075:
case 377:
case 44:
case 3151:
case 815:
case 1748:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754596801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,];
var gg_b = "1754596801/";

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
