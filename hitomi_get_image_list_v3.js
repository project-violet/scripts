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
case 862:
case 3741:
case 1085:
case 16:
case 1717:
case 446:
case 2045:
case 2845:
case 3195:
case 578:
case 2466:
case 185:
case 494:
case 1396:
case 1421:
case 1872:
case 2570:
case 2369:
case 3197:
case 2440:
case 3560:
case 3379:
case 581:
case 1074:
case 2309:
case 2960:
case 3953:
case 2047:
case 2847:
case 2900:
case 3803:
case 2935:
case 1718:
case 2873:
case 799:
case 2036:
case 2836:
case 3863:
case 2050:
case 2457:
case 483:
case 3991:
case 221:
case 610:
case 1709:
case 854:
case 190:
case 3122:
case 959:
case 3198:
case 1769:
case 2048:
case 3320:
case 1671:
case 1088:
case 567:
case 1614:
case 675:
case 3455:
case 2929:
case 2122:
case 938:
case 197:
case 2124:
case 2626:
case 3529:
case 3848:
case 1601:
case 3048:
case 2320:
case 3937:
case 1434:
case 1294:
case 1228:
case 1661:
case 1432:
case 2803:
case 3935:
case 369:
case 3317:
case 3836:
case 2863:
case 2063:
case 1341:
case 3050:
case 3457:
case 1954:
case 2991:
case 2535:
case 321:
case 617:
case 4044:
case 1804:
case 879:
case 3369:
case 3440:
case 2560:
case 2379:
case 1062:
case 1802:
case 2500:
case 83:
case 3309:
case 132:
case 3960:
case 2970:
case 4083:
case 1720:
case 803:
case 883:
case 3938:
case 3900:
case 3131:
case 542:
case 447:
case 1225:
case 454:
case 3045:
case 3845:
case 3318:
case 3649:
case 3466:
case 2546:
case 2433:
case 624:
case 3458:
case 713:
case 3096:
case 414:
case 3531:
case 335:
case 3995:
case 2642:
case 1186:
case 753:
case 945:
case 3385:
case 3257:
case 2763:
case 2146:
case 341:
case 2595:
case 820:
case 2160:
case 3153:
case 3387:
case 3255:
case 993:
case 2364:
case 1492:
case 1232:
case 2302:
case 3374:
case 2451:
case 1879:
case 2362:
case 1079:
case 3997:
case 1234:
case 1428:
case 328:
case 1425:
case 690:
case 696:
case 522:
case 2841:
case 1363:
case 3258:
case 1559:
case 3266:
case 657:
case 1081:
case 1678:
case 2135:
case 2276:
case 4013:
case 3745:
case 644:
case 1643:
case 3747:
case 2683:
case 1820:
case 2522:
case 1704:
case 1427:
case 3924:
case 3998:
case 1702:
case 110:
case 984:
case 1764:
case 3598:
case 1916:
case 1299:
case 3683:
case 2747:
case 3522:
case 2240:
case 1815:
case 3137:
case 117:
case 2922:
case 2129:
case 1152:
case 1959:
case 1410:
case 426:
case 1154:
case 420:
case 704:
case 784:
case 2191:
case 697:
case 1350:
case 1630:
case 1373:
case 1817:
case 1017:
case 3135:
case 3276:
case 2745:
case 656:
case 3493:
case 3233:
case 2748:
case 1347:
case 953:
case 3160:
case 827:
case 2387:
case 2170:
case 2255:
case 1605:
case 1009:
case 302:
case 382:
case 2374:
case 3304:
case 1869:
case 1069:
case 228:
case 2896:
case 3644:
case 473:
case 2531:
case 263:
case 1345:
case 1818:
case 1923:
case 1667:
case 2773:
case 2736:
case 3146:
case 241:
case 3595:
case 409:
case 1255:
case 1153:
case 1748:
case 545:
case 2069:
case 1372:
case 3428:
case 3494:
case 3234:
case 3879:
case 3079:
case 224:
case 3492:
case 3232:
case 2009:
case 1531:
case 851:
case 3523:
case 1750:
case 141:
case 1736:
case 1385:
case 2018:
case 3677:
case 2815:
case 2015:
case 1747:
case 2299:
case 3643:
case 3711:
case 1922:
case 3764:
case 771:
case 2774:
case 922:
case 3702:
case 1998:
case 1924:
case 3516:
case 316:
case 2619:
case 2772:
case 3704:
case 2154:
case 2410:
case 4089:
case 708:
case 788:
case 275:
case 672:
case 2152:
case 3303:
case 3881:
case 3081:
case 3559:
case 2336:
case 2656:
case 2221:
case 2350:
case 3363:
case 3154:
case 722:
case 2425:
case 3152:
case 3959:
case 1493:
case 1276:
case 9:
case 2678:
case 3817:
case 2881:
case 2081:
case 3336:
case 2559:
case 3656:
case 3785:
case 3221:
case 519:
case 648:
case 3350:
case 3630:
case 2363:
case 1041:
case 451:
case 1683:
case 2020:
case 3299:
case 669:
case 2711:
case 1598:
case 1524:
case 3774:
case 908:
case 317:
case 3772:
case 2684:
case 1644:
case 1931:
case 1146:
case 1763:
case 3607:
case 3923:
case 891:
case 3018:
case 3605:
case 4001:
case 1311:
case 1160:
case 833:
case 1100:
case 1138:
case 3665:
case 4061:
case 3869:
case 3069:
case 1304:
case 2879:
case 1362:
case 1451:
case 80:
case 4012:
case 2232:
case 1302:
case 3809:
case 3009:
case 232:
case 2064:
case 1500:
case 2002:
case 663:
case 1560:
case 2062:
case 1379:
case 1197:
case 3872:
case 641:
case 99:
case 2227:
case 1970:
case 1953:
case 3087:
case 2811:
case 2123:
case 3717:
case 36:
case 458:
case 3885:
case 1613:
case 3689:
case 2586:
case 385:
case 1546:
case 1195:
case 3769:
case 2779:
case 87:
case 767:
case 2614:
case 411:
case 1537:
case 2292:
case 2432:
case 898:
case 3888:
case 4075:
case 357:
case 2294:
case 2434:
case 1251:
case 1063:
case 3554:
case 1381:
case 1803:
case 960:
case 2159:
case 2952:
case 4084:
case 1991:
case 1050:
case 2552:
case 1850:
case 1036:
case 1836:
case 4067:
case 1873:
case 2554:
case 4007:
case 1935:
case 2718:
case 1591:
case 169:
case 3159:
case 121:
case 1457:
case 3954:
case 1796:
case 397:
case 2769:
case 3612:
case 3779:
case 766:
case 2709:
case 3116:
case 3661:
case 4065:
case 257:
case 1937:
case 3294:
case 1848:
case 1048:
case 1318:
case 4030:
case 2986:
case 1845:
case 4056:
case 1946:
case 2885:
case 4068:
case 1406:
case 2396:
case 2689:
case 1458:
case 3586:
case 2690:
case 778:
case 285:
case 602:
case 1466:
case 781:
case 701:
case 2874:
case 95:
case 2074:
case 3002:
case 3862:
case 2872:
case 2072:
case 1369:
case 1900:
case 1047:
case 3720:
case 942:
case 3376:
case 2660:
case 3333:
case 2366:
case 3670:
case 1273:
case 1757:
case 2306:
case 2358:
case 4022:
case 313:
case 2142:
case 2513:
case 1990:
case 585:
case 3913:
case 2340:
case 1248:
case 3549:
case 19:
case 2646:
case 3094:
case 3828:
case 56:
case 2409:
case 1399:
case 2288:
case 1686:
case 3092:
case 2183:
case 3926:
case 1758:
case 2721:
case 1514:
case 2357:
case 3825:
case 1143:
case 1766:
case 1971:
case 1245:
case 2810:
case 2010:
case 3481:
case 622:
case 160:
case 225:
case 596:
case 2526:
case 3629:
case 166:
case 3420:
case 2272:
case 238:
case 2415:
case 3202:
case 134:
case 2274:
case 972:
case 2039:
case 3211:
case 837:
case 1178:
case 769:
case 1247:
case 1740:
case 1334:
case 2204:
case 338:
case 2262:
case 1652:
case 3274:
case 3039:
case 2264:
case 2211:
case 3355:
case 1168:
case 1108:
case 830:
case 1130:
case 2827:
case 948:
case 1156:
case 2926:
case 556:
case 1901:
case 3721:
case 969:
case 1961:
case 1733:
case 597:
case 1914:
case 3417:
case 1893:
case 2629:
case 1912:
case 1119:
case 167:
case 608:
case 492:
case 688:
case 921:
case 3142:
case 3513:
case 3144:
case 2734:
case 2913:
case 1107:
case 2828:
case 142:
case 3409:
case 84:
case 1590:
case 2892:
case 2376:
case 2653:
case 3366:
case 2670:
case 1105:
case 1165:
case 3638:
case 1263:
case 3600:
case 963:
case 782:
case 1505:
case 69:
case 3021:
case 1975:
case 2281:
case 3217:
case 3710:
case 345:
case 3474:
case 1392:
case 3544:
case 3099:
case 3899:
case 812:
case 2220:
case 2404:
case 2462:
case 3215:
case 1190:
case 2944:
case 1567:
case 393:
case 2411:
case 1984:
case 2942:
case 3487:
case 1507:
case 510:
case 3698:
case 2393:
case 1403:
case 634:
case 1943:
case 3218:
case 1519:
case 1325:
case 2983:
case 4053:
case 1751:
case 219:
case 1978:
case 3209:
case 1556:
case 122:
case 2832:
case 1530:
case 384:
case 82:
case 304:
case 1568:
case 666:
case 2034:
case 1908:
case 1930:
case 1956:
case 3794:
case 3728:
case 4046:
case 319:
case 1055:
case 1855:
case 1968:
case 2488:
case 2209:
case 3832:
case 3032:
case 284:
case 575:
case 3834:
case 2269:
case 667:
case 1919:
case 1112:
case 1450:
case 412:
case 2698:
case 517:
case 2583:
case 2622:
case 2218:
case 4000:
case 2126:
case 3983:
case 1101:
case 2474:
case 3402:
case 1582:
case 1967:
case 1623:
case 741:
case 2899:
case 2472:
case 2113:
case 3220:
case 1907:
case 3404:
case 2542:
case 1584:
case 2215:
case 1840:
case 353:
case 4035:
case 3351:
case 1447:
case 2695:
case 293:
case 3149:
case 982:
case 3411:
case 3942:
case 902:
case 1575:
case 65:
case 728:
case 1445:
case 524:
case 2485:
case 1965:
case 2821:
case 1066:
case 2217:
case 4037:
case 2710:
case 1905:
case 1542:
case 31:
case 1472:
case 1099:
case 2967:
case 2582:
case 1544:
case 2623:
case 3392:
case 541:
case 3977:
case 1695:
case 535:
case 3189:
case 2447:
case 480:
case 3505:
case 400:
case 486:
case 2575:
case 613:
case 855:
case 145:
case 2905:
case 3033:
case 1710:
case 2066:
case 2806:
case 1021:
case 3975:
case 2055:
case 807:
case 3978:
case 2930:
case 3751:
case 4086:
case 208:
case 2578:
case 916:
case 495:
case 3508:
case 184:
case 3530:
case 322:
case 1488:
case 1209:
case 2339:
case 3556:
case 1583:
case 717:
case 271:
case 3463:
case 1698:
case 2450:
case 2473:
case 2919:
case 2112:
case 443:
case 2101:
case 2057:
case 2857:
case 2616:
case 3325:
case 3519:
case 3943:
case 3114:
case 2403:
case 716:
case 371:
case 3919:
case 638:
case 3112:
case 3436:
case 3616:
case 3:
case 2325:
case 2519:
case 2171:
case 2943:
case 3310:
case 455:
case 3855:
case 3968:
case 119:
case 2978:
case 3930:
case 388:
case 308:
case 917:
case 1034:
case 2568:
case 2508:
case 2530:
case 1032:
case 222:
case 3339:
case 2556:
case 2505:
case 674:
case 2565:
case 487:
case 2833:
case 3905:
case 2076:
case 895:
case 3006:
case 3858:
case 2241:
case 153:
case 3584:
case 3040:
case 1727:
case 2328:
case 3967:
case 861:
case 1464:
case 1402:
case 2984:
case 1411:
case 1942:
case 3577:
case 2189:
case 2567:
case 829:
case 843:
case 1734:
case 3182:
case 631:
case 3184:
case 1092:
case 645:
case 1892:
case 1028:
case 870:
case 39:
case 2851:
case 3248:
case 2051:
case 96:
case 3236:
case 3496:
case 3757:
case 3321:
case 2165:
case 3273:
case 2203:
case 1376:
case 905:
case 301:
case 732:
case 2332:
case 159:
case 415:
case 2654:
case 3740:
case 849:
case 2130:
case 2108:
case 3247:
case 3178:
case 957:
case 3245:
case 3766:
case 1025:
case 1926:
case 2571:
case 3561:
case 2441:
case 2119:
case 1629:
case 684:
case 2093:
case 797:
case 360:
case 2893:
case 2914:
case 477:
case 2245:
case 3776:
case 548:
case 2766:
case 2706:
case 1637:
case 744:
case 1721:
case 2514:
case 2758:
case 3571:
case 790:
case 266:
case 3441:
case 2561:
case 3912:
case 3119:
case 470:
case 1526:
case 3093:
case 125:
case 3914:
case 796:
case 1839:
case 3652:
case 1415:
case 1272:
case 3654:
case 3334:
case 2740:
case 3130:
case 950:
case 3108:
case 4023:
case 2178:
case 1355:
case 1287:
case 2250:
case 2175:
case 3263:
case 2496:
case 2236:
case 1306:
case 2321:
case 3165:
case 1418:
case 201:
case 281:
case 423:
case 4059:
case 2990:
case 1513:
case 1142:
case 35:
case 1949:
case 3589:
case 1409:
case 2399:
case 342:
case 2177:
case 3851:
case 2248:
case 3107:
case 1340:
case 933:
case 965:
case 1547:
case 2109:
case 2902:
case 3974:
case 2169:
case 3397:
case 2904:
case 3972:
case 90:
case 98:
case 3564:
case 2572:
case 1870:
case 1484:
case 3987:
case 2442:
case 1853:
case 1261:
case 2118:
case 652:
case 1628:
case 2226:
case 2651:
case 1201:
case 422:
case 991:
case 395:
case 527:
case 3759:
case 1214:
case 2585:
case 207:
case 3324:
case 306:
case 1029:
case 1829:
case 808:
case 4033:
case 1731:
case 3723:
case 871:
case 2117:
case 41:
case 718:
case 1573:
case 2052:
case 1443:
case 1091:
case 8:
case 2854:
case 514:
case 509:
case 1141:
case 1973:
case 2723:
case 4040:
case 2181:
case 1359:
case 3852:
case 3052:
case 1503:
case 3854:
case 3054:
case 3588:
case 1797:
case 387:
case 918:
case 307:
case 2324:
case 2398:
case 286:
case 1408:
case 1289:
case 280:
case 200:
case 2322:
case 1610:
case 4006:
case 2988:
case 4066:
case 12:
case 1037:
case 2086:
case 1945:
case 3651:
case 3331:
case 295:
case 526:
case 2759:
case 408:
case 3585:
case 791:
case 1467:
case 3964:
case 3109:
case 471:
case 2974:
case 112:
case 1798:
case 3169:
case 3587:
case 261:
case 2511:
case 1407:
case 3904:
case 1838:
case 1038:
case 1947:
case 2716:
case 4057:
case 3442:
case 2562:
case 1860:
case 229:
case 243:
case 2360:
case 2579:
case 3633:
case 3353:
case 2449:
case 3187:
case 152:
case 1256:
case 3509:
case 2606:
case 1489:
case 1208:
case 2300:
case 1230:
case 1897:
case 14:
case 842:
case 3413:
case 2164:
case 1895:
case 583:
case 3754:
case 1996:
case 579:
case 3185:
case 2346:
case 1680:
case 1699:
case 1386:
case 2918:
case 2915:
case 1738:
case 2337:
case 2657:
case 2016:
case 1760:
case 2520:
case 1022:
case 249:
case 223:
case 3329:
case 3242:
case 1098:
case 1024:
case 1898:
case 3244:
case 3517:
case 3391:
case 3426:
case 798:
case 164:
case 2859:
case 478:
case 2786:
case 867:
case 2335:
case 3981:
case 1103:
case 1746:
case 1163:
case 739:
case 1265:
case 1354:
case 3581:
case 45:
case 1632:
case 1461:
case 3859:
case 3059:
case 3335:
case 3655:
case 1414:
case 547:
case 62:
case 1275:
case 442:
case 1412:
case 758:
case 1136:
case 97:
case 3915:
case 2920:
case 1148:
case 3816:
case 3016:
case 939:
case 1277:
case 349:
case 2515:
case 2329:
case 2242:
case 998:
case 137:
case 1791:
case 2754:
case 3640:
case 2185:
case 1831:
case 1031:
case 2283:
case 3023:
case 1145:
case 3918:
case 878:
case 2353:
case 2370:
case 2569:
case 3666:
case 3111:
case 1278:
case 3658:
case 1147:
case 3338:
case 3162:
case 4093:
case 2172:
case 2979:
case 711:
case 3102:
case 3909:
case 467:
case 3219:
case 3996:
case 661:
case 2791:
case 3895:
case 3095:
case 459:
case 1752:
case 3735:
case 629:
case 2243:
case 4027:
case 1283:
case 2831:
case 2031:
case 3489:
case 3208:
case 3256:
case 1509:
case 3737:
case 352:
case 2278:
case 1370:
case 1569:
case 1187:
case 3268:
case 1979:
case 1413:
case 762:
case 3097:
case 3471:
case 2461:
case 3541:
case 680:
case 1426:
case 686:
case 1517:
case 2354:
case 4092:
case 2136:
case 558:
case 2150:
case 3163:
case 3746:
case 2275:
case 4094:
case 1981:
case 747:
case 1188:
case 2753:
case 838:
case 3760:
case 940:
case 3267:
case 2148:
case 1920:
case 3700:
case 899:
case 3098:
case 3024:
case 3898:
case 3824:
case 2284:
case 330:
case 994:
case 3022:
case 3822:
case 3753:
case 2760:
case 859:
case 1016:
case 1657:
case 954:
case 2738:
case 337:
case 2024:
case 2824:
case 236:
case 3284:
case 149:
case 123:
case 230:
case 2022:
case 2822:
case 2471:
case 598:
case 1059:
case 2541:
case 264:
case 3401:
case 607:
case 168:
case 794:
case 3354:
case 3173:
case 2265:
case 3941:
case 3150:
case 2746:
case 3275:
case 2103:
case 746:
case 57:
case 1917:
case 1300:
case 2230:
case 2490:
case 655:
case 1658:
case 2489:
case 2208:
case 2256:
case 2621:
case 1449:
case 1666:
case 1164:
case 3729:
case 170:
case 1162:
case 24:
case 1969:
case 783:
case 4039:
case 3791:
case 438:
case 73:
case 2735:
case 2386:
case 3243:
case 1823:
case 3145:
case 3831:
case 1640:
case 3694:
case 3628:
case 2046:
case 1985:
case 2846:
case 50:
case 2323:
case 3692:
case 1886:
case 3261:
case 484:
case 533:
case 3545:
case 3196:
case 720:
case 3475:
case 1972:
case 2407:
case 1397:
case 1511:
case 161:
case 3477:
case 2722:
case 3547:
case 2467:
case 129:
case 143:
case 3053:
case 3484:
case 1562:
case 2860:
case 1504:
case 3070:
case 3870:
case 3482:
case 2000:
case 2800:
case 2838:
case 2035:
case 3903:
case 1723:
case 4080:
case 789:
case 3731:
case 3627:
case 3963:
case 773:
case 3091:
case 3443:
case 2359:
case 3536:
case 1322:
case 3029:
case 431:
case 914:
case 2468:
case 3548:
case 1398:
case 106:
case 2290:
case 2456:
case 2797:
case 1120:
case 2837:
case 22:
case 3625:
case 2478:
case 2029:
case 2829:
case 3289:
case 3290:
case 107:
case 1588:
case 3456:
case 3948:
case 32:
case 989:
case 909:
case 2625:
case 3316:
case 3610:
case 3035:
case 3936:
case 3141:
case 3419:
case 3973:
case 1483:
case 1854:
case 1054:
case 2091:
case 3503:
case 714:
case 2443:
case 649:
case 518:
case 1052:
case 2573:
case 2536:
case 3359:
case 3407:
case 3724:
case 1169:
case 1587:
case 2477:
case 1964:
case 920:
case 2853:
case 3060:
case 3860:
case 2070:
case 3947:
case 3800:
case 3838:
case 3038:
case 155:
case 1651:
case 1331:
case 1226:
case 2628:
case 2694:
case 3046:
case 3846:
case 1118:
case 3323:
case 2261:
case 1585:
case 676:
case 4032:
case 845:
case 2344:
case 3090:
case 3889:
case 3089:
case 3551:
case 2229:
case 1384:
case 1992:
case 2778:
case 943:
case 38:
case 30:
case 3685:
case 2140:
case 1994:
case 3756:
case 1928:
case 1813:
case 3730:
case 1121:
case 4020:
case 3133:
case 251:
case 2611:
case 2743:
case 3235:
case 3674:
case 2431:
case 2662:
case 410:
case 2604:
case 900:
case 980:
case 114:
case 2784:
case 218:
case 906:
case 2782:
case 1927:
case 3424:
case 3200:
case 3707:
case 3767:
case 3422:
case 817:
case 2155:
case 2061:
case 1343:
case 640:
case 3871:
case 3071:
case 1925:
case 3688:
case 2775:
case 3246:
case 2383:
case 646:
case 2801:
case 2001:
case 2157:
case 2993:
case 707:
case 787:
case 3861:
case 1286:
case 2071:
case 52:
case 3775:
case 647:
case 2593:
case 3157:
case 1319:
case 1525:
case 700:
case 780:
case 3012:
case 424:
case 3993:
case 3814:
case 1132:
case 1939:
case 1416:
case 1527:
case 3784:
case 1134:
case 318:
case 907:
case 1330:
case 810:
case 1673:
case 2707:
case 1356:
case 3155:
case 2260:
case 1365:
case 729:
case 743:
case 2176:
case 2133:
case 3611:
case 2687:
case 1305:
case 3664:
case 1423:
case 3602:
case 417:
case 2674:
case 3431:
case 291:
case 795:
case 3344:
case 2090:
case 2889:
case 126:
case 2089:
case 2551:
case 120:
case 3229:
case 3342:
case 1594:
case 1849:
case 1645:
case 1367:
case 28:
case 2685:
case 4017:
case 2237:
case 2756:
case 1307:
case 2730:
case 2940:
case 3313:
case 832:
case 1128:
case 13:
case 2807:
case 1980:
case 2067:
case 2867:
case 1192:
case 179:
case 2349:
case 3470:
case 183:
case 3453:
case 103:
case 3884:
case 2224:
case 2438:
case 2298:
case 1696:
case 3882:
case 3082:
case 770:
case 627:
case 311:
case 3566:
case 2533:
case 490:
case 3679:
case 3712:
case 915:
case 1486:
case 2609:
case 3714:
case 3761:
case 2005:
case 3933:
case 457:
case 3075:
case 1921:
case 2065:
case 2865:
case 3701:
case 3429:
case 140:
case 2068:
case 46:
case 3878:
case 1127:
case 1532:
case 2437:
case 856:
case 485:
case 2790:
case 850:
case 3557:
case 2295:
case 530:
case 2019:
case 723:
case 749:
case 3491:
case 3231:
case 3620:
case 1125:
case 3843:
case 3193:
case 673:
case 1312:
case 968:
case 432:
case 3019:
case 4064:
case 1301:
case 2231:
case 2491:
case 2620:
case 1083:
case 1454:
case 2043:
case 1452:
case 689:
case 2429:
case 339:
case 3955:
case 2681:
case 147:
case 890:
case 3056:
case 1641:
case 1713:
case 3437:
case 1934:
case 844:
case 3790:
case 2555:
case 1139:
case 1932:
case 3669:
case 211:
case 3446:
case 3533:
case 2712:
case 2679:
case 626:
case 2714:
case 497:
case 2976:
case 450:
case 3805:
case 2933:
case 3966:
case 2075:
case 2875:
case 3906:
case 805:
case 885:
case 456:
case 3865:
case 2701:
case 3007:
case 3807:
case 3867:
case 2077:
case 2877:
case 3618:
case 970:
case 3222:
case 3349:
case 2884:
case 1042:
case 3460:
case 3400:
case 3298:
case 976:
case 2082:
case 1580:
case 1714:
case 2521:
case 3259:
case 3486:
case 633:
case 665:
case 1566:
case 1075:
case 60:
case 68:
case 1933:
case 1976:
case 379:
case 1077:
case 3999:
case 3192:
case 3980:
case 3128:
case 952:
case 515:
case 2844:
case 2580:
case 691:
case 94:
case 1884:
case 383:
case 869:
case 2314:
case 964:
case 2452:
case 3125:
case 1843:
case 1043:
case 3223:
case 2110:
case 3371:
case 2454:
case 2083:
case 1231:
case 1491:
case 3532:
case 2641:
case 1681:
case 340:
case 1429:
case 394:
case 2139:
case 2932:
case 936:
case 1030:
case 354:
case 4045:
case 1856:
case 347:
case 17:
case 2534:
case 1617:
case 1955:
case 1068:
case 2749:
case 294:
case 3139:
case 1790:
case 1297:
case 549:
case 618:
case 523:
case 1435:
case 3361:
case 4047:
case 3110:
case 1957:
case 3454:
case 3883:
case 3083:
case 3301:
case 1615:
case 4050:
case 279:
case 651:
case 2999:
case 2192:
case 1067:
case 4073:
case 2216:
case 1867:
case 23:
case 2128:
case 2194:
case 3844:
case 3044:
case 2696:
case 3599:
case 1298:
case 2389:
case 1400:
case 421:
case 3842:
case 3042:
case 1460:
case 283:
case 203:
case 1609:
case 2259:
case 1669:
case 1958:
case 3726:
case 448:
case 1966:
case 1771:
case 2305:
case 1235:
case 1495:
case 3375:
case 3783:
case 2365:
case 712:
case 3254:
case 561:
case 2594:
case 3384:
case 1551:
case 226:
case 1089:
case 595:
case 1090:
case 327:
case 3382:
case 3013:
case 3813:
case 802:
case 1497:
case 1756:
case 2307:
case 3994:
case 18:
case 1685:
case 10:
case 1768:
case 3199:
case 3377:
case 2645:
case 3180:
case 2648:
case 3826:
case 1246:
case 1688:
case 1071:
case 3925:
case 72:
case 2286:
case 2910:
case 3343:
case 586:
case 3510:
case 500:
case 2525:
case 2134:
case 463:
case 2527:
case 2939:
case 289:
case 1767:
case 1422:
case 3539:
case 1707:
case 2356:
case 2636:
case 2673:
case 1200:
case 3663:
case 3927:
case 2308:
case 1238:
case 1782:
case 3527:
case 2742:
case 1784:
case 214:
case 3132:
case 3939:
case 309:
case 3368:
case 2378:
case 1270:
case 3356:
case 3650:
case 92:
case 2663:
case 3308:
case 1801:
case 1157:
case 67:
case 2925:
case 639:
case 3286:
case 1061:
case 1014:
case 1993:
case 1012:
case 402:
case 3525:
case 3319:
case 482:
case 3849:
case 912:
case 3049:
case 1342:
case 2384:
case 326:
case 3592:
case 227:
case 1344:
case 2813:
case 2992:
case 2377:
case 3645:
case 3305:
case 151:
case 1166:
case 863:
case 2783:
case 1106:
case 2121:
case 1604:
case 2254:
case 1431:
case 1291:
case 2252:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753621201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,];
var gg_b = "1753621201/";

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
