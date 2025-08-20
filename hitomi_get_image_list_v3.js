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
case 1431:
case 3998:
case 804:
case 364:
case 3764:
case 2700:
case 577:
case 1848:
case 199:
case 3222:
case 2178:
case 3453:
case 1648:
case 3950:
case 951:
case 877:
case 1951:
case 3079:
case 2284:
case 4035:
case 2417:
case 1307:
case 2772:
case 1537:
case 2960:
case 4017:
case 1366:
case 3705:
case 2435:
case 1073:
case 760:
case 1743:
case 3087:
case 415:
case 3546:
case 3367:
case 2901:
case 2032:
case 1798:
case 1949:
case 2612:
case 1964:
case 1765:
case 87:
case 3699:
case 2167:
case 1750:
case 379:
case 2445:
case 1524:
case 1086:
case 1547:
case 2129:
case 2106:
case 3751:
case 2761:
case 248:
case 1693:
case 383:
case 631:
case 503:
case 1905:
case 1884:
case 408:
case 881:
case 4009:
case 4026:
case 3943:
case 1192:
case 1684:
case 301:
case 3281:
case 1893:
case 581:
case 976:
case 1280:
case 1319:
case 803:
case 3753:
case 2111:
case 120:
case 2895:
case 2695:
case 2097:
case 3311:
case 1731:
case 911:
case 2668:
case 3730:
case 3464:
case 2903:
case 3125:
case 748:
case 1321:
case 2454:
case 1940:
case 675:
case 3658:
case 3941:
case 3890:
case 3320:
case 4054:
case 185:
case 2472:
case 1759:
case 3690:
case 2717:
case 3146:
case 165:
case 4072:
case 3858:
case 2120:
case 2763:
case 1691:
case 2944:
case 2745:
case 2927:
case 1450:
case 1953:
case 3451:
case 2969:
case 929:
case 54:
case 3136:
case 2567:
case 1498:
case 2291:
case 1465:
case 84:
case 1124:
case 2677:
case 2075:
case 2529:
case 2506:
case 2513:
case 2726:
case 2889:
case 946:
case 3439:
case 3557:
case 1268:
case 2689:
case 1071:
case 280:
case 1404:
case 1295:
case 3495:
case 1601:
case 5:
case 1179:
case 1912:
case 2664:
case 617:
case 2552:
case 447:
case 8:
case 3800:
case 3780:
case 2864:
case 146:
case 207:
case 3672:
case 2066:
case 2373:
case 3233:
case 1476:
case 3854:
case 3298:
case 2605:
case 743:
case 855:
case 3562:
case 1251:
case 2984:
case 2805:
case 795:
case 4058:
case 3872:
case 129:
case 555:
case 3922:
case 3250:
case 3186:
case 61:
case 1502:
case 289:
case 1128:
case 232:
case 2386:
case 1980:
case 2948:
case 2651:
case 985:
case 3243:
case 3981:
case 2596:
case 3661:
case 1660:
case 111:
case 1408:
case 1249:
case 1855:
case 2318:
case 920:
case 1655:
case 2019:
case 273:
case 624:
case 2639:
case 1722:
case 340:
case 3861:
case 3241:
case 3480:
case 1644:
case 3983:
case 1627:
case 2830:
case 686:
case 789:
case 1669:
case 70:
case 1481:
case 2152:
case 2234:
case 2010:
case 244:
case 536:
case 1844:
case 3768:
case 2630:
case 1827:
case 2758:
case 3835:
case 1587:
case 190:
case 3817:
case 3162:
case 1776:
case 2203:
case 2790:
case 3617:
case 2216:
case 515:
case 3908:
case 774:
case 3586:
case 2499:
case 3024:
case 1783:
case 396:
case 1528:
case 2082:
case 1794:
case 47:
case 1036:
case 1375:
case 3777:
case 1968:
case 3845:
case 1603:
case 707:
case 403:
case 2196:
case 508:
case 370:
case 2244:
case 1422:
case 461:
case 3609:
case 3626:
case 151:
case 243:
case 1253:
case 1014:
case 3789:
case 3976:
case 1230:
case 3826:
case 3809:
case 1888:
case 3231:
case 1708:
case 2991:
case 3518:
case 3042:
case 1299:
case 3955:
case 2546:
case 1107:
case 2685:
case 1521:
case 822:
case 3960:
case 2705:
case 2904:
case 3463:
case 1961:
case 3417:
case 3772:
case 435:
case 284:
case 2525:
case 4053:
case 123:
case 1356:
case 1444:
case 2430:
case 2933:
case 2764:
case 3880:
case 3700:
case 1881:
case 2378:
case 3238:
case 1701:
case 117:
case 4030:
case 749:
case 3511:
case 263:
case 3409:
case 3357:
case 2739:
case 611:
case 441:
case 4040:
case 2943:
case 2440:
case 201:
case 1755:
case 1123:
case 1760:
case 2157:
case 124:
case 1392:
case 1822:
case 1972:
case 348:
case 3129:
case 2028:
case 3167:
case 11:
case 3812:
case 1416:
case 2536:
case 2899:
case 975:
case 2367:
case 1315:
case 3763:
case 1566:
case 3735:
case 2146:
case 701:
case 1337:
case 3472:
case 1121:
case 994:
case 3717:
case 4005:
case 1909:
case 1926:
case 1876:
case 2658:
case 3400:
case 3903:
case 487:
case 676:
case 3668:
case 2730:
case 1074:
case 3578:
case 779:
case 1401:
case 3097:
case 1769:
case 3325:
case 456:
case 931:
case 1052:
case 3895:
case 157:
case 1945:
case 1727:
case 3868:
case 2753:
case 3111:
case 1935:
case 2070:
case 1096:
case 1460:
case 651:
case 3461:
case 380:
case 360:
case 1523:
case 2439:
case 800:
case 2557:
case 3726:
case 3889:
case 1808:
case 2740:
case 226:
case 325:
case 3075:
case 3529:
case 3506:
case 3336:
case 3513:
case 1716:
case 1290:
case 1182:
case 3291:
case 945:
case 2931:
case 2002:
case 15:
case 1347:
case 409:
case 2136:
case 1258:
case 3969:
case 3927:
case 764:
case 249:
case 1387:
case 1643:
case 3458:
case 1491:
case 1843:
case 2854:
case 770:
case 3373:
case 95:
case 2672:
case 3993:
case 3255:
case 2056:
case 307:
case 2800:
case 1379:
case 1748:
case 592:
case 856:
case 3664:
case 1261:
case 2600:
case 1078:
case 4095:
case 796:
case 1597:
case 2468:
case 3649:
case 3260:
case 637:
case 374:
case 131:
case 240:
case 3023:
case 3019:
case 871:
case 1784:
case 957:
case 2571:
case 3201:
case 1738:
case 571:
case 2661:
case 1200:
case 1793:
case 3839:
case 2489:
case 3596:
case 1328:
case 2981:
case 1898:
case 1132:
case 3651:
case 1833:
case 3948:
case 1850:
case 2712:
case 2477:
case 1633:
case 30:
case 1665:
case 1272:
case 86:
case 998:
case 1575:
case 3851:
case 1698:
case 835:
case 3362:
case 1791:
case 2573:
case 1659:
case 3203:
case 3790:
case 2617:
case 2015:
case 175:
case 422:
case 2817:
case 2162:
case 535:
case 91:
case 2863:
case 1542:
case 128:
case 1011:
case 3010:
case 344:
case 2994:
case 3152:
case 2374:
case 1631:
case 816:
case 3234:
case 1831:
case 3288:
case 3830:
case 3653:
case 1448:
case 516:
case 2480:
case 2352:
case 2983:
case 3991:
case 3840:
case 2231:
case 2789:
case 2976:
case 395:
case 2809:
case 268:
case 1493:
case 1990:
case 2396:
case 541:
case 1841:
case 917:
case 2609:
case 3227:
case 343:
case 3244:
case 2171:
case 288:
case 1484:
case 3640:
case 841:
case 923:
case 3196:
case 2259:
case 2845:
case 252:
case 1302:
case 2777:
case 2412:
case 3082:
case 2586:
case 3499:
case 2024:
case 1574:
case 978:
case 1260:
case 980:
case 2601:
case 174:
case 2179:
case 1649:
case 2912:
case 3597:
case 684:
case 3261:
case 834:
case 3999:
case 1552:
case 2239:
case 1864:
case 246:
case 960:
case 1849:
case 1255:
case 591:
case 1066:
case 1993:
case 2476:
case 345:
case 925:
case 4076:
case 1605:
case 1007:
case 2342:
case 891:
case 1785:
case 3643:
case 1984:
case 1805:
case 1851:
case 2494:
case 3013:
case 3029:
case 3006:
case 394:
case 10:
case 4094:
case 3665:
case 3067:
case 2128:
case 3850:
case 776:
case 132:
case 3633:
case 169:
case 2483:
case 2980:
case 1948:
case 3833:
case 459:
case 572:
case 3898:
case 3132:
case 3328:
case 550:
case 601:
case 2264:
case 3793:
case 3200:
case 2660:
case 3604:
case 790:
case 2249:
case 3985:
case 3804:
case 3784:
case 2860:
case 2057:
case 833:
case 850:
case 1023:
case 1019:
case 331:
case 421:
case 2644:
case 1174:
case 2627:
case 2025:
case 3209:
case 3226:
case 2579:
case 1653:
case 3831:
case 2669:
case 2481:
case 276:
case 3631:
case 2397:
case 2844:
case 2977:
case 1853:
case 2827:
case 1485:
case 1758:
case 290:
case 3245:
case 711:
case 375:
case 3659:
case 1790:
case 1203:
case 1362:
case 1499:
case 2816:
case 2783:
case 2102:
case 2528:
case 1082:
case 3263:
case 2794:
case 2036:
case 649:
case 3302:
case 3532:
case 2968:
case 746:
case 3217:
case 2834:
case 510:
case 1269:
case 2688:
case 3484:
case 2170:
case 3958:
case 3641:
case 251:
case 143:
case 2014:
case 3493:
case 3990:
case 3370:
case 626:
case 810:
case 195:
case 2888:
case 2708:
case 3438:
case 1991:
case 1238:
case 2156:
case 1700:
case 1293:
case 4031:
case 3510:
case 2648:
case 1178:
case 323:
case 237:
case 3427:
case 3469:
case 943:
case 2951:
case 3681:
case 1284:
case 1417:
case 3961:
case 2307:
case 1960:
case 4059:
case 3521:
case 2743:
case 1901:
case 202:
case 720:
case 2949:
case 3416:
case 2964:
case 2765:
case 1167:
case 1812:
case 3582:
case 2524:
case 3285:
case 519:
case 1106:
case 1761:
case 410:
case 3760:
case 3123:
case 2905:
case 3119:
case 2704:
case 2638:
case 3755:
case 3954:
case 765:
case 3622:
case 2280:
case 2319:
case 3727:
case 73:
case 1111:
case 220:
case 357:
case 702:
case 806:
case 366:
case 3052:
case 973:
case 1325:
case 1695:
case 1097:
case 386:
case 434:
case 1578:
case 1668:
case 2289:
case 3074:
case 1400:
case 506:
case 1916:
case 2310:
case 1903:
case 2891:
case 969:
case 491:
case 4043:
case 3926:
case 0:
case 285:
case 3876:
case 2759:
case 3121:
case 3507:
case 3337:
case 1735:
case 989:
case 2691:
case 1944:
case 1745:
case 2382:
case 1927:
case 3324:
case 859:
case 652:
case 4050:
case 3347:
case 3894:
case 3258:
case 737:
case 3182:
case 3694:
case 1291:
case 3716:
case 3703:
case 3290:
case 559:
case 696:
case 1075:
case 1336:
case 1529:
case 2930:
case 1513:
case 3808:
case 907:
case 433:
case 1889:
case 538:
case 3519:
case 2741:
case 2268:
case 2071:
case 178:
case 4004:
case 974:
case 180:
case 2404:
case 838:
case 2295:
case 3734:
case 670:
case 293:
case 1173:
case 949:
case 1654:
case 3342:
case 2843:
case 405:
case 1233:
case 2142:
case 1672:
case 1265:
case 1056:
case 346:
case 3781:
case 1780:
case 2379:
case 2748:
case 1468:
case 3179:
case 231:
case 140:
case 3057:
case 418:
case 648:
case 3655:
case 2804:
case 513:
case 3860:
case 775:
case 3408:
case 311:
case 3249:
case 3660:
case 2604:
case 2738:
case 3570:
case 813:
case 1489:
case 1243:
case 2328:
case 1981:
case 2132:
case 2254:
case 2833:
case 3980:
case 1712:
case 2850:
case 2633:
case 3502:
case 2665:
case 2067:
case 2272:
case 3494:
case 2029:
case 3205:
case 2575:
case 1037:
case 731:
case 1573:
case 2659:
case 3989:
case 3776:
case 275:
case 2245:
case 3587:
case 2020:
case 1835:
case 979:
case 1863:
case 3977:
case 3827:
case 854:
case 3397:
case 3844:
case 1374:
case 983:
case 2631:
case 3481:
case 376:
case 554:
case 2197:
case 794:
case 2226:
case 2448:
case 3579:
case 1480:
case 1241:
case 3644:
case 1352:
case 901:
case 1983:
case 793:
case 1518:
case 3888:
case 1231:
case 3708:
case 2370:
case 1789:
case 458:
case 1809:
case 1826:
case 3230:
case 168:
case 4038:
case 2493:
case 2841:
case 2990:
case 3253:
case 3422:
case 4084:
case 170:
case 984:
case 1171:
case 2641:
case 2484:
case 830:
case 3170:
case 745:
case 2958:
case 680:
case 3834:
case 3688:
case 1845:
case 2532:
case 1777:
case 2302:
case 1412:
case 2235:
case 3995:
case 2263:
case 3794:
case 3528:
case 196:
case 625:
case 439:
case 1047:
case 2175:
case 3783:
case 1645:
case 482:
case 1586:
case 497:
case 996:
case 2299:
case 2166:
case 2107:
case 1685:
case 3743:
case 1087:
case 3515:
case 3073:
case 1904:
case 2961:
case 3537:
case 970:
case 1079:
case 1525:
case 988:
case 2469:
case 3648:
case 1453:
case 223:
case 337:
case 2427:
case 75:
case 2444:
case 1430:
case 2510:
case 1933:
case 607:
case 89:
case 968:
case 1378:
case 2881:
case 2701:
case 217:
case 163:
case 558:
case 4088:
case 3323:
case 1739:
case 3893:
case 453:
case 430:
case 2622:
case 3280:
case 3441:
case 3838:
case 3684:
case 101:
case 1281:
case 1440:
case 2488:
case 2954:
case 2123:
case 3884:
case 224:
case 3704:
case 673:
case 2434:
case 3018:
case 2392:
case 183:
case 2972:
case 3693:
case 689:
case 882:
case 897:
case 60:
case 1751:
case 2285:
case 2582:
case 179:
case 562:
case 3750:
case 786:
case 3765:
case 1536:
case 1313:
case 582:
case 757:
case 862:
case 3949:
case 1367:
case 4003:
case 2315:
case 1294:
case 2566:
case 2676:
case 1146:
case 3277:
case 3062:
case 2337:
case 805:
case 298:
case 3759:
case 2121:
case 1690:
case 724:
case 2926:
case 2876:
case 1890:
case 1941:
case 1283:
case 912:
case 3891:
case 3443:
case 3137:
case 3321:
case 1464:
case 2074:
case 3731:
case 1208:
case 1311:
case 2769:
case 2110:
case 266:
case 940:
case 257:
case 414:
case 2608:
case 1070:
case 413:
case 643:
case 2460:
case 3592:
case 2917:
case 3268:
case 3071:
case 2519:
case 3741:
case 2523:
case 1439:
case 1557:
case 4055:
case 1114:
case 2808:
case 126:
case 3930:
case 2716:
case 2182:
case 1002:
case 2347:
case 2894:
case 2258:
case 1136:
case 1451:
case 3382:
case 2683:
case 3224:
case 1621:
case 2585:
case 1176:
case 3358:
case 1487:
case 2282:
case 3620:
case 3390:
case 3820:
case 2846:
case 3059:
case 423:
case 3580:
case 1810:
case 1479:
case 3168:
case 2044:
case 2027:
case 2625:
case 828:
case 2395:
case 417:
case 2774:
case 254:
case 2975:
case 3902:
case 116:
case 3041:
case 72:
case 1522:
case 230:
case 141:
case 1040:
case 2034:
case 2389:
case 2796:
case 2614:
case 3418:
case 3771:
case 2599:
case 41:
case 64:
case 3177:
case 1246:
case 1428:
case 2016:
case 342:
case 3237:
case 1882:
case 3773:
case 2185:
case 498:
case 1576:
case 1005:
case 1666:
case 22:
case 845:
case 730:
case 2558:
case 3043:
case 1787:
case 2474:
case 187:
case 1181:
case 4074:
case 457:
case 2452:
case 1779:
case 1348:
case 1257:
case 604:
case 156:
case 3928:
case 466:
case 3878:
case 3004:
case 531:
case 3589:
case 1393:
case 1973:
case 1819:
case 3718:
case 661:
case 3471:
case 213:
case 1508:
case 681:
case 2942:
case 1039:
case 3987:
case 2657:
case 2055:
case 2199:
case 3065:
case 3667:
case 3033:
case 2312:
case 372:
case 1402:
case 2207:
case 1051:
case 1583:
case 3829:
case 3806:
case 3786:
case 3112:
case 1728:
case 594:
case 109:
case 3050:
case 3746:
case 1543:
case 909:
case 3202:
case 615:
case 1737:
case 2572:
case 2091:
case 96:
case 898:
case 1715:
case 1914:
case 3505:
case 205:
case 1344:
case 306:
case 1456:
case 2982:
case 2353:
case 3874:
case 3725:
case 971:
case 3130:
case 1271:
case 3153:
case 782:
case 3549:
case 2711:
case 1095:
case 557:
case 1697:
case 636:
case 3270:
case 3564:
case 2330:
case 218:
case 2921:
case 1388:
case 967:
case 1946:
case 3896:
case 431:
case 3326:
case 2297:
case 3140:
case 2561:
case 987:
case 2671:
case 1089:
case 1504:
case 1334:
case 2109:
case 3915:
case 3714:
case 1550:
case 1747:
case 3551:
case 1724:
case 1925:
case 4029:
case 1598:
case 2467:
case 494:
case 1077:
case 3736:
case 2413:
case 2429:
case 1533:
case 1303:
case 1316:
case 718:
case 3372:
case 1143:
case 2673:
case 1559:
case 2563:
case 2535:
case 2172:
case 4020:
case 655:
case 3446:
case 2919:
case 2420:
case 29:
case 1218:
case 523:
case 6:
case 4011:
case 428:
case 2364:
case 817:
case 321:
case 3149:
case 1080:
case 941:
case 517:
case 2100:
case 1792:
case 258:
case 2038:
case 3361:
case 2907:
case 2966:
case 2093:
case 2618:
case 916:
case 2161:
case 3540:
case 2818:
case 3757:
case 1104:
case 705:
case 2339:
case 2526:
case 319:
case 935:
case 1012:
case 2767:
case 1150:
case 1632:
case 2729:
case 2706:
case 3436:
case 51:
case 1832:
case 282:
case 3956:
case 81:
case 1424:
case 2242:
case 1797:
case 2902:
case 3825:
case 3975:
case 981:
case 576:
case 2611:
case 3625:
case 2168:
case 1548:
case 876:
case 903:
case 1615:
case 733:
case 2059:
case 3846:
case 1376:
case 2970:
case 590:
case 1996:
case 1063:
case 97:
case 3282:
case 1837:
case 890:
case 1815:
case 2358:
case 2224:
case 3190:
case 3377:
case 242:
case 3016:
case 43:
case 1847:
case 1974:
case 402:
case 1824:
case 1775:
case 2177:
case 4086:
case 1220:
case 734:
case 1952:
case 3599:
case 2486:
case 2418:
case 2771:
case 1538:
case 1308:
case 791:
case 904:
case 1211:
case 108:
case 3614:
case 3210:
case 3796:
case 3034:
case 4018:
case 551:
case 600:
case 330:
case 353:
case 851:
case 977:
case 1009:
case 2189:
case 2878:
case 742:
case 1:
case 3219:
case 1656:
case 314:
case 420:
case 3452:
case 3380:
case 2292:
case 3932:
case 546:
case 3474:
case 2043:
case 1054:
case 2385:
case 2462:
case 32:
case 529:
case 1229:
case 1213:
case 4062:
case 3590:
case 2112:
case 2867:
case 2806:
case 2813:
case 2786:
case 1732:
case 3207:
case 2629:
case 2606:
case 2033:
case 1475:
case 3266:
case 2667:
case 233:
case 250:
case 327:
case 1892:
case 2256:
case 947:
case 3942:
case 1193:
case 1278:
case 1061:
case 2718:
case 811:
case 1692:
case 1184:
case 4071:
case 2270:
case 520:
case 1296:
case 1710:
case 3478:
case 2549:
case 3711:
case 1331:
case 2947:
case 820:
case 616:
case 2924:
case 2874:
case 3982:
case 3353:
case 2652:
case 719:
case 2335:
case 3275:
case 305:
case 3662:
case 1090:
case 1466:
case 1407:
case 2317:
case 2202:
case 3572:
case 585:
case 1058:
case 3135:
case 429:
case 3163:
case 3862:
case 3554:
case 2094:
case 3413:
case 3406:
case 3429:
case 2736:
case 721:
case 3145:
case 14:
case 955:
case 3467:
case 1911:
case 1116:
case 1103:
case 2083:
case 2345:
case 1782:
case 3126:
case 2915:
case 1274:
case 411:
case 1560:
case 3671:
case 1670:
case 3297:
case 1188:
case 2309:
case 1870:
case 1419:
case 1341:
case 1252:
case 3340:
case 318:
case 4057:
case 3921:
case 2164:
case 3100:
case 3048:
case 692:
case 476:
case 1569:
case 221:
case 2081:
case 1527:
case 2149:
case 1679:
case 2553:
case 1544:
case 656:
case 104:
case 599:
case 908:
case 1929:
case 1906:
case 2530:
case 537:
case 667:
case 3778:
case 1967:
case 3411:
case 3923:
case 3420:
case 3873:
case 1085:
case 1343:
case 2228:
case 2354:
case 3172:
case 1421:
case 3535:
case 3563:
case 1887:
case 3232:
case 2372:
case 53:
case 502:
case 3351:
case 3242:
case 66:
case 397:
case 915:
case 339:
case 3686:
case 802:
case 2436:
case 68:
case 1333:
case 83:
case 3713:
case 1978:
case 17:
case 4036:
case 706:
case 3084:
case 3339:
case 3526:
case 3509:
case 936:
case 2279:
case 1719:
case 3161:
case 2540:
case 103:
case 1588:
case 2139:
case 3618:
case 2414:
case 181:
case 358:
case 1554:
case 3721:
case 2159:
case 1163:
case 2737:
case 3359:
case 3407:
case 2914:
case 1662:
case 105:
case 2344:
case 2327:
case 347:
case 4056:
case 2369:
case 3501:
case 1478:
case 1711:
case 3169:
case 1330:
case 1500:
case 1921:
case 2388:
case 914:
case 1871:
case 1340:
case 2946:
case 3341:
case 3419:
case 1297:
case 3188:
case 2492:
case 3274:
case 3560:
case 2504:
case 1126:
case 3802:
case 2747:
case 849:
case 1467:
case 1145:
case 3602:
case 2565:
case 1406:
case 92:
case 2316:
case 3887:
case 1154:
case 1673:
case 2143:
case 1517:
case 1563:
case 4037:
case 691:
case 1535:
case 1305:
case 2415:
case 2642:
case 2286:
case 3085:
case 1923:
case 2957:
case 1420:
case 19:
case 2301:
case 864:
case 2756:
case 3101:
case 3527:
case 884:
case 3679:
case 953:
case 1100:
case 468:
case 3155:
case 381:
case 1907:
case 1093:
case 650:
case 501:
case 3304:
case 3588:
case 1161:
case 3719:
case 1084:
case 1509:
case 1339:
case 1526:
case 3978:
case 37:
case 3828:
case 452:
case 1729:
case 3333:
case 3503:
case 162:
case 4047:
case 2198:
case 1686:
case 1545:
case 3482:
case 4024:
case 197:
case 2165:
case 879:
case 1585:
case 997:
case 1190:
case 939:
case 315:
case 4087:
case 3837:
case 235:
case 1158:
case 2236:
case 2971:
case 771:
case 3017:
case 2391:
case 1846:
case 76:
case 2810:
case 484:
case 1027:
case 1625:
case 2581:
case 464:
case 1825:
case 958:
case 1774:
case 606:
case 709:
case 78:
case 3797:
case 1814:
case 870:
case 888:
case 401:
case 3009:
case 3584:
case 463:
case 1088:
case 568:
case 1034:
case 1389:
case 2770:
case 3593:
case 483:
case 99:
case 3952:
case 3383:
case 4028:
case 3220:
case 2682:
case 2194:
case 1221:
case 3624:
case 3647:
case 792:
case 2428:
case 787:
case 3974:
case 2183:
case 659:
case 3394:
case 852:
case 1997:
case 2882:
case 1636:
case 1185:
case 2576:
case 3213:
case 2607:
case 3267:
case 2666:
case 12:
case 3742:
case 3000:
case 3148:
case 2064:
case 1001:
case 1932:
case 3497:
case 2049:
case 3856:
case 2181:
case 292:
case 2986:
case 1380:
case 2779:
case 1219:
case 918:
case 2348:
case 3656:
case 114:
case 267:
case 2257:
case 256:
case 2973:
case 3692:
case 2470:
case 4070:
case 113:
case 1942:
case 2039:
case 426:
case 3322:
case 127:
case 1657:
case 26:
case 512:
case 1312:
case 905:
case 2402:
case 3732:
case 2583:
case 449:
case 619:
case 716:
case 209:
case 1270:
case 2296:
case 3697:
case 2127:
case 1549:
case 1153:
case 474:
case 2331:
case 1947:
case 950:
case 3369:
case 3327:
case 247:
case 1652:
case 3344:
case 654:
case 1335:
case 1076:
case 761:
case 1363:
case 2090:
case 3715:
case 3914:
case 703:
case 2407:
case 1202:
case 2058:
case 781:
case 3543:
case 3159:
case 1094:
case 3533:
case 3303:
case 432:
case 3565:
case 3077:
case 3675:
case 24:
case 777:
case 3598:
case 3875:
case 3724:
case 2116:
case 704:
case 2103:
case 991:
case 3747:
case 469:
case 2782:
case 2802:
case 878:
case 1915:
case 880:
case 1714:
case 2274:
case 2560:
case 3141:
case 3089:
case 3504:
case 3334:
case 2670:
case 3492:
case 1937:
case 138:
case 934:
case 1696:
case 1457:
case 1539:
case 2870:
case 2419:
case 1896:
case 2134:
case 2555:
case 860:
case 4023:
case 3388:
case 4019:
case 1164:
case 2569:
case 1081:
case 1553:
case 2544:
case 3756:
case 74:
case 277:
case 2410:
case 2906:
case 910:
case 4010:
case 3301:
case 62:
case 1105:
case 3957:
case 3286:
case 2343:
case 3642:
case 1354:
case 2421:
case 2766:
case 3415:
case 3559:
case 322:
case 2887:
case 2707:
case 2628:
case 3447:
case 3133:
case 2099:
case 3424:
case 4082:
case 2350:
case 1956:
case 3198:
case 2516:
case 2365:
case 2978:
case 27:
case 747:
case 2828:
case 3150:
case 119:
case 261:
case 548:
case 2160:
case 2719:
case 3104:
case 1757:
case 443:
case 3355:
case 203:
case 2588:
case 1139:
case 1414:
case 848:
case 2304:
case 281:
case 495:
case 3792:
case 3610:
case 1902:
case 3053:
case 544:
case 1811:
case 1168:
case 236:
case 2548:
case 1580:
case 2017:
case 1059:
case 3821:
case 1762:
case 1970:
case 919:
case 2376:
case 1820:
case 2637:
case 2996:
case 2837:
case 4042:
case 605:
case 3487:
case 1247:
case 2815:
case 3621:
case 142:
case 3702:
case 7:
case 1215:
case 2847:
case 2394:
case 4032:
case 2974:
case 3183:
case 2045:
case 3428:
case 3682:
case 2952:
case 2383:
case 110:
case 895:
case 1418:
case 1771:
case 2538:
case 2308:
case 3962:
case 2211:
case 208:
case 618:
case 3770:
case 2593:
case 341:
case 3522:
case 2009:
case 2026:
case 921:
case 1041:
case 574:
case 2381:
case 356:
case 2:
case 69:
case 3779:
case 387:
case 3049:
case 2856:
case 392:
case 1568:
case 874:
case 2000:
case 2148:
case 938:
case 134:
case 1595:
case 1180:
case 3807:
case 191:
case 1043:
case 3787:
case 3866:
case 1462:
case 255:
case 2206:
case 1773:
case 1050:
case 3728:
case 1112:
case 662:
case 869:
case 309:
case 1829:
case 1806:
case 1813:
case 1979:
case 1786:
case 1399:
case 3051:
case 2732:
case 569:
case 1613:
case 1606:
case 425:
case 172:
case 2475:
case 639:
case 1065:
case 697:
case 1667:
case 80:
case 682:
case 2892:
case 1256:
case 371:
case 2322:
case 2061:
case 3508:
case 1471:
case 715:
case 3823:
case 1004:
case 1589:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1755691202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,];
var gg_b = "1755691202/";

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
