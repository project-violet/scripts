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
case 353:
case 204:
case 2088:
case 3580:
case 738:
case 2237:
case 1618:
case 3614:
case 2562:
case 770:
case 4071:
case 1162:
case 3101:
case 529:
case 1016:
case 1743:
case 1850:
case 2802:
case 2383:
case 2703:
case 2094:
case 854:
case 1216:
case 671:
case 1842:
case 509:
case 2190:
case 3798:
case 931:
case 1003:
case 498:
case 1794:
case 14:
case 867:
case 2927:
case 3099:
case 3992:
case 917:
case 2043:
case 2970:
case 1835:
case 2921:
case 3886:
case 1203:
case 1275:
case 445:
case 270:
case 3677:
case 1951:
case 2619:
case 1896:
case 3671:
case 1438:
case 1731:
case 1788:
case 1481:
case 3620:
case 3784:
case 581:
case 3065:
case 2348:
case 2330:
case 1957:
case 4014:
case 2814:
case 1982:
case 2586:
case 376:
case 2758:
case 3460:
case 1045:
case 536:
case 2059:
case 4033:
case 1186:
case 135:
case 2833:
case 2952:
case 3135:
case 2073:
case 43:
case 2259:
case 2938:
case 2981:
case 1245:
case 3826:
case 2940:
case 3514:
case 1427:
case 2662:
case 1229:
case 727:
case 2118:
case 29:
case 3724:
case 1728:
case 1421:
case 232:
case 1029:
case 423:
case 3571:
case 1656:
case 487:
case 2028:
case 3862:
case 1801:
case 4047:
case 2729:
case 3710:
case 3763:
case 341:
case 2880:
case 1807:
case 283:
case 403:
case 2519:
case 1773:
case 1567:
case 1966:
case 2323:
case 3254:
case 1258:
case 3142:
case 1058:
case 1561:
case 2745:
case 3336:
case 1232:
case 1385:
case 3150:
case 857:
case 962:
case 225:
case 3891:
case 1373:
case 1305:
case 3956:
case 3557:
case 3582:
case 650:
case 3897:
case 1113:
case 1435:
case 3736:
case 485:
case 1676:
case 205:
case 3068:
case 1359:
case 3551:
case 1933:
case 4000:
case 772:
case 1887:
case 855:
case 3170:
case 3795:
case 1496:
case 686:
case 3363:
case 1881:
case 3834:
case 751:
case 122:
case 1278:
case 889:
case 1753:
case 1592:
case 2414:
case 3990:
case 3217:
case 4066:
case 2866:
case 2053:
case 3011:
case 251:
case 2279:
case 137:
case 1328:
case 2253:
case 3324:
case 563:
case 272:
case 2634:
case 705:
case 1947:
case 1223:
case 2146:
case 2691:
case 1546:
case 175:
case 958:
case 1980:
case 1106:
case 801:
case 193:
case 2285:
case 1442:
case 725:
case 2697:
case 230:
case 2950:
case 1009:
case 447:
case 1708:
case 2249:
case 2942:
case 865:
case 3384:
case 3967:
case 3539:
case 3293:
case 134:
case 2480:
case 1055:
case 243:
case 2441:
case 2748:
case 1209:
case 660:
case 3806:
case 1283:
case 2316:
case 952:
case 1920:
case 469:
case 1472:
case 3682:
case 3813:
case 1197:
case 968:
case 2606:
case 617:
case 1515:
case 31:
case 3918:
case 1914:
case 2882:
case 2857:
case 3712:
case 1134:
case 743:
case 3140:
case 1827:
case 553:
case 2208:
case 1749:
case 1030:
case 2755:
case 946:
case 2935:
case 128:
case 1870:
case 1821:
case 3244:
case 3500:
case 261:
case 653:
case 1251:
case 794:
case 981:
case 1989:
case 1335:
case 1459:
case 1257:
case 1282:
case 315:
case 2445:
case 2612:
case 1568:
case 1051:
case 2943:
case 1808:
case 1396:
case 352:
case 3578:
case 3655:
case 2070:
case 2848:
case 2221:
case 4030:
case 3609:
case 2314:
case 371:
case 3463:
case 3999:
case 1693:
case 531:
case 909:
case 3153:
case 2111:
case 4055:
case 2855:
case 434:
case 2604:
case 3319:
case 1511:
case 1849:
case 91:
case 1916:
case 2117:
case 3648:
case 1721:
case 1428:
case 368:
case 2595:
case 4009:
case 3424:
case 3630:
case 1770:
case 3185:
case 1136:
case 2302:
case 169:
case 3760:
case 3713:
case 2458:
case 2751:
case 346:
case 2536:
case 1825:
case 1342:
case 2931:
case 2193:
case 1266:
case 3362:
case 3954:
case 2347:
case 3895:
case 1239:
case 1437:
case 782:
case 1593:
case 437:
case 1307:
case 3734:
case 3484:
case 3555:
case 144:
case 1781:
case 1488:
case 362:
case 1431:
case 3149:
case 4023:
case 2823:
case 3125:
case 1494:
case 719:
case 3076:
case 493:
case 1668:
case 2512:
case 3498:
case 2928:
case 297:
case 663:
case 2722:
case 185:
case 22:
case 2864:
case 1443:
case 3623:
case 1929:
case 586:
case 797:
case 3326:
case 641:
case 20:
case 2636:
case 1200:
case 2287:
case 2973:
case 2489:
case 422:
case 3530:
case 2040:
case 2038:
case 2695:
case 1945:
case 2281:
case 2238:
case 2878:
case 4078:
case 740:
case 2240:
case 2052:
case 1000:
case 103:
case 1041:
case 2584:
case 1449:
case 2201:
case 1247:
case 3131:
case 3188:
case 1923:
case 2366:
case 314:
case 748:
case 773:
case 2663:
case 2610:
case 350:
case 187:
case 123:
case 976:
case 2207:
case 2985:
case 2072:
case 7:
case 963:
case 386:
case 4058:
case 3412:
case 3090:
case 2832:
case 766:
case 3911:
case 2199:
case 1654:
case 3503:
case 266:
case 3391:
case 1873:
case 3632:
case 3974:
case 4045:
case 2845:
case 3397:
case 2:
case 1978:
case 2829:
case 1408:
case 636:
case 295:
case 477:
case 2300:
case 1352:
case 2741:
case 839:
case 3056:
case 2780:
case 3863:
case 3589:
case 3334:
case 1340:
case 145:
case 2035:
case 2351:
case 1843:
case 756:
case 1742:
case 681:
case 3105:
case 2235:
case 4003:
case 4075:
case 3944:
case 2357:
case 1930:
case 2510:
case 2889:
case 4089:
case 3018:
case 1327:
case 474:
case 1163:
case 2296:
case 2096:
case 568:
case 3218:
case 1214:
case 1321:
case 1020:
case 3495:
case 280:
case 400:
case 1124:
case 742:
case 1837:
case 317:
case 1479:
case 3689:
case 1077:
case 61:
case 420:
case 3884:
case 331:
case 1888:
case 609:
case 184:
case 2423:
case 3532:
case 2042:
case 3067:
case 1894:
case 1955:
case 3898:
case 3306:
case 3558:
case 3061:
case 1002:
case 3786:
case 256:
case 3603:
case 1909:
case 3469:
case 1699:
case 3993:
case 3670:
case 1730:
case 3744:
case 2209:
case 143:
case 708:
case 3166:
case 2331:
case 1447:
case 2401:
case 1249:
case 2708:
case 2692:
case 728:
case 1950:
case 2337:
case 2083:
case 2472:
case 912:
case 1225:
case 1316:
case 2920:
case 3919:
case 1613:
case 494:
case 1025:
case 379:
case 2283:
case 2725:
case 591:
case 3399:
case 1882:
case 901:
case 2914:
case 1375:
case 1597:
case 921:
case 2343:
case 2197:
case 3122:
case 1115:
case 3552:
case 3004:
case 2248:
case 1709:
case 2821:
case 4021:
case 3986:
case 2030:
case 3540:
case 513:
case 2048:
case 2827:
case 3365:
case 2749:
case 3892:
case 996:
case 2435:
case 2064:
case 42:
case 1560:
case 1513:
case 2359:
case 2676:
case 105:
case 506:
case 419:
case 526:
case 3157:
case 654:
case 3182:
case 2305:
case 28:
case 2264:
case 2753:
case 2592:
case 1414:
case 4038:
case 2881:
case 3926:
case 1192:
case 2278:
case 222:
case 4040:
case 2840:
case 2078:
case 202:
case 482:
case 737:
case 3570:
case 1800:
case 2779:
case 3095:
case 1778:
case 3774:
case 1972:
case 1253:
case 722:
case 151:
case 1053:
case 433:
case 1477:
case 1279:
case 211:
case 918:
case 78:
case 1697:
case 2023:
case 1332:
case 3236:
case 1907:
case 1285:
case 1085:
case 3036:
case 3768:
case 3461:
case 497:
case 3962:
case 868:
case 3354:
case 1901:
case 2947:
case 3069:
case 1146:
case 860:
case 1938:
case 466:
case 1940:
case 1073:
case 899:
case 1732:
case 1457:
case 1259:
case 2186:
case 235:
case 3368:
case 2900:
case 1273:
case 1952:
case 910:
case 2690:
case 1586:
case 696:
case 3374:
case 2029:
case 2470:
case 495:
case 2728:
case 277:
case 1118:
case 448:
case 2427:
case 3601:
case 3010:
case 2518:
case 3492:
case 1880:
case 1228:
case 3311:
case 1841:
case 2807:
case 2119:
case 1729:
case 2656:
case 2379:
case 2759:
case 3446:
case 2058:
case 735:
case 2966:
case 1323:
case 1167:
case 2773:
case 2705:
case 2939:
case 618:
case 3284:
case 3393:
case 2162:
case 480:
case 3501:
case 1309:
case 1037:
case 313:
case 220:
case 3141:
case 774:
case 1355:
case 3906:
case 689:
case 1088:
case 1466:
case 3696:
case 3765:
case 74:
case 2216:
case 3799:
case 391:
case 3098:
case 1686:
case 4050:
case 2850:
case 3298:
case 3861:
case 456:
case 1383:
case 612:
case 2743:
case 2835:
case 1970:
case 3133:
case 3415:
case 1422:
case 1043:
case 621:
case 579:
case 3650:
case 2075:
case 24:
case 1526:
case 2661:
case 1348:
case 3818:
case 1156:
case 1814:
case 2957:
case 2556:
case 2481:
case 2440:
case 2951:
case 700:
case 3913:
case 442:
case 2896:
case 3960:
case 2308:
case 1400:
case 2737:
case 2452:
case 298:
case 1382:
case 3286:
case 1803:
case 1875:
case 913:
case 3899:
case 2843:
case 1908:
case 3468:
case 3086:
case 245:
case 1464:
case 1035:
case 2750:
case 1720:
case 3474:
case 1684:
case 1096:
case 3688:
case 1771:
case 3631:
case 142:
case 1478:
case 364:
case 3129:
case 3865:
case 784:
case 991:
case 2014:
case 1563:
case 438:
case 3912:
case 1925:
case 2271:
case 404:
case 3019:
case 284:
case 4088:
case 2888:
case 4031:
case 1714:
case 939:
case 4037:
case 180:
case 2277:
case 2983:
case 424:
case 2665:
case 2796:
case 3417:
case 3528:
case 2071:
case 3158:
case 1816:
case 1242:
case 3346:
case 745:
case 156:
case 2735:
case 2909:
case 1050:
case 4094:
case 3132:
case 2955:
case 1423:
case 1042:
case 4028:
case 407:
case 2280:
case 2828:
case 287:
case 223:
case 3969:
case 3493:
case 3062:
case 1001:
case 2047:
case 2923:
case 1201:
case 2449:
case 2184:
case 3531:
case 1007:
case 354:
case 3756:
case 483:
case 518:
case 1584:
case 427:
case 1832:
case 853:
case 1272:
case 3659:
case 73:
case 1072:
case 1979:
case 3673:
case 1845:
case 1322:
case 3226:
case 3315:
case 2978:
case 2772:
case 4059:
case 565:
case 2599:
case 3103:
case 3175:
case 23:
case 2805:
case 1199:
case 3790:
case 3026:
case 2381:
case 703:
case 2340:
case 173:
case 3628:
case 1448:
case 3444:
case 1430:
case 1300:
case 195:
case 2352:
case 906:
case 2964:
case 66:
case 2387:
case 1829:
case 2701:
case 596:
case 2740:
case 2781:
case 2738:
case 2431:
case 3155:
case 567:
case 2932:
case 2853:
case 3811:
case 4053:
case 3549:
case 2593:
case 3109:
case 2437:
case 2239:
case 2787:
case 1347:
case 2266:
case 1722:
case 3715:
case 197:
case 1928:
case 2885:
case 2372:
case 4085:
case 2494:
case 1512:
case 881:
case 3390:
case 1823:
case 3776:
case 1403:
case 3685:
case 3091:
case 1669:
case 3499:
case 2929:
case 2443:
case 2022:
case 1333:
case 12:
case 1864:
case 1087:
case 1052:
case 2000:
case 96:
case 1238:
case 2104:
case 182:
case 3465:
case 2617:
case 81:
case 1695:
case 1766:
case 626:
case 554:
case 3679:
case 1973:
case 1287:
case 809:
case 1252:
case 1445:
case 790:
case 3013:
case 2568:
case 355:
case 2335:
case 3164:
case 2282:
case 769:
case 1168:
case 2057:
case 2989:
case 3213:
case 2251:
case 3260:
case 1027:
case 188:
case 2975:
case 1314:
case 1830:
case 1021:
case 2574:
case 1227:
case 3178:
case 461:
case 2396:
case 2721:
case 2428:
case 1595:
case 2517:
case 2644:
case 836:
case 1371:
case 2195:
case 564:
case 3893:
case 1117:
case 4049:
case 2849:
case 3792:
case 1604:
case 1111:
case 3998:
case 95:
case 1782:
case 3367:
case 3984:
case 194:
case 3123:
case 3585:
case 2169:
case 1751:
case 290:
case 1937:
case 1569:
case 3361:
case 3206:
case 1302:
case 1883:
case 320:
case 213:
case 2141:
case 2180:
case 508:
case 3349:
case 1541:
case 1819:
case 2765:
case 2696:
case 1580:
case 2084:
case 945:
case 417:
case 300:
case 1547:
case 2861:
case 2572:
case 3743:
case 3842:
case 1312:
case 4067:
case 3325:
case 291:
case 2635:
case 3003:
case 3794:
case 3661:
case 647:
case 3203:
case 2133:
case 3275:
case 1886:
case 2642:
case 895:
case 1497:
case 1265:
case 1304:
case 669:
case 3896:
case 3308:
case 2960:
case 1677:
case 3089:
case 3982:
case 460:
case 3788:
case 3438:
case 1065:
case 1434:
case 1784:
case 3440:
case 499:
case 534:
case 1620:
case 335:
case 3900:
case 2368:
case 842:
case 575:
case 923:
case 176:
case 2754:
case 1460:
case 1826:
case 3245:
case 903:
case 726:
case 593:
case 2114:
case 2991:
case 3229:
case 1647:
case 1514:
case 2601:
case 2492:
case 3518:
case 2374:
case 1915:
case 2263:
case 2997:
case 2210:
case 537:
case 1724:
case 1680:
case 2607:
case 1641:
case 377:
case 2120:
case 450:
case 502:
case 685:
case 2024:
case 1520:
case 3656:
case 3379:
case 1571:
case 2177:
case 3353:
case 1976:
case 1577:
case 414:
case 1763:
case 4090:
case 3939:
case 3773:
case 58:
case 2542:
case 3032:
case 3759:
case 1336:
case 3232:
case 3872:
case 1150:
case 3385:
case 206:
case 486:
case 1502:
case 1369:
case 3058:
case 880:
case 944:
case 603:
case 1268:
case 2182:
case 1956:
case 3264:
case 3064:
case 3435:
case 3785:
case 3359:
case 1551:
case 1486:
case 3676:
case 1736:
case 2815:
case 1769:
case 2151:
case 1897:
case 302:
case 1795:
case 2521:
case 2570:
case 1074:
case 2717:
case 1121:
case 3779:
case 3933:
case 3852:
case 3887:
case 2711:
case 2418:
case 3592:
case 2527:
case 3838:
case 97:
case 322:
case 1834:
case 1011:
case 2652:
case 311:
case 462:
case 2095:
case 2774:
case 2640:
case 337:
case 3450:
case 375:
case 3223:
case 2962:
case 136:
case 2269:
case 3023:
case 3106:
case 3980:
case 2876:
case 4076:
case 3941:
case 897:
case 3692:
case 3902:
case 3255:
case 468:
case 1961:
case 2744:
case 3209:
case 2139:
case 1566:
case 574:
case 1293:
case 3388:
case 3331:
case 1539:
case 2919:
case 1651:
case 2012:
case 833:
case 3977:
case 3283:
case 54:
case 1398:
case 1657:
case 2212:
case 446:
case 3971:
case 4046:
case 3920:
case 1522:
case 129:
case 3343:
case 1860:
case 25:
case 3646:
case 684:
case 1918:
case 11:
case 779:
case 1044:
case 3030:
case 2538:
case 3048:
case 2365:
case 3827:
case 3134:
case 1138:
case 2892:
case 616:
case 2587:
case 2552:
case 2793:
case 82:
case 1500:
case 2004:
case 990:
case 1152:
case 1187:
case 1244:
case 2100:
case 3230:
case 452:
case 1706:
case 3082:
case 3473:
case 3989:
case 41:
case 3251:
case 2213:
case 1965:
case 409:
case 2260:
case 516:
case 2625:
case 2060:
case 1564:
case 3568:
case 2746:
case 3282:
case 1386:
case 3459:
case 3257:
case 721:
case 2178:
case 1292:
case 805:
case 1463:
case 825:
case 171:
case 1999:
case 584:
case 1410:
case 2318:
case 1609:
case 3975:
case 3903:
case 2844:
case 4044:
case 3849:
case 1319:
case 3511:
case 2553:
case 2998:
case 64:
case 168:
case 3721:
case 3428:
case 3517:
case 712:
case 1424:
case 3195:
case 3916:
case 221:
case 369:
case 2585:
case 2454:
case 1046:
case 390:
case 545:
case 3350:
case 872:
case 1185:
case 2361:
case 2006:
case 851:
case 2984:
case 2123:
case 3752:
case 635:
case 3787:
case 3437:
case 2109:
case 3879:
case 1954:
case 4017:
case 1362:
case 296:
case 1484:
case 3674:
case 1734:
case 1678:
case 162:
case 1149:
case 3781:
case 3488:
case 3066:
case 344:
case 2155:
case 3932:
case 3039:
case 3494:
case 53:
case 2525:
case 1664:
case 2390:
case 843:
case 878:
case 1125:
case 436:
case 1797:
case 2715:
case 592:
case 2183:
case 1836:
case 1276:
case 3372:
case 3443:
case 2291:
case 2868:
case 359:
case 2685:
case 1215:
case 3222:
case 1326:
case 2910:
case 3544:
case 3617:
case 1530:
case 2465:
case 158:
case 503:
case 2130:
case 2679:
case 2356:
case 2508:
case 796:
case 523:
case 2874:
case 1108:
case 975:
case 3104:
case 2234:
case 1629:
case 114:
case 1188:
case 767:
case 3184:
case 68:
case 2936:
case 387:
case 3280:
case 3241:
case 1824:
case 210:
case 2969:
case 2493:
case 150:
case 3047:
case 935:
case 1917:
case 977:
case 2854:
case 4054:
case 602:
case 2116:
case 2995:
case 585:
case 2605:
case 1516:
case 804:
case 1194:
case 559:
case 2659:
case 1911:
case 1645:
case 1726:
case 1090:
case 2594:
case 622:
case 2175:
case 2103:
case 33:
case 611:
case 1503:
case 3654:
case 249:
case 1658:
case 392:
case 3978:
case 476:
case 1143:
case 1397:
case 870:
case 637:
case 3772:
case 1632:
case 3033:
case 463:
case 3352:
case 675:
case 3964:
case 1589:
case 3381:
case 1863:
case 1810:
case 754:
case 2628:
case 3707:
case 2189:
case 3843:
case 2904:
case 2559:
case 1313:
case 569:
case 2145:
case 345:
case 2086:
case 398:
case 1105:
case 3930:
case 1944:
case 1616:
case 3742:
case 920:
case 634:
case 2767:
case 2865:
case 4065:
case 2392:
case 1719:
case 1218:
case 757:
case 547:
case 1529:
case 3321:
case 3214:
case 2474:
case 2688:
case 2129:
case 764:
case 3479:
case 3983:
case 3277:
case 1128:
case 3665:
case 3271:
case 94:
case 453:
case 131:
case 3077:
case 2411:
case 2718:
case 3894:
case 2132:
case 3202:
case 1261:
case 974:
case 608:
case 827:
case 2643:
case 3699:
case 1436:
case 1786:
case 1558:
case 3485:
case 3554:
case 3735:
case 1603:
case 87:
case 2967:
case 2384:
case 281:
case 2539:
case 1670:
case 1621:
case 343:
case 378:
case 3950:
case 3447:
case 3249:
case 2462:
case 2704:
case 1846:
case 1212:
case 3225:
case 2682:
case 729:
case 3176:
case 709:
case 2398:
case 4006:
case 2806:
case 1490:
case 3375:
case 3882:
case 1399:
case 3591:
case 209:
case 229:
case 455:
case 3115:
case 3996:
case 4060:
case 3783:
case 3606:
case 2187:
case 885:
case 1587:
case 3008:
case 1004:
case 524:
case 361:
case 1892:
case 994:
case 3755:
case 3534:
case 1456:
case 1151:
case 940:
case 736:
case 305:
case 2736:
case 2551:
case 2268:
case 4091:
case 933:
case 2582:
case 1926:
case 2274:
case 2834:
case 1711:
case 1418:
case 3414:
case 583:
case 1527:
case 507:
case 2666:
case 997:
case 2074:
case 1717:
case 2211:
case 3253:
case 3972:
case 92:
case 1681:
case 372:
case 1638:
case 3471:
case 1774:
case 532:
case 2217:
case 2419:
case 666:
case 1295:
case 2011:
case 3053:
case 351:
case 3839:
case 59:
case 1652:
case 3477:
case 3279:
case 648:
case 3332:
case 465:
case 2622:
case 1467:
case 1354:
case 847:
case 3358:
case 982:
case 3764:
case 3085:
case 1461:
case 3402:
case 16:
case 3073:
case 3457:
case 3259:
case 633:
case 1672:
case 3732:
case 3981:
case 3938:
case 4026:
case 2826:
case 1934:
case 2413:
case 3758:
case 1754:
case 1535:
case 640:
case 3364:
case 3987:
case 3205:
case 697:
case 2724:
case 2641:
case 1607:
case 2196:
case 1374:
case 1263:
case 2915:
case 332:
case 1997:
case 1601:
case 2647:
case 898:
case 1492:
case 551:
case 467:
case 1856:
case 3118:
case 39:
case 2763:
case 619:
case 241:
case 966:
case 60:
case 327:
case 3880:
case 1311:
case 9:
case 816:
case 2520:
case 2571:
case 62:
case 307:
case 3028:
case 2862:
case 763:
case 4062:
case 1120:
case 3626:
case 2369:
case 2502:
case 1550:
case 2054:
case 682:
case 2336:
case 1102:
case 3161:
case 505:
case 2406:
case 2254:
case 1890:
case 948:
case 126:
case 3037:
case 1501:
case 2614:
case 3562:
case 1284:
case 3871:
case 324:
case 1393:
case 561:
case 1147:
case 3231:
case 253:
case 3088:
case 1507:
case 1765:
case 1696:
case 2580:
case 3237:
case 3439:
case 3789:
case 3877:
case 3775:
case 688:
case 3686:
case 1476:
case 803:
case 1867:
case 191:
case 887:
case 823:
case 3294:
case 1298:
case 3422:
case 2299:
case 3970:
case 2886:
case 2798:
case 3526:
case 2602:
case 2099:
case 2992:
case 2671:
case 2620:
case 83:
case 2784:
case 694:
case 1344:
case 3330:
case 543:
case 578:
case 530:
case 370:
case 892:
case 2677:
case 1913:
case 956:
case 1960:
case 2616:
case 1505:
case 1899:
case 439:
case 594:
case 3235:
case 2105:
case 3357:
case 904:
case 678:
case 2944:
case 1694:
case 1086:
case 1468:
case 630:
case 924:
case 3464:
case 3698:
case 3351:
case 2313:
case 2360:
case 3908:
case 3684:
case 717:
case 1474:
case 3720:
case 1129:
case 342:
case 1688:
case 2529:
case 3510:
case 3777:
case 1637:
case 260:
case 3889:
case 3296:
case 413:
case 3925:
case 4084:
case 2884:
case 1019:
case 1528:
case 157:
case 2495:
case 2128:
case 2689:
case 2558:
case 356:
case 2436:
case 2786:
case 2675:
case 1346:
case 3242:
case 970:
case 3816:
case 2267:
case 2469:
case 3154:
case 2993:
case 1643:
case 938:
case 2261:
case 2898:
case 1132:
case 3610:
case 4024:
case 2137:
case 3409:
case 605:
case 2824:
case 154:
case 1588:
case 625:
case 1531:
case 3339:
case 3455:
case 2131:
case 3201:
case 3366:
case 426:
case 99:
case 2645:
case 3598:
case 2090:
case 1594:
case 50:
case 3953:
case 1376:
case 932:
case 3072:
case 1673:
case 1605:
case 3979:
case 1854:
case 2290:
case 2917:
case 1116:
case 800:
case 1543:
case 1315:
case 907:
case 1226:
case 3845:
case 672:
case 3:
case 2143:
case 983:
case 2503:
case 149:
case 2658:
case 366:
case 651:
case 1175:
case 3448:
case 3741:
case 1189:
case 2056:
case 373:
case 3624:
case 533:
case 4063:
case 2589:
case 3165:
case 2334:
case 84:
case 2762:
case 3747:
case 540:
case 2968:
case 3300:
case 548:
case 1155:
case 3380:
case 1549:
case 1811:
case 262:
case 925:
case 3193:
case 1817:
case 2509:
case 905:
case 2895:
case 1109:
case 340:
case 3700:
case 4036:
case 46:
case 2836:
case 3928:
case 397:
case 3722:
case 566:
case 2076:
case 2791:
case 1963:
case 2215:
case 3669:
case 2326:
case 951:
case 1297:
case 683:
case 3475:
case 1868:
case 3333:
case 607:
case 32:
case 828:
case 1097:
case 2623:
case 2015:
case 1874:
case 3878:
case 1234:
case 3087:
case 1653:
case 3959:
case 3504:
case 1130:
case 118:
case 3973:
case 3905:
case 3739:
case 1465:
case 3038:
case 2548:
case 746:
case 2564:
case 1060:
case 3445:
case 1625:
case 1013:
case 189:
case 604:
case 1213:
case 1260:
case 2706:
case 3270:
case 1318:
case 388:
case 1844:
case 3830:
case 3314:
case 271:
case 2463:
case 88:
case 1178:
case 112:
case 4004:
case 3227:
case 2578:
case 3070:
case 2655:
case 542:
case 3117:
case 121:
case 752:
case 3320:
case 2179:
case 3809:
case 2630:
case 2153:
case 771:
case 1998:
case 3855:
case 1792:
case 2319:
case 3604:
case 1553:
case 2812:
case 4012:
case 1367:
case 2246:
case 3988:
case 811:
case 3432:
case 3782:
case 1006:
case 2185:
case 3883:
case 3302:
case 1206:
case 3569:
case 1361:
case 2760:
case 1454:
case 1585:
case 3458:
case 3751:
case 2713:
case 2046:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744200001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,];
var gg_b = "1744200001/";

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
